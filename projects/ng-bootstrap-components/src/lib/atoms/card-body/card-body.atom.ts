import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'card-body',
  template: `<ng-content></ng-content>`,
})
export class CardBodyAtom {
  @HostBinding()
  @Input()
  class: string = 'card-body';
}
