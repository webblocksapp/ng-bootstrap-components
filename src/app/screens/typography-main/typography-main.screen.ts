import { Component } from '@angular/core';

@Component({
  selector: 'typography-main',
  template: `
    <hr />
    <a pr="3" routerLink="/typography/Overview">Typography Overview</a>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class TypographyMainScreen {}
