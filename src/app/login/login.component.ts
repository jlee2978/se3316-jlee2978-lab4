import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private userid: string;
  private userpwd: string;
  private loginError: boolean;
  private role: string;

  constructor(private router: Router) { }

  login() {
    this.role = '';

    if (this.userid == 'admin' && this.userpwd == 'admin') {
      this.role = 'admin'
    }

    if (this.userid == 'user' && this.userpwd == 'user') {
      this.role = 'user'
    }

    // boolean loginError set to true if role has been assigned
    // and false otherwise which indicates a login error
    this.loginError = (this.role.length == 0);

    if (!this.loginError) {
      //if no error on login, navigate to /item/:userid/:role
      this.router.navigate(['/item', this.userid, this.role]);
    }
  }

}
