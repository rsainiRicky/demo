import { Directive, HostListener, Input,ElementRef } from '@angular/core';
import { CommonService } from '../services/common.service';

@Directive({
  selector: '[appCustomvalidation]'
})
export class CustomvalidationDirective {
  @Input('appCustomvalidation') validation:string; 
  constructor(private el:ElementRef, public commonService:CommonService){}
  @HostListener('blur') onfocus(){
    console.log(this.el.nativeElement.value,this.validation);
    this.validation == 'hostvalidate'? this.hostcheck():''; 
  }
  hostcheck(){
    // check from json for uniqueness
    let data = this.commonService.getdata().subscribe(res =>{
      console.log(res.json());
    });
    
  }

}
