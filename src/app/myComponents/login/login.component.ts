import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user = new User();

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {

    this._service.loginUserFromRemote(this.user).subscribe(

      (data) => {
        //success
        console.log(data);
        // alert('success');
        this._router.navigate(['/home'])
      },
      (error) => {
        //error
        console.log(error);
        alert('Enter correct credentials');
      }
    );


  }


  toSignup() {
    this._router.navigate(['/signup'])
  }
  toAdminLogin() {
    this._router.navigate(['/adminlogin'])
  }
  toForgotPassword() {
    this._router.navigate(['/forgotpassword'])
  }

}
