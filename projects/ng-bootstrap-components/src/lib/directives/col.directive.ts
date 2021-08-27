import { AfterContentInit, Directive, ElementRef, Input } from '@angular/core';
import { ColSize } from '../types';
import {
  overrideCssClass,
  isEmpty,
  buildStartsWithRegex,
} from '../utils/functions';

@Directive({
  selector: `    
    [sm],
    [md],
    [lg],
    [xl],
    [xxl],
    [col]
  `,
})
export class ColDirective implements AfterContentInit {
  @Input()
  set sm(value: ColSize) {
    this.setColClass('col-sm-', value);
  }

  @Input()
  set md(value: ColSize) {
    this.setColClass('col-md-', value);
  }

  @Input()
  set lg(value: ColSize) {
    this.setColClass('col-lg-', value);
  }

  @Input()
  set xl(value: ColSize) {
    this.setColClass('col-xl-', value);
  }

  @Input()
  set xxl(value: ColSize) {
    this.setColClass('col-xxl-', value);
  }

  constructor(private elRef: ElementRef) {}

  ngAfterContentInit(): void {
    const elementClassList = this.elRef.nativeElement.classList;
    const columnClasses = elementClassList.toString().split(' ');
    const foundColumnClass = columnClasses.find((className: string) =>
      className.match(/^col-/)
    );

    if (!foundColumnClass) {
      elementClassList.add('col');
    }
  }

  private setColClass(prefix: string, value: ColSize) {
    const className = !isEmpty(value) ? `${prefix}${value}` : '';
    overrideCssClass(this.elRef, buildStartsWithRegex(prefix), className);
  }
}
