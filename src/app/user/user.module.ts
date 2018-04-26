import { UserComponent} from './user.component';
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { HeadBarModule} from '../head-bar/head-bar.module';

@NgModule({
  imports:[
    CommonModule,HeadBarModule
  ],
  exports:[
    CommonModule,UserComponent,HeadBarModule
  ],
  declarations:[
    UserComponent
  ]
})

export class UserModule {}
