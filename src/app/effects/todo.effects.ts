import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {ApiService} from '../api.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ToDoActions from '../actions/todo.actions';

import {Todo} from '../models/todo';

@Injectable()
export class ToDoEffects {
  constructor(private apiService: ApiService, private action$: Actions) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.loadTodos),
      mergeMap(action =>
        this.apiService.getTodos().pipe(
          map((data: Todo[]) => {
            return ToDoActions.loadTodosSuccess({ data });
          })
        )
      )
    )
  );
}
