import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginServiceService}from 'src/app/services/login-service.service';
import swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class LoginguardGuard implements CanActivate {
  constructor(
    private authService : LoginServiceService,
    private router : Router
  ){

  }
  canActivate():boolean{

    if(!this.authService.isPermis()){
      swal.fire({
        icon: 'error',
        title: 'debes iniciar sesion primero',
    })
    this.router.navigate(['/'])
      return false
    }
    return true;
  }

}
