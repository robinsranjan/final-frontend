import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { Smspojo } from 'src/app/smspojo';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrls: ['./verifyotp.component.css']
})
export class VerifyotpComponent implements OnInit {

  smspojo = new Smspojo();
   otpval ='';
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
 
  verifyotp(otpval: string) {

     

    this._service.verifyotp(this.smspojo).subscribe(

      (data) => {
        if(data!='otp is Invalid'){
        console.log('test'+data);
        // alert('success');
        this._router.navigate(['/resetpassword'])
        }
        else{
          
          alert('Enter correct credentials'); 
        }
      },
      (error) => {
        //error
        console.log('test Error'+error);
        alert('Enter correct credentials'+error);
        //this._router.navigate(['/resetpassword'])
      }
    );

  }

}