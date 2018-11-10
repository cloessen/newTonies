import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyToniesRoutingModule } from './my-tonies-routing.module';
import { MyToniesComponent } from './my-tonies.component';

@NgModule({
  declarations: [MyToniesComponent],
  imports: [
    CommonModule,
    MyToniesRoutingModule
  ]
})
export class MyToniesModule { }
