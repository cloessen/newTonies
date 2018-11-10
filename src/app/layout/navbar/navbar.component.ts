import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public isCollapsed = false;
  public isLoggedIn = true;


  constructor() { }

  ngOnInit() {
  }

  signOutHandler() {
      alert('erfolgreich abgemeldet, bis zum nächsten mal');
  }

}
