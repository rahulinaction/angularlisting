import {Todo} from '../models/todo';

export default class ToDoState {
  ToDos: Array<Todo>;
  ToDoError: any;
}

export const initializeTodoState = (): ToDoState => {
  return { ToDos: Array<Todo>(), ToDoError: null };
};
