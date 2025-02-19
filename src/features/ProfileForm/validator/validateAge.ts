import { ProfileValidatorError } from '@/entities/Profile';
import { TProfileValidationError } from '@/entities/Profile/types/profile';

export const validateAge = (value?: number): Pick<TProfileValidationError, 'age'> => {
  if (!value) {
    return { age: ProfileValidatorError.REQUIRED };
  }

  if (!Number.isInteger(+value)) {
    return { age: ProfileValidatorError.ONLY_INTEGER };
  }

  return {};
};
