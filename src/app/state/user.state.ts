import {User} from '../models/user';

export default class UserState {
  Users: Array<User>;
  UserError: Error;
}

export const initializeUserState = (): UserState => {
  return { Users: Array<User>(), UserError: null };
};
