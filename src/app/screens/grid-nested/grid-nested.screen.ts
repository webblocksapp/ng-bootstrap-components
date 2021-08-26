import { Component } from '@angular/core';

@Component({
  selector: 'grid-nested',
  template: `
    <box containerFluid>
      <box row [spacingY]="4">
        <box [md]="4">
          <box row>
            <box [md]="6"> Item </box>
            <box [md]="6">
              <box row>
                <box [md]="6"> Item </box>
                <box [md]="6"> Item </box>
              </box>
            </box>
          </box>
        </box>
        <box [md]="4"> Item </box>
        <box [md]="4"> Item </box>
        <box [md]="6">
          <box row>
            <box [md]="6"> Item </box>
            <box [md]="6"> Item </box>
          </box>
        </box>
        <box [md]="3"> Item </box>
        <box [md]="3">
          <box row>
            <box [md]="6"> Item </box>
            <box [md]="6"> Item </box>
          </box>
        </box>
      </box>
    </box>
  `,
  styles: [
    `
      .row > [class^='col-'] {
        border: 1px solid rgba(39, 41, 43, 0.1);
      }
    `,
  ],
})
export class GridNestedScreen {}
