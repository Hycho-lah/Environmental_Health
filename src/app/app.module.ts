import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './Core/app.routing.module';
import { HeadBarModule } from './head-bar/head-bar.module';
import { LoginModule} from './Login/login.module';
import { UserModule} from './user/user.module';
import { LeftNavModule} from './left-nav/left-nav.module';
import { ParticipantComponent } from './participant/participant.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HeadBarModule,
    LoginModule,
    UserModule,
    LeftNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
