import { Component, OnInit, HostListener} from '@angular/core';
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
  page: number;
  userError: Error = null;
  user$: Observable<UserState>;
  UserSubscription: Subscription;
  constructor(private api: ApiService, private store: Store<{ users: UserState }>) { 
    this.users = [];
    this.page = 1;
    this.user$ = store.pipe(select('users'));
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    //In chrome and some browser scroll is given to body tag
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if(pos === max && this.page <= environment.pageLimit )   {
      this.store.dispatch(UserActions.loadUsers({page: this.page}));
    }
  }
  ngOnInit(): void {
    this.UserSubscription = this.user$
    .pipe(
      map(x => {
          this.users = x.Users;
          this.userError = x.UserError;
          this.page = x.page;
      })
    )
    .subscribe();
    setTimeout(() => {
      this.store.dispatch(UserActions.loadUsers({page: this.page}));
    }, 3000);
  }
}
