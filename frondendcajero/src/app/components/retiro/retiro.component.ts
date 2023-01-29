import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { retiro } from 'src/app/models/movimiento';
import { RegistrosService } from 'src/app/services/registros.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.css']
})
export class RetiroComponent implements OnInit {
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
      this.service.retirarDinero(this.documento,valorRetiro).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Retiro realizado de forma correcta',
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
