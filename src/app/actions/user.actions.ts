import { createAction, props } from '@ngrx/store';
import {User} from '../models/user';
export const loadUsers = createAction(
  '[User] Load Users',
  props<{ page: number }>()
);

export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ data: User[], page: number }>()
);

export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<Error>()
);
