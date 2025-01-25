import { ProfileValidatorError } from 'entities/Profile';
import { TProfileValidationError } from 'entities/Profile/types/profile';

export const validateFirstname = (value?: string): Pick<TProfileValidationError, 'firstname'> => (
  value?.length === 0 ? { firstname: ProfileValidatorError.REQUIRED } : {}
);
