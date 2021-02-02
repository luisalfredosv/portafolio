import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InterfacePersonal, InterfaceSistemasRealizados, InterfaceEstudios, InterfaceExperienciaLaboral, InterfaceTechPrograming } from 'src/app/interfaces/interfaces';
import { DataInfoService } from 'src/app/services/data-info.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

// import { fadeAnimation } from '../../animations';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
  // animations: [fadeAnimation]
})

export class HomeComponent implements OnInit {

// infoPersonal                 || Datos personales
// infoSistemasRealizados       || Sistemas Realizados
// infoEstudios                 || Formacion Profesional
// infoExperienciaLaboral       || Experiencia Laboral
// infoTecnologias              || Manejo de Tecnologias
// infoLenguajesProgramacion    || Manejo de Lenguajes de Programacion 

  infoPersonal : InterfacePersonal[] = [];
  infoSistemasRealizados : InterfaceSistemasRealizados[] = [];
  infoEstudios : InterfaceEstudios[] = [];
  infoExperienciaLaboral : InterfaceExperienciaLaboral[] = [];;
  infoTecnologias : InterfaceTechPrograming[] = [];
  infoLenguajesProgramacion : InterfaceTechPrograming[] = [];
  infoBaseDatos : InterfaceTechPrograming[] = [];

  selectOptiion : any[] = [  
                            'Oferta laboral',
                            'Sugerencia',
                            'Cotización',
                            'Información',
                            'Otro..'
                          ];

  contactoForm: FormGroup;
  submitted = false;

  latestLS: Date;
  correoLS: string;
  countLS: number = 0;

  limitSendCorreo: number = 2;

  loading : boolean = false;

  constructor(  private DIS: DataInfoService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private http: HttpClient,
                private formBuilder: FormBuilder,
                private toast: MessageService
               ){
    
    this.infoPersonal = DIS.infoPersonal;
    this.infoSistemasRealizados =  DIS.infoSistemasRealizados;
    this.infoEstudios =  DIS.infoEstudios;
    this.infoExperienciaLaboral =  DIS.infoExperienciaLaboral;
    this.infoTecnologias =  DIS.infoTecnologias;
    this.infoLenguajesProgramacion =  DIS.infoLenguajesProgramacion;
    this.infoBaseDatos = DIS.infoBaseDatos;

  }

  ngOnInit(): void {
    this.contactoForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            asunto: ['', Validators.required],
            correo: ['', [Validators.required, Validators.email]],
            mensaje: ['', Validators.required],
            acceptoContacto: [false, Validators.requiredTrue]
        });

    this.leerStorage();

   this.verifNotificacion();

  }

  verifNotificacion(){
    if(localStorage.getItem('notificacion')){
      let notificacion : number = JSON.parse(localStorage.getItem('notificacion')); 
      if( notificacion < 1){
        this.showNotificacion();
      }
    }else{
      this.showNotificacion();
    }
  }

  showNotificacion(){
     setTimeout(() => {
      this.ToastMensaje(
        'info', 
        'Notificación', 
        'Hola, este sitio web aún está en construcción, si ves algo mal por favor házmelo saber..!');
    }, 10000); 

    localStorage.setItem('notificacion', JSON.stringify(1));
  }

  detailsSystem(id:number){
    this.router.navigate(['/detalles-de-sistema', id ]);
  }

    // convenience getter for easy access to form fields
  get f() { return this.contactoForm.controls; }

  onSubmit() {
      this.submitted = true;
      
      // stop here if form is invalid
      if (this.contactoForm.invalid) { return; }

      // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.contactoForm.value, null, 4));

      this.sendEmail();
  }

  onReset() {
      this.submitted = false;
      this.contactoForm.reset();
  }


  leerStorage(){
      // console.log('store_on');

    if(localStorage.getItem('correoLS')){
      this.latestLS = JSON.parse(localStorage.getItem('latestLS'));
      this.correoLS = localStorage.getItem('correoLS');
      this.countLS = JSON.parse(localStorage.getItem('countLS'));
      // console.log('store_load');
    }
  }

  guardarStorage(correo: string){ 
    let time = new Date();
    localStorage.setItem('latestLS', JSON.stringify(time))
    localStorage.setItem('correoLS', correo)
    localStorage.setItem('countLS', JSON.stringify(this.countLS))
  }

  sendEmail() {

  this.loading = true;

	// verificacion de email, para evitar envio de spam intencional
	if (this.countLS >= this.limitSendCorreo && this.correoLS == this.contactoForm.get('correo').value) {
		this.ToastMensaje('warn', 'Notificación', 'Superó la cantidad de correos que puedes enviar por día, intente mas tarde...');
		this.loading = false
    return;
	}

    let data = {
      service_id: 'service_pr51dq4',
      template_id: 'template_3l4ewt9',
      user_id: 'user_7Ect9wJDkvfGKIUESaYUF',
      template_params: {
          nombre:   this.contactoForm.get('nombre').value,
          asunto:   this.contactoForm.get('asunto').value,
          correo:   this.contactoForm.get('correo').value,
          mensaje:  this.contactoForm.get('mensaje').value
      }
    };

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', data, { responseType: 'text' })
    .subscribe((result) => {

    	this.countLS++;
    	this.guardarStorage(this.contactoForm.get('correo').value);
      this.loading = false;
      this.onReset();
  		this.ToastMensaje('success', 'Notificación', 'Tu mensaje fue enviado correctamente!');

    }, (error: HttpErrorResponse) => {
        this.loading = false;
        console.error(error.message);
      	this.ToastMensaje('error', 'Notificación', 'Verifica tu conexión a internet e intenta de nuevo');
    })

  }

  ToastMensaje(type: string, title: string, mensaje: string){
    this.toast.add({
		severity: type,  
		summary: title,
		detail: mensaje,
		life: 6000
    })
  }


}