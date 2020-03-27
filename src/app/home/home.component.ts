import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiService} from '../api.service';
import { Observable, Subscription } from 'rxjs';

import { map, catchError, mergeMap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';
import {Todo} from '../models/todo';
import * as ToDoActions from '../actions/todo.actions';
import ToDoState from '../state/todo.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getList: any;
  todos: Todo[];
  todoError: Error = null;
  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  constructor(private api: ApiService, private store: Store<{ todos: ToDoState }>) {
    this.todos = [];
    this.todo$ = store.pipe(select('todos'));
  }


  ngOnInit(): void {
    this.ToDoSubscription = this.todo$
    .pipe(
      map(x => {
          this.todos = x.ToDos;
          this.todoError = x.ToDoError;
      })
    )
    .subscribe();
    this.store.dispatch(ToDoActions.loadTodos());
  }


  fetchTodos() {
    this.api.getTodos().subscribe(todoItems => {
      this.todos  = todoItems;
    });
  }

}
