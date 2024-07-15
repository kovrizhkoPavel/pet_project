import { StateScheme } from 'shared/types/stateScheme';
import { expect } from '@storybook/test';
import { ValidatorError } from 'entities/Profile/constants';
import { getProfileValidationError } from './getProfileValidationError';

const validationError = {
  firstname: ValidatorError.REQUIRED,
};

describe('getProfileValidationError', () => {
  test('should get profile validation error', () => {
    const state = {
      profile: {
        validationError,
      },
    } as StateScheme;

    expect(getProfileValidationError(state)).toEqual(validationError);
  });

  test('should work with empty state', () => {
    expect(getProfileValidationError({} as StateScheme)).toBe(undefined);
  });
});
