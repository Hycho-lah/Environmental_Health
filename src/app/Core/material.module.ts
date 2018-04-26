import { CommonModule} from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule } from '@angular/material';
import { NgModule} from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule]
})

export class CustomMaterialModule  {}
