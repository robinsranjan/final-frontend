import { Component, OnInit } from '@angular/core';
import { plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-postpaid',
  templateUrl: './postpaid.component.html',
  styleUrls: ['./postpaid.component.css']
})
export class PostpaidComponent implements OnInit {

  plans: plans[];
  constructor(private _service: RegistrationService, private _router: Router) { }


  ngOnInit(): void {
    this.getplans();
  }
  private getplans() {
    this._service.getPostpaidplan().subscribe(data => {
      this.plans = data;
    });
  }
  movetopayment() {
    this._router.navigate(['/payment'])
  }

}
