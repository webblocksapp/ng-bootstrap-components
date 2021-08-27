import { Component } from '@angular/core';

@Component({
  selector: 'typography-overview',
  template: `
    <box container>
      <box row>
        <box [sm]="12">
          <typography-overview-demo></typography-overview-demo>
        </box>
      </box>
    </box>
  `,
})
export class TypographyOverviewScreen {}
