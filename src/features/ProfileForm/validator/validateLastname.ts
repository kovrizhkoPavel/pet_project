import { ProfileValidatorError } from '@/entities/Profile';
import { TProfileValidationError } from '@/entities/Profile/types/profile';

export const validateLastname = (
  value?: string,
): Pick<TProfileValidationError, 'lastname'> =>
  value?.length === 0 ? { lastname: ProfileValidatorError.REQUIRED } : {};
