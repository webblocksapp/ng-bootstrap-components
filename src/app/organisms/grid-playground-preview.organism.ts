import { Component, OnDestroy } from '@angular/core';
import { GridPlayground } from '../interfaces';
import { GridRepository } from '../repositories';

@Component({
  selector: 'grid-playground-preview',
  template: `
    <box containerFluid>
      <box row [spacing]="model.spacing">
        <box [sm]="model.sm" [md]="model.md" *ngFor="let item of items">
          <card [p]="model.cardPadding">
            {{ item }}
          </card>
        </box>
      </box>
    </box>
  `,
})
export class GridPlaygroundPreviewOrganism implements OnDestroy {
  model: GridPlayground;

  items: string[] = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
  ];

  constructor(private gridRepository: GridRepository) {
    this.gridRepository.subscribe(({ playgroundModel }) => {
      this.model = playgroundModel;
    });
  }

  ngOnDestroy(): void {
    this.gridRepository.unsubscribe();
  }
}
