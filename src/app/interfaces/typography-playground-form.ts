import {
  MarginSize,
  TextAlign,
  TypographyComponent,
  TypographyVariants,
} from '@webblocksapp/ng-bootstrap-components';
import * as CSS from 'csstype';

export interface TypographyPlaygroundModel {
  component: TypographyComponent;
  display: CSS.Properties['display'];
  variant: TypographyVariants;
  marginBottom: MarginSize;
  gutterBottom: boolean;
  align: TextAlign;
}
