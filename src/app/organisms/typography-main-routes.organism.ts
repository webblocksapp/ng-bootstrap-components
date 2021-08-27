import { Component } from '@angular/core';

@Component({
  selector: 'typography-main-routes',
  template: `
    <hr />
    <box container>
      <box row>
        <box [sm]="12">
          <a display="inline" pr="3" routerLink="/typography/overview">
            Typography Overview
          </a>
          <a pr="3" routerLink="/typography/playground">
            Typography Playground
          </a>
        </box>
      </box>
    </box>
    <hr />
  `,
  styles: [``],
})
export class TypographyMainRoutesOrganism {}
