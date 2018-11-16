import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllToniesRoutingModule } from './all-tonies-routing.module';
import { AllToniesComponent } from './all-tonies.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SharedModule } from '../../../shared/shared.module';
import { ScreenService } from '../../../services/screen.service';

@NgModule({
  declarations: [
    AllToniesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AllToniesRoutingModule,
    ScrollingModule,
  ]
})
export class AllToniesModule { }
