﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';;
import { AlertComponent } from './alert/alert.component'
;
import { CreateBusComponent } from './create-bus/create-bus.component'
;
import { CreateViajeComponent } from './create-viaje/create-viaje.component'@;
import { CreateBoletoComponent } from './create-boleto/create-boleto.component'NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent
,
    AlertComponent ,
    CreateBusComponent ,
    CreateViajeComponent],
    CreateBoletoComponent,
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
