import { ProfileCard, TProfile } from 'entities/Profile';
import { useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { TReducers } from 'shared/types/stateScheme';
import { useProfileForm } from '../../hooks/useProfileForm';
import {
  getProfileFormValidationError,
} from '../../model/selectors/getProfileFormValidationError/getProfileFormValidationError';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { ProfileFormHeader } from '../ProfileFormHeader/ProfileFormHeader';
import { profileFormReducer } from '../../model/slice/profileFormSlice';
import { getProfileFormReadonly } from '../../model/selectors/getProfileFormReadonly/getProfileFormReadonly';

type TEditProfileFormProps = {
  className?: string;
  initialData: TProfile | null;
  isLoading: boolean;
  isError: boolean;
}

const initialReducers: TReducers = {
  profileForm: profileFormReducer,
};

export const EditProfileForm = (props: TEditProfileFormProps) => {
  const {
    className, initialData, isLoading, isError,
  } = props;

  const formData = useSelector(getProfileFormData);
  const isReadOnly = useSelector(getProfileFormReadonly);
  const validationError = useSelector(getProfileFormValidationError);

  useDynamicModuleLoader(initialReducers);

  const {
    onLastNameChange,
    onFirstNameChange,
    onAgeChange,
    onCityChange,
    onCurrencyChange,
    onCountryChange,
    onAvatarChange,
    onButtonSubmit,
    isLoading: isFormLoading,
    isError: isFormError,
  } = useProfileForm(initialData);

  return (
    <div className={className} data-testid="edit-profile-form">
      <ProfileFormHeader onSubmit={onButtonSubmit} />
      <ProfileCard
        data={formData}
        isLoading={isLoading || isFormLoading}
        error={isError || isFormError}
        readonly={isReadOnly}
        validationError={validationError}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onAgeChange={onAgeChange}
        onCityChange={onCityChange}
        onAvatarChange={onAvatarChange}
        onCountryChange={onCountryChange}
        onCurrencyChange={onCurrencyChange}
      />
    </div>
  );
};
