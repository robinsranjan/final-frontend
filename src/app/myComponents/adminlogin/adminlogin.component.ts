import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  user = new User();

  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser() {

    this._service.adminlogin(this.user).subscribe(

      (data) => {
        //success
        console.log(data);
        // alert('success');
        this._router.navigate(['/admin'])
      },
      (error) => {
        //error
        console.log(error);
        alert('exception occured');
      }
    );


  }
  toSignup()
  {
    this._router.navigate(['/signup'])
  }
  toAdminRegister()
  {
    this._router.navigate(['/adminregister'])
  }


}
