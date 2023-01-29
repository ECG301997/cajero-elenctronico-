import { Component, OnInit } from '@angular/core';
import {RegistrosService} from 'src/app/services/registros.service'
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {retiro} from 'src/app/models/movimiento'
@Component({
  selector: 'app-consignar',
  templateUrl: './consignar.component.html',
  styleUrls: ['./consignar.component.css']
})
export class ConsignarComponent implements OnInit {
  movForm : FormGroup
  documento : String | null


  constructor(
    private router : Router,
    private fb : FormBuilder,
    private arouter : ActivatedRoute,
    private service : RegistrosService
  ) {
    this.movForm = this.fb.group({
      valorRetiro : ['',Validators.required]
    })
    this.documento = this.arouter.snapshot.paramMap.get('documento')
   }

  ngOnInit(): void {
  }

  consignarDinero(){
    if(this.movForm.invalid){
 
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
    
    }else{
      const valorRetiro : retiro={
        valorRetiro : this.movForm.get('valorRetiro')?.value
      }
      this.service.consignarDiner(this.documento,valorRetiro).subscribe(
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
}
