import { Component, OnInit, ViewChild, ElementRef, Injectable, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InterfaceSistemasRealizados } from 'src/app/interfaces/interfaces';
import { DataInfoService } from 'src/app/services/data-info.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details-system',
  templateUrl: './details-system.component.html'
})
export class DetailsSystemComponent implements OnInit {


  constructor(  private DIS: DataInfoService,
                private router: ActivatedRoute, 
                private route: Router,
                private renderer: Renderer2,
                private _location:Location) {
    
                  this.responsiveOptions = [
                    {
                        breakpoint: '1024px',
                        numVisible: 1,
                        numScroll: 1
                    },
                    {
                        breakpoint: '768px',
                        numVisible: 1,
                        numScroll: 1
                    },
                    {
                        breakpoint: '560px',
                        numVisible: 1,
                        numScroll: 1
                    }
                ];


  }   
                
  sistema: InterfaceSistemasRealizados;
  responsiveOptions: any[] = [];
  idImg: number;

  @ViewChild('modalImg')modalImg: ElementRef;

  getImgGrande(idImg: number, idSistema: number ){
    this.idImg = idImg;
    // console.log(`img: ${idImg} sistema: ${idSistema}`);

    this.modalImg.nativeElement.classList.toggle('is-active');
    
  }

  closeImgGrande(){
   
       // this.modalImg.nativeElement.classList.toggle('');
       this.renderer.removeClass(this.modalImg.nativeElement, 'is-active')
  }


  goBack(){
    // this.route.navigate(['/inicio']);
     this._location.back();
  }

  ngOnInit(): void {
    this.router.params.subscribe( params =>{
      this.getSistema(params['id'] );
    });

  }

  getSistema(id: number){
    this.sistema = this.DIS.getSistema( id );
  }


}
