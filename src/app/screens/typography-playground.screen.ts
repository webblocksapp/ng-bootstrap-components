import { Component } from '@angular/core';

@Component({
  selector: 'typography-playground',
  template: `
    <box container>
      <box row [spacingY]="3">
        <box [sm]="12">
          <typography-playground-preview></typography-playground-preview>
        </box>
        <box [sm]="12">
          <typography-playground-form></typography-playground-form>
        </box>
      </box>
    </box>
  `,
})
export class TypographyPlaygroundScreen {}
