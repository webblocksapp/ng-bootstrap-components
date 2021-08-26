import { ElementRef } from '@angular/core';
import { TypographyComponent } from '../../types';
import { DISPLAY_BLOCK_COMPONENTS, TYPOGRAPHY_CLASSES } from '../../constants';
import * as CSS from 'csstype';
import { setDisplay } from './set-display';
import { isEmpty } from './is-empty';

export const setTypographyClass = (
  hostElRef: ElementRef,
  typographyComponent: TypographyComponent,
  display: CSS.Properties['display']
) => {
  const elementClassList = hostElRef.nativeElement.classList;

  Object.values(TYPOGRAPHY_CLASSES).forEach((className) => {
    elementClassList.remove(className);
  });

  const isDisplayBlock = DISPLAY_BLOCK_COMPONENTS.includes(
    typographyComponent || 'p'
  );

  if (isDisplayBlock && isEmpty(display)) {
    setDisplay(hostElRef, 'block');
  } else {
    setDisplay(hostElRef, display || 'inline');
  }

  elementClassList.add(TYPOGRAPHY_CLASSES[typographyComponent || 'p']);
};
