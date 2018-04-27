import { UserComponent} from './user.component';
import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { HeadBarModule} from '../head-bar/head-bar.module';
import { LeftNavModule} from '../left-nav/left-nav.module';

@NgModule({
  imports:[
    CommonModule, HeadBarModule, LeftNavModule
  ],
  exports:[
    CommonModule,UserComponent,HeadBarModule, LeftNavModule
  ],
  declarations:[
    UserComponent
  ]
})

export class UserModule {}
