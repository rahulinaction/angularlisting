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

export interface State {
  todos: ToDoState;
}

export const reducers: ActionReducerMap<State> = {
  todos: ToDoReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
