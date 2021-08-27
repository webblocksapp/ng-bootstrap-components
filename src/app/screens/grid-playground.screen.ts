import { Component } from '@angular/core';

@Component({
  selector: 'grid-playground',
  template: `
    <box container>
      <box row [spacingY]="4">
        <box [sm]="12">
          <grid-playground-preview></grid-playground-preview>
        </box>
        <box [sm]="12">
          <grid-playground-form></grid-playground-form>
        </box>
      </box>
    </box>
  `,
})
export class GridPlaygroundScreen {}
