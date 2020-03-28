import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiService} from '../api.service';
import {User} from '../models/user';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import * as UserActions from '../actions/user.actions';
import UserState from '../state/user.state';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[];
  userError: Error = null;
  user$: Observable<UserState>;
  UserSubscription: Subscription;
  constructor(private api: ApiService, private store: Store<{ users: UserState }>) { 
    this.users = [];
    this.user$ = store.pipe(select('users'));
  }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.fetchUsers();
    }, 3000);*/
    this.UserSubscription = this.user$
    .pipe(
      map(x => {
          this.users = x.Users;
          this.userError = x.UserError;
      })
    )
    .subscribe();
    this.store.dispatch(UserActions.loadUsers());
  }

  fetchUsers() {
    this.api.getRandomUsers().subscribe(users => {
      this.users = users['results'];
    });
  }
}
