import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { ValidatorError } from 'entities/Profile/constants';
import { getProfileFormValidationError } from './getProfileFormValidationError';

const validationError = {
  firstname: ValidatorError.REQUIRED,
};

describe('getProfileFormValidationError', () => {
  test('should get profile validation error', () => {
    const state = {
      profile: {
        validationError,
      },
    } as StateScheme;

    expect(getProfileFormValidationError(state)).toEqual(validationError);
  });

  test('should work with empty state', () => {
    expect(getProfileFormValidationError({} as StateScheme)).toBe(undefined);
  });
});
