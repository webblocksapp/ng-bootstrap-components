import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgBootstrapComponentsModule } from '@webblocksapp/ng-bootstrap-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridNestedScreen } from './screens/grid-nested/grid-nested.screen';
import { GridPlaygroundScreen } from './screens/grid-playground/grid-playground.screen';
import { GridMainScreen } from './screens/grid-main/grid-main.screen';
import { TypographyMainScreen } from './screens/typography-main/typography-main.screen';
import { TypographyOverviewScreen } from './screens/typography-overview/typography-overview.screen';
import { TypographyPlaygroundScreen } from './screens/typography-playground/typography-playground.screen';

@NgModule({
  declarations: [
    AppComponent,
    GridMainScreen,
    GridPlaygroundScreen,
    GridNestedScreen,
    TypographyMainScreen,
    TypographyOverviewScreen,
    TypographyPlaygroundScreen,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    NgBootstrapComponentsModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
