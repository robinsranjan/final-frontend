import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  moveToPrepaid()
  {
    this._router.navigate(['/prepaid'])
  }
  
  moveToPostpaid()
  {
    this._router.navigate(['/postpaid'])
  }
  
  moveToDongle()
  {
    this._router.navigate(['/dongle'])
  }


}
