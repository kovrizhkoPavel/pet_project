import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/test';
import * as Router from 'react-router';
import { StateScheme } from '@/shared/types/stateScheme';
import { renderComponent } from '@/shared/lib/tests/renderComponent/renderComponent';
import { TProfile } from '@/entities/Profile';
import { EditProfileForm } from './EditProfileForm';
import * as query from '../../model/api/profileFormApi';

const profileData: TProfile = {
  id: '1',
  lastname: 'asfewr22',
  age: 46522,
  currency: 'EU',
  country: 'Belarus',
  city: 'Moscow',
  username: 'admin213',
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrsCRsWZNnmDAAqUAQdPiW_s9xcozSwftgA&s',
  firstname: 'admin2131',
};

const options = {
  route: '/1',
  initialState: {
    user: {
      authData: {
        id: '1',
        username: 'user',
      },
    },
  } as StateScheme,
};

const mockSubmit = jest.fn();

describe('features/EditProfileForm', () => {
  beforeEach(() => {
    renderComponent(
      <EditProfileForm
        isError={false}
        isLoading={false}
        initialData={profileData}
      />,
      options,
    );
  });

  jest.spyOn(Router, 'useParams').mockReturnValue({ id: '1' });
  jest.spyOn(query, 'useEditProfileMutation').mockImplementation(() => [
    mockSubmit,
    {
      isSuccess: false,
      isError: false,
      isLoading: false,
      reset: () => '',
    },
  ]);

  test('should render', () => {
    expect(screen.getByTestId('edit-profile-form')).toBeInTheDocument();
  });

  test('should switch readonly state', async () => {
    await userEvent.click(screen.getByTestId('edit-profile-form-edit-button'));
    await expect(
      screen.getByTestId('edit-profile-form-submit-button'),
    ).toBeInTheDocument();
  });

  test('should reset changes', async () => {
    await userEvent.click(screen.getByTestId('edit-profile-form-edit-button'));
    await userEvent.clear(
      screen.getByTestId('edit-profile-form-firstname-input'),
    );
    await userEvent.click(screen.getByTestId('edit-profile-form-reset-button'));
    await expect(
      screen.getByTestId('edit-profile-form-firstname-input'),
    ).toHaveValue('admin2131');
  });

  test('should not submit form', async () => {
    await userEvent.click(screen.getByTestId('edit-profile-form-edit-button'));
    await userEvent.clear(
      screen.getByTestId('edit-profile-form-firstname-input'),
    );
    await userEvent.click(
      screen.getByTestId('edit-profile-form-submit-button'),
    );
    await expect(mockSubmit).not.toHaveBeenCalled();
  });

  test('should submit form', async () => {
    await userEvent.click(screen.getByTestId('edit-profile-form-edit-button'));
    await userEvent.clear(
      screen.getByTestId('edit-profile-form-firstname-input'),
    );
    await userEvent.type(
      screen.getByTestId('edit-profile-form-firstname-input'),
      'testUser',
    );
    await userEvent.click(
      screen.getByTestId('edit-profile-form-submit-button'),
    );

    await expect(mockSubmit).toHaveBeenCalled();
    expect(mockSubmit).toHaveBeenCalledWith({
      ...profileData,
      firstname: 'testUser',
    });
  });
});
