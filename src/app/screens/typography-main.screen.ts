import { Component } from '@angular/core';

@Component({
  selector: 'typography-main',
  template: `
    <hr />
    <a display="inline" pr="3" routerLink="/typography/overview"
      >Typography Overview</a
    >
    <a pr="3" routerLink="/typography/playground">Typography Playground</a>
    <hr />
    <router-outlet></router-outlet>
  `,
  styles: [``],
})
export class TypographyMainScreen {}
