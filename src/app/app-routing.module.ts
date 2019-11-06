import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';

// define url routes for login and item
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'item/:userid/:role', // this url has 2 parameters, userid and role
    component: ItemComponent,
  },
  { // if user simply enters localhost:4200, go to default login page
    path: '',
    redirectTo: '/login', pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
