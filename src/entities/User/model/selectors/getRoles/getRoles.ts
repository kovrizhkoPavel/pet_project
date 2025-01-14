import { createSelector } from '@reduxjs/toolkit';
import { getUserState, UserRole } from 'entities/User';

export const getUserRoles = createSelector(getUserState, (state) => state.authData?.roles || []);

export const getIsUserAdmin = createSelector(
  getUserRoles,
  (roles) => roles.includes(UserRole.ADMIN),
);
export const getIsUserManager = createSelector(
  getUserRoles,
  (roles) => roles.includes(UserRole.MANAGER),
);
