import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from '../actions/todo.actions';
import {Todo} from '../models/todo';
import ToDoState, { initializeTodoState } from '../state/todo.state';

const initialState = initializeTodoState();

const reducer = createReducer(
  initialState,
  on(ToDoActions.loadTodos, state => state),
  on(ToDoActions.loadTodosSuccess, (state: ToDoState, { data }) => {
    return { ...state, ToDos: data, ToDoError: null };
  }),
  on(ToDoActions.loadTodosFailure, (state: ToDoState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, ToDoError: error };
  })
);

export function ToDoReducer(
  state: ToDoState | undefined,
  action: Action
): ToDoState {
  return reducer(state, action);
}

