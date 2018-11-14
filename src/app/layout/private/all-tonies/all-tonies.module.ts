import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllToniesRoutingModule } from './all-tonies-routing.module';
import { AllToniesComponent } from './all-tonies.component';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [AllToniesComponent],
  imports: [
    CommonModule,
    AllToniesRoutingModule,
    ScrollingModule
  ]
})
export class AllToniesModule { }
