import {
  Component,
  DoCheck,
  KeyValueDiffer,
  KeyValueDiffers,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  TYPOGRAPHY_ALIGN_CLASSES,
  TYPOGRAPHY_COMPONENT_CLASSES,
  TYPOGRAPHY_VARIANT_CLASSES,
} from '@webblocksapp/ng-bootstrap-components';
import * as CSS from 'csstype';
import { TypographyPlayground } from '../interfaces';
import { TypographyRepository } from '../repositories';

@Component({
  selector: 'typography-playground-form',
  template: `
    <box containerFluid>
      <box row spacingY="3">
        <box [md]="3">
          <label [pr]="2">Typography</label>
          <select [(ngModel)]="model.component">
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
          <select [(ngModel)]="model.display">
            <option *ngFor="let display of displays" [value]="display">
              {{ display }}
            </option>
          </select>
        </box>
        <box [md]="3">
          <label [pr]="2">Variant</label>
          <select [(ngModel)]="model.variant">
            <option *ngFor="let variant of variants" [value]="variant">
              {{ variant }}
            </option>
          </select>
        </box>
        <box [md]="3">
          <label [pr]="1">Margin bottom</label>
          <input
            [(ngModel)]="model.marginBottom"
            min="0"
            max="5"
            type="number"
          />
        </box>
        <box [md]="3">
          <label [pr]="2">Gutter Bottom</label>
          <select [(ngModel)]="model.gutterBottom">
            <option
              *ngFor="let option of gutterBottomOptions"
              [value]="option.value"
            >
              {{ option.viewValue }}
            </option>
          </select>
        </box>
        <box [md]="3">
          <label [pr]="2">Align</label>
          <select [(ngModel)]="model.align">
            <option *ngFor="let align of alignments" [value]="align">
              {{ align }}
            </option>
          </select>
        </box>
      </box>
    </box>
  `,
})
export class TypographyPlaygroundFormOrganism
  implements OnInit, DoCheck, OnDestroy
{
  typographies: string[] = Object.keys(TYPOGRAPHY_COMPONENT_CLASSES);
  displays: CSS.Properties['display'][] = [
    '',
    'block',
    'inline',
    'inline-block',
    'flex',
  ];
  variants: string[] = ['', ...Object.keys(TYPOGRAPHY_VARIANT_CLASSES)];
  alignments: string[] = ['', ...Object.keys(TYPOGRAPHY_ALIGN_CLASSES)];
  gutterBottomOptions: { [key: string]: string }[] = [
    { value: 'yes', viewValue: 'Yes' },
    { value: '', viewValue: 'No' },
  ];

  private modelDiffer: KeyValueDiffer<any, any>;
  model: TypographyPlayground;

  constructor(
    private differs: KeyValueDiffers,
    private typographyRepository: TypographyRepository
  ) {
    this.typographyRepository.subscribe(({ playgroundModel }) => {
      this.model = playgroundModel;
    });
  }

  ngOnInit(): void {
    this.modelDiffer = this.differs.find(this.model).create();
  }

  ngDoCheck(): void {
    const modelChanges = this.modelDiffer.diff(this.model);

    if (modelChanges) {
      this.typographyRepository.updatePlaygroundModelState(this.model);
    }
  }

  ngOnDestroy(): void {
    this.typographyRepository.unsubscribe();
  }
}
