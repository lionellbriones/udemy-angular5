import { Directive, Input, ElementRef, HostListener, HostBinding } from "@angular/core";
import {  } from "@angular/core/src/metadata/directives";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}