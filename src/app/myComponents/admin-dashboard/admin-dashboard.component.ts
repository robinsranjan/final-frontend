import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  moveToAddPrepaid() {
    this._router.navigate(['/addprepaid'])
  }
  moveToAddPostpaid() {
    this._router.navigate(['/addpostpaid'])
  }
  moveToAddDongle() {
    this._router.navigate(['/adddongle'])
  }

  moveToMessage()
  {
    this._router.navigate(['/message'])
  }
}
