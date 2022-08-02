import { Directive, ElementRef, HostListener } from '@angular/core';
import { Renderer2 } from '@angular/core/src/render';

@Directive({
  selector: '[OnlyNumber]',
})
export class OnlyNumberDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
