import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

moveToService()
{
  this._router.navigate(['/service'])
}


}
