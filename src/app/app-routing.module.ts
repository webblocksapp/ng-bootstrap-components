import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridScreen } from './screens/grid/grid.screen';

const routes: Routes = [
  { path: 'grid', component: GridScreen },
  { path: '**', redirectTo: '/grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
