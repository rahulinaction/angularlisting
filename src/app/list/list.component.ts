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
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getRandomUsers().subscribe(users => {
      // tslint:disable-next-line: no-string-literal
      this.users = users['results'];
      //console.log('The users is', users);
    });
  }

}
