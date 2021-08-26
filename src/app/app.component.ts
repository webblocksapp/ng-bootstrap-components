import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <a pr="3" routerLink="/grid">Grid</a>
      <a pr="3" routerLink="/typography">Typography</a>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
