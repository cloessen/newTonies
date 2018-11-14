import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginMenuComponent } from '../../shared/login-menu/login-menu.component';
import { SignupMenuComponent } from '../../shared/signup-menu/signup-menu.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {

  private shareURL = 'https://localhost:4200/wishlist';
  public linkString = `https://www.facebook.com/plugins/share_button.php?href=${this.shareURL}&layout=button&size=large&mobile_iframe=false&appId=1899401013632694&width=73&height=28`

  constructor(
    private _toast: ToastrService,
    private _modal: NgbModal) {
  }

  handleLoginClick() {
    this._modal.open(LoginMenuComponent, {centered: true, windowClass: 'centered-modal'});
  }
  handleRegisterClick() {
    this._modal.open(SignupMenuComponent, {centered: true, windowClass: 'centered-modal'});

  }

  ngOnInit() {
  }

}
