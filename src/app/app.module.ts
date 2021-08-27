import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgBootstrapComponentsModule } from '@webblocksapp/ng-bootstrap-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypographyPlaygroundFormOrganism } from './organisms/typography-playground-form.organism';
import { TypographyPlaygroundPreviewOrganism } from './organisms/typography-playground-preview.organism';
import { TypographyRepository } from './repositories';
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
    GridMainScreen,
    GridPlaygroundScreen,
    GridNestedScreen,
    TypographyMainScreen,
    TypographyOverviewScreen,
    TypographyPlaygroundScreen,
    TypographyPlaygroundFormOrganism,
    TypographyPlaygroundPreviewOrganism,
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
  providers: [TypographyRepository],
})
export class AppModule {}
