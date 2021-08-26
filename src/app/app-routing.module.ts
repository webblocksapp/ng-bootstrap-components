import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridNestedScreen } from './screens/grid-nested/grid-nested.screen';
import { GridPlaygroundScreen } from './screens/grid-playground/grid-playground.screen';
import { GridMainScreen } from './screens/grid-main/grid-main.screen';
import { TypographyMainScreen } from './screens/typography-main/typography-main.screen';
import { TypographyOverviewScreen } from './screens/typography-overview/typography-overview.screen';
import { TypographyPlaygroundScreen } from './screens/typography-playground/typography-playground.screen';

const routes: Routes = [
  {
    path: 'grid',
    component: GridMainScreen,
    children: [
      { path: '', component: GridPlaygroundScreen },
      { path: 'grid-playground', component: GridPlaygroundScreen },
      { path: 'grid-nested', component: GridNestedScreen },
    ],
  },
  {
    path: 'typography',
    component: TypographyMainScreen,
    children: [
      { path: '', component: TypographyOverviewScreen },
      { path: 'overview', component: TypographyOverviewScreen },
      { path: 'playground', component: TypographyPlaygroundScreen },
    ],
  },
  { path: '**', redirectTo: '/grid' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
