import { DOCUMENT } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { InterfacePersonal, InterfaceSistemasRealizados, InterfaceEstudios, InterfaceExperienciaLaboral, InterfaceTechPrograming } from 'src/app/interfaces/interfaces';
import { DataInfoService } from 'src/app/services/data-info.service';

//import { footer }  from '../footer/footer.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  
infoPersonal : InterfacePersonal[] = [];

  constructor(  @Inject(DOCUMENT) 
                private document: Document,
                private DIS: DataInfoService,
                private renderer: Renderer2
                 ){
    
    this.infoPersonal = DIS.infoPersonal;
   

  }

@ViewChild('navBurger')navBurger: ElementRef;
@ViewChild('navMenu')navMenu: ElementRef;

@ViewChild('navBar')navBar: ElementRef;

@ViewChild('navBtn')navBtn: ElementRef;
@ViewChild('navBtn2')navBtn2: ElementRef;



checked: boolean = false;
showMenu = false;

mode(value: boolean){
  if(value==true){

    this.renderer.addClass(this.navBar.nativeElement, 'is-dark');
    this.renderer.addClass(this.navBtn.nativeElement, 'is-black');
    this.renderer.addClass(this.navBtn2.nativeElement, 'is-black');

    this.renderer.addClass(document.body, 'has-background-dark');

    // this.renderer.addClass(this.ft.footer.nativeElement, 'has-background-dark');


  }else{

    this.renderer.removeClass(this.navBar.nativeElement, 'is-dark');
    this.renderer.removeClass(this.navBtn.nativeElement, 'is-black');
    this.renderer.removeClass(this.navBtn2.nativeElement, 'is-black');
  
    this.renderer.removeClass(document.body, 'has-background-dark');

    // this.renderer.removeClass(this.ft.footer.nativeElement, 'has-background-dark');


  }
}

toggleNavbar(){
  this.navBurger.nativeElement.classList.toggle('is-active');

  this.navMenu.nativeElement.classList.toggle('is-active')
}

   
  ngOnInit(): void {
  }


}
