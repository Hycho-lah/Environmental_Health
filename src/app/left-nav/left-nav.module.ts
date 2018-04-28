import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import { LeftNavComponent} from './left-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule, Routes} from '@angular/router';
import {HeadBarModule} from '../head-bar/head-bar.module';

export const routes: Routes = [
  {
    path:'',
    component:LeftNavComponent,
     children:[
       {path:'participant',loadChildren:'../participant/participant.module#ParticipantModule'},
       {path:'',redirectTo:'participant',pathMatch: 'full'},
       {path:'addParticipant',loadChildren:'../add-participant/add-participant.module#AddParticipantModule'},
       {path:'address',loadChildren:'../address/address.module#AddressModule'}
     ]
  }]

@NgModule({
  imports:[
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    HeadBarModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    CommonModule,LeftNavComponent,
    MatSidenavModule,MatListModule,
    MatButtonModule, MatExpansionModule,
    MatIconModule,RouterModule,
    HeadBarModule
  ],
  declarations:[
    LeftNavComponent
  ]
})

export class LeftNavModule {}
