import { TObjectValue } from 'shared/types/types';
import { Country, Currency } from 'shared/constants/common';
import { ValidatorError } from '../constants';

export type TProfile = {
  id?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  age?: number,
  currency?: TObjectValue<typeof Currency>,
  country?: TObjectValue<typeof Country>,
  city?: string,
  avatar?: string
}

export type TProfileValidationError = {
  firstname?: TObjectValue<typeof ValidatorError>;
  lastname?: TObjectValue<typeof ValidatorError>;
  age?: TObjectValue<typeof ValidatorError>;
}

export type ProfileScheme = {
  data?: TProfile,
  form?: TProfile,
  error?: string;
  validationError?: TProfileValidationError;
  isLoading: boolean;
  readonly: boolean;
}
