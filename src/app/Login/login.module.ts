import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { LoginComponent} from './login.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports:[
    CommonModule, MatProgressBarModule, MatCardModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule
  ],
  exports:[
    CommonModule, MatProgressBarModule, MatCardModule, MatInputModule, LoginComponent, FormsModule, ReactiveFormsModule, MatButtonModule
  ],
  declarations:[
    LoginComponent
  ]
})

export class LoginModule {}

