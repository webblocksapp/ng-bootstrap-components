import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <a routerLink="/grid">Grid</a>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
