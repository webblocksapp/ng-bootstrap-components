import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgBootstrapComponentsModule } from '@webblocksapp/ng-bootstrap-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  GridMainRoutesOrganism,
  GridPlaygroundFormOrganism,
  GridNestedPreviewOrganism,
  TypographyPlaygroundFormOrganism,
  TypographyPlaygroundPreviewOrganism,
  GridPlaygroundPreviewOrganism,
  TypographyMainRoutesOrganism,
  TypographyOverviewDemoOrganism,
  AppHeaderOrganism,
} from './organisms';
import { TypographyRepository, GridRepository } from './repositories';
import {
  GridNestedScreen,
  GridPlaygroundScreen,
  GridMainScreen,
  TypographyMainScreen,
  TypographyOverviewScreen,
  TypographyPlaygroundScreen,
} from './screens';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderOrganism,
    GridMainScreen,
    GridMainRoutesOrganism,
    GridPlaygroundScreen,
    GridPlaygroundFormOrganism,
    GridPlaygroundPreviewOrganism,
    GridNestedPreviewOrganism,
    GridNestedScreen,
    TypographyMainScreen,
    TypographyOverviewScreen,
    TypographyPlaygroundScreen,
    TypographyPlaygroundFormOrganism,
    TypographyPlaygroundPreviewOrganism,
    TypographyMainRoutesOrganism,
    TypographyOverviewDemoOrganism,
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
  providers: [TypographyRepository, GridRepository],
})
export class AppModule {}
