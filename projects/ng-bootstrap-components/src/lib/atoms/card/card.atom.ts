import {
  AfterContentInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
} from '@angular/core';
import { setDefaultDisplay } from '../../utils/functions';

@Component({
  selector: 'card',
  template: ` <ng-content></ng-content> `,
})
export class CardAtom implements AfterContentInit {
  @HostBinding()
  @Input()
  class: string = 'card';

  constructor(private elRef: ElementRef) {}

  ngAfterContentInit(): void {
    setDefaultDisplay(this.elRef, 'flex');
  }
}
