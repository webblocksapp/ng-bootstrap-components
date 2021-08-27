import { Component } from '@angular/core';

@Component({
  selector: 'grid-main-routes',
  template: `
    <hr />
    <box container>
      <box row>
        <box [sm]="12">
          <a pr="3" routerLink="/grid/grid-playground">Grid Playground</a>
          <a routerLink="/grid/grid-nested">Grid Nested</a>
        </box>
      </box>
    </box>
    <hr />
  `,
})
export class GridMainRoutesOrganism {}
