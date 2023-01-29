import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { RetiroComponent } from './components/retiro/retiro.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import { ConsignarComponent } from './components/consignar/consignar.component';
import { ConsultorComponent } from './components/consultor/consultor.component';
import { CreateUserComponent } from './components/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    RetiroComponent,
    MovimientosComponent,
    ConsignarComponent,
    ConsultorComponent,
    CreateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  AppRoutingModule,
  HttpClientModule,
  ReactiveFormsModule,
  NgbModule
  ],
  providers: [
    {provide: JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
