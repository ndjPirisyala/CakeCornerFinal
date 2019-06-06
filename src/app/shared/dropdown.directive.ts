import { Directive, HostListener, HostBinding } from '../../../node_modules/@angular/core';

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{
@HostBinding('class.btn-group') isOpen=false;
@HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen;
}
}