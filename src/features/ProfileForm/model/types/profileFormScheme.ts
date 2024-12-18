import { TProfile } from 'entities/Profile';
import { TProfileValidationError } from 'entities/Profile/types/profile';

export type ProfileFormScheme = {
  initialData?: TProfile,
  formData?: TProfile,
  error?: string;
  validationError?: TProfileValidationError;
  readonly: boolean;
};
