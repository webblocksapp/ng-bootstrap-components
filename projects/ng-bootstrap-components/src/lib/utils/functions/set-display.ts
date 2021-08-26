import { ElementRef } from '@angular/core';
import * as CSS from 'csstype';
import { overrideCssClass } from './override-css-class';

export const setDisplay = (
  hostElRef: ElementRef,
  display: CSS.Properties['display']
) => {
  const className = display ? `d-${display}` : '';
  overrideCssClass(hostElRef, new RegExp(/^d-/), className);
};
