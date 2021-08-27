import { Component, OnDestroy } from '@angular/core';
import { TypographyPlayground } from '../interfaces';
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
export class TypographyPlaygroundPreviewOrganism implements OnDestroy {
  model: TypographyPlayground;

  constructor(private typographyRepository: TypographyRepository) {
    this.typographyRepository.subscribe(({ playgroundModel }) => {
      this.model = playgroundModel;
    });
  }

  ngOnDestroy(): void {
    this.typographyRepository.unsubscribe();
  }
}
