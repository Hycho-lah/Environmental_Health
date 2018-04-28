import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
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
import {Sf36Component} from './sf36.component';

@NgModule({
  imports:[
    CommonModule,MatTableModule,
    MatFormFieldModule,MatCardModule,
    MatPaginatorModule,MatSortModule,
    MatInputModule,MatCheckboxModule,
    MatButtonModule,MatSelectModule,
    RouterModule.forChild([
      {path:'',component:Sf36Component}
    ])
  ],
  exports:[
    CommonModule,MatTableModule,
    MatFormFieldModule,MatCardModule,
    MatPaginatorModule,MatSortModule,
    MatInputModule,MatCheckboxModule,
    MatButtonModule,MatSelectModule,
    RouterModule,Sf36Component
  ],
  declarations:[
    Sf36Component
  ]
})

export class Sf36Module {}
