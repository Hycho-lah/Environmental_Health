import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import {AddParticipantComponent} from './add-participant.component';
import {MatCardModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
  imports:[
    CommonModule,MatCardModule,
    MatStepperModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatDatepickerModule,MatSelectModule,
    MatNativeDateModule,MatChipsModule,
    RouterModule.forChild([
      {path:'',component:AddParticipantComponent}
    ])
  ],
  exports:[
    CommonModule,RouterModule,
    AddParticipantComponent,MatCardModule,
    MatStepperModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    MatDatepickerModule,MatSelectModule,
    MatNativeDateModule,MatChipsModule
  ],
  declarations:[
    AddParticipantComponent
  ]
})

export class AddParticipantModule {}
