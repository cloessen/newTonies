import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
// import { Store } from '@ngrx/store';
// import { AppState, getIsLoading } from '../../app.reducers';
import { LoginMenuComponent } from '../login-menu/login-menu.component';

@Component({
  selector: 'app-signup-menu',
  templateUrl: './signup-menu.component.html',
  styleUrls: ['./signup-menu.component.scss']
})
export class SignupMenuComponent implements OnInit {

  public signupForm: FormGroup;
  // public isLoading$: Observable<boolean>;
  public isLoading$ = of(false);


  constructor(
    private _auth: AuthService,
    private activeModal: NgbActiveModal,
    // private _store: Store<AppState>,
    private _modalService: NgbModal
  ) { }

  ngOnInit() {
    // this.isLoading$ = this._store.select(getIsLoading);
    this.signupForm = new FormGroup({
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]),
      'password': new FormControl(
        null,
        [Validators.required]),
      'confirmPassword': new FormControl(
        null,
        [Validators.required])
    }, this.comparePassword.bind(this));
  }

  // COMPARE PASSWORDS VALIDATOR
  private comparePassword(form: FormControl): {[key: string]: boolean} {
    return form.value.password !== form.value.confirmPassword ? {'passwordsDontMatch': true} : null;
  }

  // HANDLE DIFFERENT SIGNUPS
  public handleEmailSignup() {
    this._auth.signupWithEmailPassword(this.email.value, this.password.value, this.activeModal);
  }
  public handleGoogleSignup() {
    this._auth.signupWithGoogle(this.activeModal);
  }
  public handleFacebookSignup() {
    this._auth.signupWithFacebook(this.activeModal);
  }

  handleOpenLogin() {
    this.activeModal.close();
    this._modalService.open(LoginMenuComponent, {centered: true, windowClass: 'centered-modal'});
  }

  // GETTERS
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }
  get errors() {
    return this.signupForm.errors;
  }
}
