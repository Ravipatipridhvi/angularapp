import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {Loginmodel} from '../loginmodel';

@Component({
  selector: 'app-loginlist',
  templateUrl: './loginlist.component.html',
  styleUrls: ['./loginlist.component.css']
})
export class LoginlistComponent implements OnInit {
  loginModel: Loginmodel =  new Loginmodel();
  message = '';
  constructor(private router: Router ) { }
  ngOnInit() {
  }
  onSubmitClick() {
    // tslint:disable-next-line:triple-equals
    if (this.loginModel.username == 'jhansi' && this.loginModel.password == 'test123') {
      this.router.navigate(['departments/departlist']);
    } else {
      this.message = 'Invalid Credentials';    }
  }
}
