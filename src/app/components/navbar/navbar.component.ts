import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { InterfacePersonal, InterfaceSistemasRealizados, InterfaceEstudios, InterfaceExperienciaLaboral, InterfaceTechPrograming } from 'src/app/interfaces/interfaces';
import { DataInfoService } from 'src/app/services/data-info.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

@ViewChild('navBurger')navBurger: ElementRef;
@ViewChild('navMenu')navMenu: ElementRef;

toggleNavbar(){
  this.navBurger.nativeElement.classList.toggle('is-active');

  this.navMenu.nativeElement.classList.toggle('is-active')
}

   
// infoPersonal                 || Datos personales

infoPersonal : InterfacePersonal[] = [];


  constructor( private DIS: DataInfoService){
    
    this.infoPersonal = DIS.infoPersonal;
   

  }


  showMenu = false;
 
  ngOnInit(): void {
  }


}
