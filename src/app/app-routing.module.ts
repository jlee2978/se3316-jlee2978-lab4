import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ItemComponent } from './item/item.component';

// define url routes for login and item
const routes: Routes = [
  {
    path: 'login',
    // will be placed in between router-outlet tags of app.component.html
    component: LoginComponent,
  },
  {
    // this url has 2 parameters, userid and role
    path: 'item/:userid/:role',
    // will be placed in between router-outlet tags of app.component.html
    component: ItemComponent,
  },
  { 
    // if user simply enters localhost:4200, go to default login page
    path: '',
    // redirects to '/login' route
    redirectTo: '/login', pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
