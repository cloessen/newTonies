import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginMenuComponent } from '../../shared/login-menu/login-menu.component';
import { SignupMenuComponent } from '../../shared/signup-menu/signup-menu.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // public isCollapsed = false;
  // public isLoggedIn = true;
  public isLoggedIn: Observable<User>;



  constructor(
    private _toast: ToastrService,
    private _modal: NgbModal,
    private _auth: AuthService) {
    this.isLoggedIn = this._auth.getAuthState();
  }

  ngOnInit() {
  }

  handleLoginClick() {
    this._modal.open(LoginMenuComponent, {centered: true, windowClass: 'centered-modal'});
  }
  handleRegisterClick() {
    this._modal.open(SignupMenuComponent, {centered: true, windowClass: 'centered-modal'});

  }
  handleLogoutClick() {
      this._auth.logout();
  }

}
