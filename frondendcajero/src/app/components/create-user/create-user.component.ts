import { Component, OnInit } from '@angular/core';
import {RegistrosService} from 'src/app/services/registros.service'
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { user } from 'src/app/models/usuario';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userForm : FormGroup
  constructor(
    private router: Router,
    private fb : FormBuilder,
    private serv : RegistrosService
    
  ) { 
    this.userForm = this.fb.group({
      nombres:['',Validators.required],
      email : ['',[Validators.email,Validators.email]],
      contrasena : ['',[Validators.required,Validators.pattern('^([0-9]){1,4}$')]],
      documento : ['',[Validators.required,Validators.pattern('^([0-9]){1,10}$')]],
      tipoUser : ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
createUser(){
  if(this.userForm.invalid){
    swal.fire({
      icon: 'error',
      title: 'los campos son obligatorios',
    
    })
  }else{
    const user : user ={
      nombres : this.userForm.get('nombres')?.value,
      correo : this.userForm.get('email')?.value,
      contraseña : this.userForm.get('contrasena')?.value,
      documento : this.userForm.get('documento')?.value,
      tipoUser : this.userForm.get('tipoUser')?.value

      
    }
    this.serv.insertUser(user).subscribe(
      data=>{
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario agregado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/home']);
      },error=>{
        swal.fire({
          icon: 'error',
          title: `algo salio mal intenta de nuevo`,
        
        })
      }
    )
  }

}
get nombres (){return this.userForm.get('nombres');}
get email (){return this.userForm.get('email');}
get contrasena (){return this.userForm.get('contrasena');}
get documento (){return this.userForm.get('documento');}
get tipoUser(){return this.userForm.get('tipoUser')}
}
