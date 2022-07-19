import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Smspojo } from 'src/app/smspojo';
import { User } from 'src/app/user';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  smspojo = new Smspojo();

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  forgot() {
    this._service.sendotp(this.smspojo).subscribe(

      (data) => {
        //success
        console.log(data);
        // alert('success');
        this._router.navigate(['/verifyotp'])
      },
      (error) => {
        //error
        console.log(error);
        alert('Enter correct credentials');

      }
    );

  }
}


