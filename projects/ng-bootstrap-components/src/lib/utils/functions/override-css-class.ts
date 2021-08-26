import { ElementRef } from '@angular/core';
import { isEmpty } from './is-empty';

export const overrideCssClass = (
  hostElRef: ElementRef,
  cssClassRegexToRemove: RegExp,
  cssClassToApply: string
) => {
  const element = hostElRef.nativeElement;
  const currentClasses = element.classList.toString().split(' ');

  const foundClass = currentClasses.find((className: string) =>
    className.match(cssClassRegexToRemove)
  );

  element.classList.remove(foundClass);

  if (!isEmpty(cssClassToApply)) {
    element.classList.add(cssClassToApply);
  }
};
