import { Component, OnInit } from '@angular/core';
import { plans } from 'src/app/plans';
import { RegistrationService } from 'src/app/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prepaid',
  templateUrl: './prepaid.component.html',
  styleUrls: ['./prepaid.component.css']
})
export class PrepaidComponent implements OnInit {

  plans: plans[];
  constructor(private _service: RegistrationService, private _router: Router) { }

  ngOnInit(): void {
    this.getplans();
  }

  private getplans() {
    this._service.getPrepaidplan().subscribe(data => {
      this.plans = data;
    });
  }
  movetopayment() {
    this._router.navigate(['/payment'])
  }

}
