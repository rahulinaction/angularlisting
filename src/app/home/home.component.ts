import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiService} from '../api.service';
import {Todo} from '../models/todo';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  getList: any;
  todos: Todo[];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getTodos().subscribe(todoItems => {
      this.todos  = todoItems;
    });
  }

}
