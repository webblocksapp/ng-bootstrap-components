import { Directive, ElementRef, Input } from '@angular/core';
import { PaddingSize } from '../types/padding-size';
import { overrideCssClass, isEmpty } from '../utils/functions';

@Directive({
  selector: `
    [padding],
    [paddingTop],
    [paddingRight],
    [paddingBottom],
    [paddingLeft],
    [paddingX],
    [paddingY],
    [p],
    [pt],
    [pr],
    [pb],
    [pl],
    [px],
    [py],
  `,
})
export class PaddingDirective {
  @Input()
  set padding(value: PaddingSize) {
    this.setPaddingClass('p-', value);
  }

  @Input()
  set paddingTop(value: PaddingSize) {
    this.setPaddingClass('pt-', value);
  }

  @Input()
  set paddingRight(value: PaddingSize) {
    this.setPaddingClass('pe-', value);
  }

  @Input()
  set paddingBottom(value: PaddingSize) {
    this.setPaddingClass('pb-', value);
  }

  @Input()
  set paddingLeft(value: PaddingSize) {
    this.setPaddingClass('ps-', value);
  }

  @Input()
  set paddingX(value: PaddingSize) {
    this.setPaddingClass('px-', value);
  }

  @Input()
  set paddingY(value: PaddingSize) {
    this.setPaddingClass('py-', value);
  }

  @Input()
  set p(value: PaddingSize) {
    this.setPaddingClass('p-', value);
  }

  @Input()
  set pt(value: PaddingSize) {
    this.setPaddingClass('pt-', value);
  }

  @Input()
  set pr(value: PaddingSize) {
    this.setPaddingClass('pe-', value);
  }

  @Input()
  set pb(value: PaddingSize) {
    this.setPaddingClass('pb-', value);
  }

  @Input()
  set pl(value: PaddingSize) {
    this.setPaddingClass('ps-', value);
  }

  @Input()
  set px(value: PaddingSize) {
    this.setPaddingClass('px-', value);
  }

  @Input()
  set py(value: PaddingSize) {
    this.setPaddingClass('py-', value);
  }

  private setPaddingClass(prefix: string, value: PaddingSize) {
    const className = !isEmpty(value) ? `${prefix}${value}` : '';
    overrideCssClass(this.elRef, new RegExp(`^${prefix}`), className);
  }

  constructor(private elRef: ElementRef) {}
}
