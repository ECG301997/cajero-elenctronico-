import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { usuario } from 'src/app/models/usuario';
import swal from 'sweetalert2';
import {RegistrosService} from 'src/app/services/registros.service'

@Component({
  selector: 'app-consultor',
  templateUrl: './consultor.component.html',
  styleUrls: ['./consultor.component.css']
})
export class ConsultorComponent implements OnInit {
  listUser :usuario[]= []

  constructor(
    private  router: Router,
    private registroServ : RegistrosService
  ) { }

  ngOnInit(): void {
    this.getPerson();
  
  }
  getPerson(){
    this.registroServ.getUser().subscribe(
      data=>{
        this.listUser = data
        
      },(error)=>{
              
          swal.fire({
            icon: 'error',
            title: 'Sin conexión a la base de datos ',
          
          })
          }
        )
      }
      closesecion(){
        localStorage.removeItem('token')
        this.router.navigate([''])
      }
      inactividad(){
        setTimeout(()=>{ 
          swal.fire({
            icon: 'error',
            title: 'tú sesion se cerro por inactividad  ',
          
          })                          
          localStorage.removeItem('token')
          this.router.navigate([''])
      
      }, 180000);
      
      }
}
