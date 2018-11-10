import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllToniesComponent } from './all-tonies.component';

const routes: Routes = [
  {
    path: '', component: AllToniesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllToniesRoutingModule { }
