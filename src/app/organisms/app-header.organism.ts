import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <box container>
      <box row>
        <box [pt]="2" [sm]="12">
          <a pr="3" routerLink="/grid">Grid</a>
          <a pr="3" routerLink="/typography">Typography</a>
        </box>
      </box>
    </box>
  `,
})
export class AppHeaderOrganism {}
