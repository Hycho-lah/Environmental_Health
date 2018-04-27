import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import { LeftNavComponent} from './left-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router';
@NgModule({
  imports:[
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule
  ],
  exports:[
    CommonModule,LeftNavComponent,MatSidenavModule,MatListModule,MatButtonModule, MatExpansionModule,MatIconModule,RouterModule
  ],
  declarations:[
    LeftNavComponent
  ]
})

export class LeftNavModule {}
