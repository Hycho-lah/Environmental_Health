import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {AddAddressComponent} from './add-address.component';

@NgModule({
  imports:[
    CommonModule,MatCardModule,
    MatStepperModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    MatFormFieldModule,FormsModule,
    ReactiveFormsModule,MatChipsModule,
    RouterModule.forChild([
      {path:'',component:AddAddressComponent}
    ])
  ],
  exports:[
    CommonModule,MatCardModule,
    MatStepperModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    MatFormFieldModule,FormsModule,
    ReactiveFormsModule,MatChipsModule,
    RouterModule,AddAddressComponent
  ],
  declarations:[
    AddAddressComponent
  ]
})

export class AddAddressModule{}
