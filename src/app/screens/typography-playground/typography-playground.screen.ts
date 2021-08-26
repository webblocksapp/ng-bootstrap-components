import { Component } from '@angular/core';
import {
  TypographyComponent,
  TYPOGRAPHY_CLASSES,
  TYPOGRAPHY_VARIANTS,
} from '@webblocksapp/ng-bootstrap-components';
import * as CSS from 'csstype';

@Component({
  selector: 'typography-playground',
  template: `
    <box containerFluid>
      <box row>
        <box [md]="12">
          <typography
            [display]="display"
            [component]="component"
            [mb]="marginBottom"
            [gutterBottom]="gutterBottom"
            [variant]="variant"
          >
            Hello world
          </typography>
        </box>
        <box [md]="3">
          <label [pr]="2">Typography</label>
          <select [(ngModel)]="component">
            <option
              *ngFor="let typography of typographies"
              [value]="typography"
            >
              {{ typography }}
            </option>
          </select>
        </box>
        <box [md]="3">
          <label [pr]="2">Display</label>
          <select [(ngModel)]="display">
            <option *ngFor="let display of displays" [value]="display">
              {{ display }}
            </option>
          </select>
        </box>
        <box [md]="3">
          <label [pr]="2">Variant</label>
          <select [(ngModel)]="variant">
            <option *ngFor="let variant of variants" [value]="variant">
              {{ variant }}
            </option>
          </select>
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Margin bottom</label>
          <input [(ngModel)]="marginBottom" min="0" max="5" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="3">Gutter bottom</label>
          <label [pr]="1">Yes</label>
          <input type="radio" [(ngModel)]="gutterBottom" value="true" />
          <label [pl]="1" [pr]="1">No</label>
          <input type="radio" [(ngModel)]="gutterBottom" value="" />
        </box>
      </box>
    </box>
  `,
})
export class TypographyPlaygroundScreen {
  typographies: string[] = Object.keys(TYPOGRAPHY_CLASSES);
  displays: CSS.Properties['display'][] = [
    '',
    'block',
    'inline',
    'inline-block',
    'flex',
  ];
  variants: string[] = ['', ...Object.keys(TYPOGRAPHY_VARIANTS)];

  component: TypographyComponent = 'h1';
  display: CSS.Properties['display'] = 'block';
  variant: any = '';
  marginBottom: any = '';
  gutterBottom: any = 'true';
}
