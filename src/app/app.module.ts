import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsSystemComponent } from './components/details-system/details-system.component';
import { HomeComponent } from './components/home/home.component';
import { LoadImgPipe } from './pipes/load-img.pipe';
import { ErrorComponent } from './components/error/error.component';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ToastServiceComponent } from './components/toast-service/toast-service.component';
import { LoadsvgPipe } from './pipes/loadsvg.pipe';

import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DetailsSystemComponent,
    HomeComponent,
    LoadImgPipe,
    ErrorComponent,
    ToastServiceComponent,
    LoadsvgPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AutoCompleteModule, 
    CarouselModule, 
    ToastModule,
    InputSwitchModule,
    CommonModule,
    FormsModule
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
