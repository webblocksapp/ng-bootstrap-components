import { TYPOGRAPHY_VARIANT_CLASSES } from '../constants';

export type TypographyVariants =
  | keyof typeof TYPOGRAPHY_VARIANT_CLASSES
  | null
  | ''
  | undefined;
