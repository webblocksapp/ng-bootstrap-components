import {
  Component,
  ElementRef,
  HostBinding,
  Input,
  SimpleChanges,
} from '@angular/core';
import {
  MarginSize,
  TextAlign,
  TypographyComponent,
  TypographyVariants,
} from '../../types';
import {
  overrideCssClass,
  isEmpty,
  setDisplay,
  buildStartsWithRegex,
} from '../../utils/functions';
import * as CSS from 'csstype';
import {
  DISPLAY_BLOCK_COMPONENTS,
  TYPOGRAPHY_COMPONENT_CLASSES,
  TYPOGRAPHY_VARIANT_CLASSES,
  TYPOGRAPHY_ALIGN_CLASSES,
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
  @Input() align: TextAlign;

  private prevTypographyCSSClass: string;
  private prevVariantCSSClass: string;
  private prevTextAlignCSSClass: string;

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

      if (propName === 'align') {
        this.setTextAlign();
      }
    }
  }

  private setTypography(): void {
    const component = this.component || 'p';
    const className = TYPOGRAPHY_COMPONENT_CLASSES[component];
    const isDisplayBlock = DISPLAY_BLOCK_COMPONENTS.includes(component);

    if (isDisplayBlock && isEmpty(this.display)) {
      setDisplay(this.elRef, 'block');
    } else {
      setDisplay(this.elRef, this.display || 'inline');
    }

    overrideCssClass(
      this.elRef,
      buildStartsWithRegex(this.prevTypographyCSSClass),
      className
    );

    this.prevTypographyCSSClass = className;
  }

  private setVariant(): void {
    const className = this.variant
      ? TYPOGRAPHY_VARIANT_CLASSES[this.variant]
      : '';

    overrideCssClass(
      this.elRef,
      buildStartsWithRegex(this.prevVariantCSSClass),
      className
    );

    this.prevVariantCSSClass = className;
  }

  private setGutterBottom(): void {
    const mb = this.generateMb();
    const mbClass = !isEmpty(mb) && mb >= 0 ? `mb-${mb}` : '';

    if (!this.gutterBottom) {
      overrideCssClass(this.elRef, buildStartsWithRegex('mb-'), 'mb-0');
    } else if (this.gutterBottom) {
      overrideCssClass(this.elRef, buildStartsWithRegex('mb-'), mbClass);
    }
  }

  private setTextAlign(): void {
    const className = this.align ? TYPOGRAPHY_ALIGN_CLASSES[this.align] : '';

    overrideCssClass(
      this.elRef,
      buildStartsWithRegex(this.prevTextAlignCSSClass),
      className
    );

    this.prevTextAlignCSSClass = className;
  }

  private generateMb(): any {
    let mb = this.mb || this.marginBottom;
    mb = this.component === 'p' && isEmpty(mb) ? 1 : mb;
    return mb;
  }
}
