import { Component } from '@angular/core';

@Component({
  selector: 'grid-nested',
  template: `
    <box container>
      <grid-nested-preview></grid-nested-preview>
    </box>
  `,
})
export class GridNestedScreen {}
