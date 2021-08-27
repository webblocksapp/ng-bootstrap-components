import { TYPOGRAPHY_ALIGN_CLASSES } from '../constants';

export type TextAlign =
  | keyof typeof TYPOGRAPHY_ALIGN_CLASSES
  | null
  | ''
  | undefined;
