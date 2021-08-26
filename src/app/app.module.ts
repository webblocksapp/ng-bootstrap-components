import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgBootstrapComponentsModule } from '@webblocksapp/ng-bootstrap-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridScreen } from './screens/grid/grid.screen';

@NgModule({
  declarations: [AppComponent, GridScreen],
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
