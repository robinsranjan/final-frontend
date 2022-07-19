import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-addprepaidplan',
  templateUrl: './addprepaidplan.component.html',
  styleUrls: ['./addprepaidplan.component.css']
})
export class AddprepaidplanComponent implements OnInit {


  plans: plans = new plans();
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
  }
  saveplans() {
    this._service.addprepaidplan(this.plans).subscribe(

      (data) => {
        //success
        console.log(data);
        alert('success');
        this._router.navigate(['/admin'])
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
