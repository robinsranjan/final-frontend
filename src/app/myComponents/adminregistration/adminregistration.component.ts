import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';

@Component({
  selector: 'app-adminregistration',
  templateUrl: './adminregistration.component.html',
  styleUrls: ['./adminregistration.component.css']
})
export class AdminregistrationComponent implements OnInit {

  constructor(private userService: UserService,private _router: Router) { }

  public user = {

    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobileNumber: '',
    adharNumber: '',
    password: '',
    type: ''

  };

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if (
      this.user.firstName == '' || this.user.firstName == null
      || this.user.lastName == '' || this.user.lastName == null
      || this.user.password == '' || this.user.password == null
      || this.user.email == '' || this.user.email == null) {
      alert('Please enter all the details');
      return;

    }


    this.userService.addAdmin(this.user).subscribe(
      (data) => {
        //success
        console.log(data);
        alert('success');
        this._router.navigate(['/admin'])
      },
      (error) => {
        //error
        console.log(error);
        alert('Select another user name');
      }
    );


  }
  
  toAdminLogin()
  {
    this._router.navigate(['/adminlogin'])
  }

}
