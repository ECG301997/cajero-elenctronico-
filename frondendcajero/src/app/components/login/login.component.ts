import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {login} from 'src/app/models/login'
import swal from 'sweetalert2';
import { LoginServiceService } from 'src/app/services/login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(
    private router: Router,
    private fb : FormBuilder,
    private lognService : LoginServiceService,
  ) {
      
    this.loginForm = this.fb.group({
      correo:['',[Validators.email,Validators.required]],
      pass:['',Validators.required]
      
 
 
     })
   }

  ngOnInit(): void {
  }
  autentication(){
    if(this.loginForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })

    }else{
     const credenciales : login = {
        correo : this.loginForm.get('correo')?.value,
        contraseña :  this.loginForm.get('pass')?.value


      }
      
      this.lognService.login(credenciales).subscribe(
        (data: any)=>{
          
          
            localStorage.setItem('token',data.token);

            if(!this.lognService.isAdmin()){
              this.router.navigate(['consultor'])
              
            }else{
               this.router.navigate(['home'])
             
            }
          
       },error=>{
          swal.fire({
            icon: 'error',
            title: 'Usuario o contraseña incorrectos',
          
          })
        }
      )

    }


  }
  get correo(){
    return this.loginForm.get('correo')
  }
  
  
  get contraseña(){
    return this.loginForm.get('contraseña')
  }

}
