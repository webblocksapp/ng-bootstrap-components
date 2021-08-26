import { Directive, ElementRef, Input } from '@angular/core';
import * as CSS from 'csstype';
import { setDisplay } from '../utils/functions';

@Directive({
  selector: '[display]',
})
export class DisplayDirective {
  @Input()
  set display(value: CSS.Properties['display']) {
    this.setDisplay(value);
  }

  private setDisplay(display: CSS.Properties['display']) {
    setDisplay(this.elRef, display);
  }

  constructor(private elRef: ElementRef) {}
}
