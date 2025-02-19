import { expect } from '@storybook/test';
import { TProfile } from '@/entities/Profile';
import { ValidatorError } from '@/entities/Profile/constants';
import { profileValidator } from './profileValidator';

const data: TProfile = {
  firstname: 'test',
  lastname: 'test',
  age: 1,
};

describe('profileValidator', () => {
  test('should be valid', () => {
    expect(profileValidator(data)).toEqual({});
  });

  test('should be invalid firstname', () => {
    const invalidData = {
      ...data,
      firstname: '',
    };
    const invalidError = {
      firstname: ValidatorError.REQUIRED,
    };
    expect(profileValidator(invalidData)).toEqual(invalidError);
  });

  test('should be invalid lastname', () => {
    const invalidData = {
      ...data,
      lastname: '',
    };
    const invalidError = {
      lastname: ValidatorError.REQUIRED,
    };
    expect(profileValidator(invalidData)).toEqual(invalidError);
  });

  test('should be invalid age', () => {
    const invalidData = {
      ...data,
      age: 1.1,
    };
    const invalidError = {
      age: ValidatorError.ONLY_INTEGER,
    };
    expect(profileValidator(invalidData)).toEqual(invalidError);
  });
});
