import { Component } from '@angular/core';
import { TypographyPlaygroundModel } from '../interfaces';
import { TypographyRepository } from '../repositories';

@Component({
  selector: 'typography-playground-preview',
  template: `
    <box>
      <box [md]="12">
        <typography
          [display]="model.display"
          [component]="model.component"
          [mb]="model.marginBottom"
          [gutterBottom]="model.gutterBottom"
          [variant]="model.variant"
          [align]="model.align"
        >
          Hello world
        </typography>
      </box>
    </box>
  `,
})
export class TypographyPlaygroundPreviewOrganism {
  model: TypographyPlaygroundModel;

  constructor(private typographyRepository: TypographyRepository) {
    this.typographyRepository.subscribe(({ playgroundModel }) => {
      this.model = playgroundModel;
    });
  }
}
