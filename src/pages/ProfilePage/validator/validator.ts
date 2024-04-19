import { TProfile } from 'entities/Profile';
import { validateFirstname } from 'pages/ProfilePage/validator/validateFirstname';
import { validateLastname } from 'pages/ProfilePage/validator/validateLastname';
import { validateAge } from 'pages/ProfilePage/validator/validateAge';

export const validator = (profileData?: TProfile) => ({
  ...validateFirstname(profileData?.firstname),
  ...validateLastname(profileData?.lastname),
  ...validateAge(profileData?.age),
});
