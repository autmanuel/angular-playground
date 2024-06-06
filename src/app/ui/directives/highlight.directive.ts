import {Directive, ElementRef, inject, Input, input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {
private el = inject<ElementRef <HTMLElement>>(ElementRef);
@Input() highlightColor = 'yellow'
  ngOnInit() {
    this.el.nativeElement.style.background= this.highlightColor;

  }
}
