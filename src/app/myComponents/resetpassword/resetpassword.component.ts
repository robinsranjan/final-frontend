import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  user = new User();
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  updatepassword() {
    this._service.updatepwd(this.user).subscribe(
      data => {
        console.log("successfully uploaded")
        this._router.navigate(['/login'])
      },
      error => {
        console.log("error occured while updateing")
      }
    );
  }

}
