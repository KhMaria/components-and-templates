import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.fontWeight = 'bold';
  }
}
