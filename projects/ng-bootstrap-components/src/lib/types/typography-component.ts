import { TYPOGRAPHY_COMPONENT_CLASSES } from '../constants';

export type TypographyComponent =
  | keyof typeof TYPOGRAPHY_COMPONENT_CLASSES
  | null
  | ''
  | undefined;
