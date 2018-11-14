import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _afAuth: AngularFireAuth,
    private _toastr: ToastrService,
    private _router: Router) {
  }

  private loginSuccess() {
    // JUST FOR TESTING
    const title = 'Erfolgreich angemeldet!';
    const msg = 'Herzlich Willkommen!';
    this._toastr.success(msg , title);
    this._router.navigate(['/home']);
  }
  private signupSuccess() {
    const title = 'Erfolgreich registriert!';
    const msg = 'Herzlich Willkommen!';
    this._toastr.success(msg , title);
    this._router.navigate(['/home']);
  }
  private catchedError(e) {
    const errConfig = {
      timeOut: 3000
    }
    const errTitle = 'Ein Fehler ist aufgetreten!';
    if (e.code === 'auth/email-already-in-use') {
      const errMsg = 'Bitte überprüfe deine Anmeldedaten';
      this._toastr.error(errMsg , errTitle, errConfig);
    } else if (e.code === 'auth/wrong-password') {
      const errMsg = 'Passwort und/oder Emailadresse falsch';
      this._toastr.error(errMsg, errTitle, errConfig);
    } else {
      const errMsg = 'Bitte versuche es erneut';
      this._toastr.error(errMsg, errTitle, errConfig);
    }
  }


  // EMAIL & PASSWORD

  public signupWithEmailPassword(email, password, activeModal: NgbActiveModal) {
    this._afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( () => {
        activeModal.close();
        this.signupSuccess();
      }).catch(err => this.catchedError(err));
  }
  public loginWithEmailPassword(email, password, activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
          activeModal.close();
          this.loginSuccess();
        }
      ).catch(err => this.catchedError(err));
  }


  // GOOGLE

  public loginWithGoogle(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((res) => {
        this.loginSuccess();
        activeModal.close();
      }).catch(err => this.catchedError(err));
  }
  public signupWithGoogle(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => {
        this.signupSuccess();
        activeModal.close();
      }).catch(err => this.catchedError(err));
  }


  // FACEBOOK


  public loginWithFacebook(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(() => {
        this.loginSuccess();
        activeModal.close();
      }).catch(err => this.catchedError(err));
  }
  public signupWithFacebook(activeModal: NgbActiveModal) {
    this._afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .then(() => {
        this.signupSuccess();
        activeModal.close();
      }).catch(err => this.catchedError(err));
  }


  // LOGOUT


  public logout() {
    this._afAuth.auth.signOut()
      .then( () => {
        const title = 'Erfolgreich abgemeldet';
        const msg = 'Aufwiedersehen, bis zum nächsten mal';
        this._toastr.success(msg , title);
        this._router.navigate(['/']);
      }).catch(err => this.catchedError(err));
  }
  public getAuthState() {
    return this._afAuth.authState;
  }
  public getUid() {
    return this._afAuth.auth.currentUser.uid;
  }
  public isLoggedIn() {
    return this._afAuth.auth.currentUser ? true : false;
  }
  public getCurrentUser() {
    return this._afAuth.auth.currentUser;
  }
}
