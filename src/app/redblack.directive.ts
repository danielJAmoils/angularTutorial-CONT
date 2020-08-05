import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective {

  constructor(private el: ElementRef<HTMLParagraphElement>) {
    this.el.nativeElement.style.color = "white"
    this.el.nativeElement.style.backgroundColor = "black"
  }

  ngOnInit(){
    this.el.nativeElement.innerText += " - rendered by appRedblack"
  }

}
