import { createSelector } from 'reselect';
import { getUser, IUser } from '../reducers/auth';

const computeFullname = ({ name, lastname }: IUser) => `${name} ${lastname}`;

export const selectFullName = createSelector(
  getUser,
  computeFullname,
);
