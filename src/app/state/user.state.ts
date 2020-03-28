import {User} from '../models/user';
import {environment} from '../../environments/environment';
export default class UserState {
  Users: Array<User>;
  UserError: Error;
  page: number;
}

export const initializeUserState = (): UserState => {
  return { Users: Array<User>(), UserError: null, page: environment.initialPage };
};
