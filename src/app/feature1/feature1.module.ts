import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1HomeComponent } from './feature1-home/feature1-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: Feature1HomeComponent,
  }
]

@NgModule({
  declarations: [
    Feature1HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ]
})
export class Feature1Module { }
