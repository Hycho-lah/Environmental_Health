import {HeadBarComponent} from './head-bar.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MatToolbarModule, MatButtonModule} from '@angular/material';

@NgModule({
  imports:[
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    HeadBarComponent
  ],
  declarations:[
    HeadBarComponent
  ]
})


export class HeadBarModule {}

