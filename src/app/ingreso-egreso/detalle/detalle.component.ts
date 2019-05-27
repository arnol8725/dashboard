import { Component, OnInit, OnDestroy } from '@angular/core';
import { store } from '@angular/core/src/render3';
import { AppState } from '../../app.reducer';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IngresoEgresoService } from '../ingreso-egreso.service';
import Swal from 'sweetalert2';
import { OrdernIngresoEgresoPipe } from '../ordern-ingreso-egreso.pipe';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer' ;
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit,OnDestroy {

  ingresoEgresoDetalle : Subscription = new Subscription();

   items: IngresoEgreso[] = [];

  constructor(private store : Store<fromIngresoEgreso.AppState>,
              private service: IngresoEgresoService) { }

  ngOnInit() {
    this.ingresoEgresoDetalle = this.store.select('items')
    .subscribe(result => {
      
      console.log(result);
      this.items = result;   
      
    });
  }

  ngOnDestroy(): void {
    this.ingresoEgresoDetalle.unsubscribe();
    
  }

  mensaje(titulo : string,mensaje : string,tipo : any){
    Swal.fire({
      type: tipo,
      title: titulo,
      text: mensaje,
      footer: ''
    });
   }

  borrar(item:IngresoEgreso){
      console.log(item);

      this.service.borrarIngresoEgreso(item.uid)  
      .then(resp => {
            console.log(resp);
            this.mensaje('Se elimino correctamente '+item.description,'Delete item','info');
      }).catch( error =>{
        this.mensaje('Error al eliminor '+item.description,'Error al Eliminar item','error');
      });
       

  }

}
