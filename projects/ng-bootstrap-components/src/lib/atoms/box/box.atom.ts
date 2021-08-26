import { AfterContentInit, Component, ElementRef } from '@angular/core';
import { setDefaultDisplay } from '../../utils/functions';

@Component({
  selector: 'box',
  template: ` <ng-content></ng-content> `,
})
export class BoxAtom implements AfterContentInit {
  constructor(private elRef: ElementRef) {}

  ngAfterContentInit(): void {
    setDefaultDisplay(this.elRef, 'block');
  }
}
