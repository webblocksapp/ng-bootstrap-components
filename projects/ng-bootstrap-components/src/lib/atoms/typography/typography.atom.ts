import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  SimpleChanges,
} from '@angular/core';
import {
  MarginSize,
  TypographyComponent,
  TypographyVariants,
} from '../../types';
import { overrideCssClass, isEmpty, setDisplay } from '../../utils/functions';
import * as CSS from 'csstype';
import {
  DISPLAY_BLOCK_COMPONENTS,
  TYPOGRAPHY_CLASSES,
  TYPOGRAPHY_VARIANTS,
} from '../../constants';

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
  @Input() variant: TypographyVariants;

  private prevTypographyCSSClass: string;
  private prevVariantCSSClass: string;

  constructor(private elRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (propName === 'component') {
        this.setTypography();
        this.setGutterBottom();
      }

      if (propName === 'display' && isEmpty(this.display)) {
        this.setTypography();
      }

      if (propName === 'gutterBottom') {
        this.setGutterBottom();
      }

      if (propName === 'mb' || propName === 'marginBottom') {
        this.setGutterBottom();
      }

      if (propName === 'variant') {
        this.setVariant();
      }
    }
  }

  private setTypography() {
    const component = this.component || 'p';
    const className = TYPOGRAPHY_CLASSES[component];
    const isDisplayBlock = DISPLAY_BLOCK_COMPONENTS.includes(component);

    if (isDisplayBlock && isEmpty(this.display)) {
      setDisplay(this.elRef, 'block');
    } else {
      setDisplay(this.elRef, this.display || 'inline');
    }

    overrideCssClass(
      this.elRef,
      new RegExp(`^${this.prevTypographyCSSClass}`),
      className
    );

    this.prevTypographyCSSClass = className;
  }

  private setVariant() {
    const className = TYPOGRAPHY_VARIANTS[this.variant];

    overrideCssClass(
      this.elRef,
      new RegExp(`^${this.prevVariantCSSClass}`),
      className
    );

    this.prevVariantCSSClass = className;
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

  private generateMb(): string | number {
    let mb = this.mb || this.marginBottom;
    mb = this.component === 'p' && isEmpty(mb) ? 1 : mb;
    return mb;
  }
}
