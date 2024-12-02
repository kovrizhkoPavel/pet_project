import { TProfile } from 'entities/Profile';
import { validateFirstname } from './validateFirstname';
import { validateLastname } from './validateLastname';
import { validateAge } from './validateAge';

export const profileValidator = (profileData?: TProfile) => ({
  ...validateFirstname(profileData?.firstname),
  ...validateLastname(profileData?.lastname),
  ...validateAge(profileData?.age),
});
