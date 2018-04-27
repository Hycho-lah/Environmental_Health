import {RouterModule, Routes} from '@angular/router';
import { LoginComponent} from '../Login/login.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: 'leftnav', loadChildren: '../left-nav/left-nav.module#LeftNavModule'},
  { path: 'login', component: LoginComponent },
  {path:'',redirectTo:'login',pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {}
