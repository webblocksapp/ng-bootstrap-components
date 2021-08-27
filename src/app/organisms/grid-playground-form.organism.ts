import {
  Component,
  DoCheck,
  KeyValueDiffer,
  KeyValueDiffers,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { GridPlayground } from '../interfaces';
import { GridRepository } from '../repositories';

@Component({
  selector: 'grid-playground-form',
  template: `
    <box containerFluid>
      <box row>
        <box [sm]="12" [md]="3">
          <label [pr]="1">SM</label>
          <input [(ngModel)]="model.sm" min="0" max="12" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">MD</label>
          <input [(ngModel)]="model.md" min="0" max="12" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Spacing</label>
          <input [(ngModel)]="model.spacing" min="0" max="5" type="number" />
        </box>
        <box [sm]="12" [md]="3">
          <label [pr]="1">Card padding</label>
          <input
            [(ngModel)]="model.cardPadding"
            min="0"
            max="5"
            type="number"
          />
        </box>
      </box>
    </box>
  `,
})
export class GridPlaygroundFormOrganism implements OnInit, DoCheck, OnDestroy {
  private modelDiffer: KeyValueDiffer<any, any>;
  model: GridPlayground;

  constructor(
    private differs: KeyValueDiffers,
    private gridRepository: GridRepository
  ) {
    this.gridRepository.subscribe(({ playgroundModel }) => {
      this.model = playgroundModel;
    });
  }

  ngOnInit(): void {
    this.modelDiffer = this.differs.find(this.model).create();
  }

  ngDoCheck(): void {
    const modelChanges = this.modelDiffer.diff(this.model);

    if (modelChanges) {
      this.gridRepository.updatePlaygroundModelState(this.model);
    }
  }

  ngOnDestroy(): void {
    this.gridRepository.unsubscribe();
  }
}
