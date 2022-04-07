import { Directive, ElementRef, HostListener, Renderer, Renderer2 } from "@angular/core";
@Directive({
    selector: "[demodirective]"
})
export class DemoDirective {

    constructor(private el: ElementRef, private render: Renderer) {
         //el.nativeElement.style.background = 'red';
         render.setElementStyle(el.nativeElement, 'backgroundColor', 'grey');
        // this.changeColor('grey');
    }

    changeColor(color: string) {
        this.render.setElementAttribute(this.el.nativeElement, 'backgroundColor', color);
    }

    @HostListener('click') foo() { 
        console.log('files the data...'); 
        this.render.setElementStyle(this.el.nativeElement,'backgroundColor','red');
        this.changeColor('red');
    }



}