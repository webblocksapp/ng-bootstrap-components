import { Component } from '@angular/core';

@Component({
  selector: 'grid-main',
  template: `
    <hr />
    <a pr="3" routerLink="/grid/grid-playground">Grid Playground</a>
    <a routerLink="/grid/grid-nested">Grid Nested</a>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class GridMainScreen {}
