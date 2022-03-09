import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/components';

const routes: Routes = [
  {
    path: 'feature1',
    component: LayoutContainerComponent,
    loadChildren: () => import('./feature1/feature1.module').then(m => m.Feature1Module)
  },
  {
    path: 'feature2',
    component: LayoutContainerComponent,
    loadChildren: () => import('./feature2/feature2.module').then(m => m.Feature2Module)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'feature1'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
