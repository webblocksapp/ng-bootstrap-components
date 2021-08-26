import { Component } from '@angular/core';
import {
  ColSize,
  GuttersSize,
  PaddingSize,
} from '@webblocksapp/ng-bootstrap-components';

@Component({
  selector: 'grid-playground',
  template: `
    <box containerMd>
      <box row [spacing]="spacing">
        <box [sm]="sm" [md]="md" *ngFor="let item of items">
          <card [p]="cardPadding">
            {{ item }}
          </card>
        </box>
      </box>
    </box>

    <hr />

    <box containerMd>
      <box row>
        <box [sm]="12" [md]="3">
          <label [pr]="1">SM</label>
          <input [(ngModel)]="sm" min="0" max="12" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">MD</label>
          <input [(ngModel)]="md" min="0" max="12" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Spacing</label>
          <input [(ngModel)]="spacing" min="0" max="5" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Card padding</label>
          <input [(ngModel)]="cardPadding" min="0" max="5" type="number" />
        </box>
      </box>
    </box>
  `,
  styles: [``],
})
export class GridPlaygroundScreen {
  sm: ColSize = 12;
  md: ColSize = 4;
  spacing: GuttersSize = 0;
  cardPadding: PaddingSize = 0;

  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];
}
