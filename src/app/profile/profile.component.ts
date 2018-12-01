import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

import { User } from '../interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {};
  users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser();
    this.getUsers();
  }

  getUser() {
    this.userService.getUser()
      .subscribe( (data: User) => this.user = data, error => console.log(error));
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe( (data: User[]) => this.users = data, error => console.log(error) );
  }

}
