import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit {

  forma: FormGroup;
  tipo = "ingreso";

  constructor(private serviceIngresoEgreso:IngresoEgresoService) { }

  ngOnInit() {
     this.forma = new FormGroup({
          'description': new FormControl('',Validators.required),
          'monto': new FormControl(0,Validators.min(0))
          
     });
  }

  mensaje(titulo : string,mensaje : string,types: any){
    Swal.fire({
      type: types,
      title: titulo,
      text: mensaje,
      footer: ''
    });
   }

  crearIngresoEgreso(){
    console.log(this.forma.value);
    const obj = new IngresoEgreso({...this.forma.value,tipo:this.tipo});
    console.log(obj);  

    Swal.showLoading();

    this.serviceIngresoEgreso.crearIngresoEgredo(obj)
    .then( () => {
       
       this.mensaje('Alerta','Se registro correctamente','info');
       
    }).catch( error => {
        this.mensaje('Error: '+error,'Alerta','error');
    });
    
    this.forma.reset({
      monto:0
    });
  }

}
