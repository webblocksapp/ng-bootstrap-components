import { Directive, ElementRef, Input } from '@angular/core';
import { GuttersSize } from '../types/gutters-size';
import {
  overrideCssClass,
  isEmpty,
  buildStartsWithRegex,
} from '../utils/functions';

@Directive({
  selector: `
    [spacing],
    [spacingX],
    [spacingY]
  `,
})
export class SpacingDirective {
  @Input()
  set spacing(value: GuttersSize) {
    this.setSpacingClass('g-', value);
  }

  @Input()
  set spacingX(value: GuttersSize) {
    this.setSpacingClass('gx-', value);
  }

  @Input()
  set spacingY(value: GuttersSize) {
    this.setSpacingClass('gy-', value);
  }

  constructor(private elRef: ElementRef) {}

  private setSpacingClass(prefix: string, value: GuttersSize) {
    const className = !isEmpty(value) ? `${prefix}${value}` : '';
    overrideCssClass(this.elRef, buildStartsWithRegex(prefix), className);
  }
}
