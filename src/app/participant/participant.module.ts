import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import { ParticipantComponent} from './participant.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports:[
    CommonModule,MatTableModule,
    MatFormFieldModule,MatCardModule,
    MatPaginatorModule,MatSortModule,
    MatInputModule,MatCheckboxModule,
    MatButtonModule,MatSelectModule,
    RouterModule.forChild([
      {path:'',component:ParticipantComponent}
    ])
  ],
  exports:[
    CommonModule,ParticipantComponent,
    MatTableModule,MatFormFieldModule,
    RouterModule,MatCardModule,
    MatPaginatorModule,MatSortModule,
    MatInputModule,MatCheckboxModule,
    MatButtonModule,MatSelectModule
  ],
  declarations:[
    ParticipantComponent
  ]
})

export class ParticipantModule {}
