import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Store } from '@ngrx/store';
// import { AppState, getIsLoading } from '../../app.reducers';
import { Observable, of } from 'rxjs';
import { SignupMenuComponent } from '../signup-menu/signup-menu.component';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  public loginForm: FormGroup;
  // public isLoading$: Observable<boolean>;
  public isLoading$ = of(false);

  constructor(
    private _auth: AuthService,
    private activeModal: NgbActiveModal,
    // private _store: Store<AppState>,
    private _modalService: NgbModal
  ) {
    // this._auth.logout();
  }

  ngOnInit() {
    // this.isLoading$ = this._store.select(getIsLoading);
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  // HANDLE DIFFERENT LOGINS
  public handleEmailLogin() {
    this._auth.loginWithEmailPassword(this.email.value, this.password.value, this.activeModal);
  }
  public handleGoogleLogin() {
    this._auth.loginWithGoogle(this.activeModal);
  }
  public handleFacebookLogin() {
    this._auth.loginWithFacebook(this.activeModal);

  }

  handleOpenSignup() {
    console.log('handleOpenSignup');
    this.activeModal.close();
    this._modalService.open(SignupMenuComponent, {centered: true, windowClass: 'centered-modal'});
  }

  // GETTERS
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
