import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened = false;
  // isOpened = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpened = !this.isOpened;
    // if (this.isOpened) {
    //   this.renderer.addClass(this.elementRef.nativeElement, 'open');
    // } else {
    //   this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    // }
  }


}
