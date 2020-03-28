import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import {Todo} from '../models/todo';
import UserState, { initializeUserState } from '../state/user.state';

const initialState = initializeUserState();

const reducer = createReducer(
  initialState,
  on(UserActions.loadUsers, state => state),
  on(UserActions.loadUsersSuccess, (state: UserState, { data }) => {
    return { ...state, Users: data, UserError: null };
  }),
  on(UserActions.loadUsersFailure, (state: UserState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, UserError: error };
  })
);

export function UserReducer(
  state: UserState | undefined,
  action: Action
): UserState {
  return reducer(state, action);
}

