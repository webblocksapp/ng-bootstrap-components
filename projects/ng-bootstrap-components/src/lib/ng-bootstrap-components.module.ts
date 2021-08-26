import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxAtom } from './atoms/box/box.atom';
import { ColDirective } from './directives/col.directive';
import { ContainerFluidDirective } from './directives/container-fluid.directive';
import { ContainerMdDirective } from './directives/container-md.directive';
import { ContainerDirective } from './directives/container.directive';
import { DisplayDirective } from './directives/display.directive';
import { MarginDirective } from './directives/margin.directive';
import { PaddingDirective } from './directives/padding.directive';
import { RowDirective } from './directives/row.directive';
import { SpacingDirective } from './directives/spacing.directive';
import { CardAtom } from './atoms/card/card.atom';

@NgModule({
  declarations: [
    BoxAtom,
    RowDirective,
    ColDirective,
    DisplayDirective,
    ContainerDirective,
    ContainerFluidDirective,
    ContainerMdDirective,
    SpacingDirective,
    MarginDirective,
    PaddingDirective,
    CardAtom,
  ],
  imports: [CommonModule],
  exports: [
    BoxAtom,
    RowDirective,
    ColDirective,
    DisplayDirective,
    ContainerDirective,
    ContainerFluidDirective,
    ContainerMdDirective,
    SpacingDirective,
    MarginDirective,
    PaddingDirective,
    CardAtom,
  ],
})
export class NgBootstrapComponentsModule {}
