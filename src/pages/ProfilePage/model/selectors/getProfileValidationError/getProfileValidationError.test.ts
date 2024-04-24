import { StateSchema } from 'shared/types/stateSchema';
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
    } as StateSchema;

    expect(getProfileValidationError(state)).toEqual(validationError);
  });

  test('should work with empty state', () => {
    expect(getProfileValidationError({} as StateSchema)).toBe(undefined);
  });
});
