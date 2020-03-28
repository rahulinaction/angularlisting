import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import {ApiService} from '../api.service';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import {User} from '../models/user';


@Injectable()
export class UserEffects {
  constructor(private apiService: ApiService, private action$: Actions) {}

  GetUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(action =>
        this.apiService.getRandomUsers().pipe(
          map((data: User[]) => {
            return UserActions.loadUsersSuccess({ data: data['results'] });
          }),
          catchError((error: Error) => {
            return of(UserActions.loadUsersFailure(error));
          })
        )

      )
    )
  );
}
