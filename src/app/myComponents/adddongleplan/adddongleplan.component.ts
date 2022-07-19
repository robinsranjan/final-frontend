import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-adddongleplan',
  templateUrl: './adddongleplan.component.html',
  styleUrls: ['./adddongleplan.component.css']
})
export class AdddongleplanComponent implements OnInit {
  plans: plans = new plans();
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }

  saveplans() {
    this._service.adddongleplan(this.plans).subscribe(

      (data) => {
        //success
        console.log(data);
        alert('success');
        this._router.navigate(['/admin'])
        // this._router.navigate(['/loginsuccess'])
      },
      (error) => {
        //error
        console.log(error);
        alert('exception occured');
      }
    );

  }


  onSubmit() {
    console.log(this.plans);
    this.saveplans();
  }

}
