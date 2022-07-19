import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }
  toAbout()
  {
    document.getElementById("about")?.scrollIntoView();
  }
  toContact()
  {
    this._router.navigate(['/contact'])
  }
  toService()
  {
    this._router.navigate(['/service'])
  }
  toHome()
  {
    this._router.navigate(['/home'])
  }
  toLogin()
  {
    this._router.navigate(['/login'])
  }
  

}
