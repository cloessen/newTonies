import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyToniesComponent } from './my-tonies.component';

const routes: Routes = [
  {
    path: '', component: MyToniesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyToniesRoutingModule { }
