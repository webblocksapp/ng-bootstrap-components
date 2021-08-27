import { Component } from '@angular/core';

@Component({
  selector: 'typography-overview',
  template: `
    <typography component="h1">h1. Bootstrap heading</typography>
    <typography component="h2">h2. Bootstrap heading</typography>
    <typography component="h3">h3. Bootstrap heading</typography>
    <typography component="h4">h4. Bootstrap heading</typography>
    <typography component="h5">h5. Bootstrap heading</typography>
    <typography component="h6">h6. Bootstrap heading</typography>
    <typography component="p" mb="1">Paragraph</typography>
    <typography component="mark" display="block">Mark</typography>
    <typography component="small" display="block">Small</typography>
    <typography component="u" display="block">Underline</typography>
    <typography component="s" display="block">Line through</typography>
  `,
  styles: [``],
})
export class TypographyOverviewScreen {}
