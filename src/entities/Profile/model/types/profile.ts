import { TObjectValue } from 'shared/types/types';
import { Country, Currency } from 'shared/constants/common';

export type TProfile = {
  first: string;
  lastname: string;
  age: number,
  currency: TObjectValue<typeof Currency>,
  country: TObjectValue<typeof Country>,
  city: string,
  username: string;
  avatar: string
}

export type ProfileScheme = {
  data?: TProfile,
  error?: string;
  isLoading: boolean;
  readonly: boolean;
}
