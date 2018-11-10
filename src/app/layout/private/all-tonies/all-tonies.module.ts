import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllToniesRoutingModule } from './all-tonies-routing.module';
import { AllToniesComponent } from './all-tonies.component';

@NgModule({
  declarations: [AllToniesComponent],
  imports: [
    CommonModule,
    AllToniesRoutingModule
  ]
})
export class AllToniesModule { }
