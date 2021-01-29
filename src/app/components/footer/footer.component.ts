import { Component, OnInit } from '@angular/core';
import { InterfacePersonal, InterfaceSistemasRealizados, InterfaceEstudios, InterfaceExperienciaLaboral, InterfaceTechPrograming } from 'src/app/interfaces/interfaces';
import { DataInfoService } from 'src/app/services/data-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {

anio: number;

// infoPersonal                 || Datos personales

infoPersonal : InterfacePersonal[] = [];

  constructor( private DIS: DataInfoService){
    this.anio = new Date().getFullYear();

    this.infoPersonal = DIS.infoPersonal;

  }
  ngOnInit(): void {
  }

}
