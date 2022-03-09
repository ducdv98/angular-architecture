import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2HomeComponent } from './feature2-home/feature2-home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

const routes: Routes = [
  {
    path: '',
    component: Feature2HomeComponent,
  }
]

@NgModule({
  declarations: [
    Feature2HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ]
})
export class Feature2Module { }
