import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  SimpleChanges,
} from '@angular/core';
import { MarginSize, TypographyComponent } from '../../types';
import {
  overrideCssClass,
  setTypographyClass,
  isEmpty,
} from '../../utils/functions';
import * as CSS from 'csstype';

@Component({
  selector: 'typography',
  template: ` <ng-content></ng-content> `,
})
export class TypographyAtom {
  @HostBinding()
  @Input()
  class: string;

  @Input() display: CSS.Properties['display'] = 'block';
  @Input() component: TypographyComponent = 'p';
  @Input() gutterBottom: boolean = false;
  @Input() mb: MarginSize;
  @Input() marginBottom: MarginSize;

  constructor(private elRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (propName === 'component') {
        this.setTypography();
        this.setGutterBottom();
      }

      if (propName === 'display' && isEmpty(this.display)) this.setTypography();
      if (propName === 'gutterBottom') this.setGutterBottom();
      if (propName === 'mb' || propName === 'marginBottom') {
        this.setGutterBottom();
      }
    }
  }

  private setTypography() {
    setTypographyClass(this.elRef, this.component, this.display);
  }

  private setGutterBottom() {
    const mb = this.generateMb();
    const mbClass = mb >= 0 ? `mb-${mb}` : '';

    if (!this.gutterBottom) {
      overrideCssClass(this.elRef, new RegExp(/^mb-/), 'mb-0');
    } else if (this.gutterBottom) {
      overrideCssClass(this.elRef, new RegExp(/^mb-/), mbClass);
    }
  }

  private generateMb() {
    let mb = this.mb || this.marginBottom;
    mb = this.component === 'p' && isEmpty(mb) ? 1 : mb;
    return mb;
  }
}
