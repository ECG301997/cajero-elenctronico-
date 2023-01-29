import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';
import decode from 'jwt-decode';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
 token : String |any
 tokenDes : String |any
 
  constructor(
    private authService : LoginServiceService,
    private router : Router
  ){

  }
  canActivate(route : ActivatedRouteSnapshot):boolean{
     const expectRole  = route.data['expectRole'];
        this.token = localStorage.getItem('token');
     //desencriptar topken 
  this.tokenDes = decode(this.token);

  const {tipoUser} = this.tokenDes;
  if(!this.authService.isPermis() || tipoUser !== expectRole){
    swal.fire({
      icon: 'error',
      title: 'usuario no autorizado , por favor ingresa con una cuenta admistradora',
  })
  this.router.navigate(['/'])
    return false
}

 return true;
  
  }
  
}
