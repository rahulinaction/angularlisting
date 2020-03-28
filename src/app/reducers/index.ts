import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import ToDoState from '../state/todo.state';
import {ToDoReducer} from '../reducers/todo.reducer';
import UserState from '../state/user.state';
import {UserReducer} from '../reducers/user.reducer';
export interface State {
  todos: ToDoState;
  users: UserState;
}

export const reducers: ActionReducerMap<State> = {
  todos: ToDoReducer,
  users: UserReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
