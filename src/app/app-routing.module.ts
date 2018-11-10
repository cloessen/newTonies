import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingpageComponent } from './layout/landingpage/landingpage.component';


const routes: Routes = [
  {
    path: '', component: LandingpageComponent
  },
  {
    path: 'home',
    loadChildren: './layout/private/home/home.module#HomeModule'
  },
  {
    path: 'settings',
    loadChildren: './layout/private/settings/settings.module#SettingsModule'
  },
  {
    path: 'my-tonies',
    loadChildren: './layout/private/my-tonies/my-tonies.module#MyToniesModule'
  },
  {
    path: 'all-tonies',
    loadChildren: './layout/private/all-tonies/all-tonies.module#AllToniesModule'
  },
  {
    path: 'wishlist',
    loadChildren: './layout/private/wishlist/wishlist.module#WishlistModule'
  },
  {
    path: 'share',
    loadChildren: './layout/private/share/share.module#ShareModule'
  },
  // {
  //   path: 'customers',
  //   loadChildren: './customers/customers.module#CustomersModule'
  // },
  // {
  //   path: 'orders',
  //   loadChildren: './orders/orders.module#OrdersModule'
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
