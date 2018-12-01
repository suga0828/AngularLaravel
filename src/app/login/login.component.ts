import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';

import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any =  {};
  login  = true;

  operation = this.activatedRoute.snapshot.params['operation'];
  isLogged: boolean = this.userService.isLogged;
  @Output() isLoggedToApp: boolean = this.isLogged;
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  logIn() {
    console.log('login');
    this.userService.logIn(this.user)
      .subscribe(data => {
        this.userService.setToken(data);
        this.router.navigate(['home']);
      }, error => console.log(error));
  }
  signUp() {
    console.log('signup');
    console.log(this.user);
    this.userService.signUp(this.user)
      .subscribe(data => {
        alert(data.message);
      }, error => alert(error));
  }

  ngOnInit() {
    if (this.isLogged && [this.operation = 'logout']) {
      this.logOut();
    }
  }

  logOut() {
    this.userService.logOut()
      .subscribe( data => {
        alert(data.message);
        this.router.navigate(['login']);
      }, error => console.log(error));
  }

  changeAction() {
    this.login ? this.login = false : this.login = true;
  }

}
