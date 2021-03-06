import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LandingpageComponent } from './layout/landingpage/landingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalConfig, ToastrModule } from 'ngx-toastr';
import { AuthService } from './services/auth.service';
import { LoginMenuComponent } from './shared/login-menu/login-menu.component';
import { SignupMenuComponent } from './shared/signup-menu/signup-menu.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { ToniesService } from './services/tonies.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';
import { ScreenService } from './services/screen.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './app.reducer';


const globalToastrConfig: Partial<GlobalConfig> = {
  timeOut: 2000,
  extendedTimeOut: 10,
  maxOpened: 4,
  autoDismiss: true,
  positionClass: 'toast-top-center',
  easeTime: 300,
  progressBar: true,
  titleClass: 'text-dark',
  messageClass: 'text-dark'
};
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    LoginMenuComponent,
    SignupMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(globalToastrConfig), // ToastrModule added
    ScrollingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  entryComponents: [
    LoginMenuComponent,
    SignupMenuComponent
  ],
  providers: [
    AuthService,
    ToniesService,
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
