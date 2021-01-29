import { Component, OnInit, Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast-service',
  template: `<p-toast></p-toast>`,
  styles: [
  ]
})
export class ToastServiceComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  addSingle(){
  	this.messageService.add({
  		severity: 'success',
  		summary: 'Service Message',
  		detail: 'Via Mensaje Service'
  	})
  }

  clear(){
  	this.messageService.clear();
  }


}
