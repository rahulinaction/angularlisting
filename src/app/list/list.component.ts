import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiService} from '../api.service';
import {User} from '../models/user';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users: User[];
  constructor(private api: ApiService) { 
    this.users = [];
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.fetchUsers();
    }, 3000);
  }

  fetchUsers() {
    this.api.getRandomUsers().subscribe(users => {
      this.users = users['results'];
    });
  }
}
