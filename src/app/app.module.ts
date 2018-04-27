import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './Core/app.routing.module';
import { LoginModule} from './Login/login.module';
import { AddParticipantComponent } from './add-participant/add-participant.component';



@NgModule({
  declarations: [
    AppComponent,
    AddParticipantComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
