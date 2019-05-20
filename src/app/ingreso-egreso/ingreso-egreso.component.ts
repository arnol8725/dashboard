import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormGroupName, FormControl, Validators } from '@angular/forms';
import { IngresoEgreso } from './ingreso-egreso.model';
import { IngresoEgresoService } from './ingreso-egreso.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.actions';
@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styles: []
})
export class IngresoEgresoComponent implements OnInit,OnDestroy {

  forma: FormGroup;
  tipo = "ingreso";
  cargando= false;

  loadingSubs = new Subscription();

  constructor(private serviceIngresoEgreso:IngresoEgresoService,
              private store: Store<AppState>
              ) { }

  ngOnInit() {
  this.loadingSubs =  this.store.select('ui').subscribe( ui => this.cargando = ui.isLoading);

     this.forma = new FormGroup({
          'description': new FormControl('',Validators.required),
          'monto': new FormControl(0,Validators.min(0))
          
     });

  }

  ngOnDestroy(){
    this.loadingSubs.unsubscribe();
  }

  mensaje(titulo : string,mensaje : string,types: any){
    Swal.fire({
      type: types,
      title: titulo,
      text: mensaje,
      footer: ''
    });
   }

cambiarStatus(){
  this.cargando = !this.cargando;
} 

reset(){
  this.forma.reset({
    monto:0
  });
  this.tipo="ingreso";
}



  crearIngresoEgreso(){

    this.store.dispatch(new ActivarLoadingAction());
    
    console.log(this.forma.value);
    const obj = new IngresoEgreso({...this.forma.value,tipo:this.tipo});
    console.log(obj);  

    //Swal.showLoading();

    this.serviceIngresoEgreso.crearIngresoEgredo(obj)
    .then( () => {
       console.log('Guardo correctamente');
       this.mensaje('Alerta','Se registro correctamente','info');
       this.store.dispatch(new DesactivarLoadingAction());
       this.reset();
       
    }).catch( error => {
        this.mensaje('Error: '+error,'Alerta','error');
    });
    
    
  }

}
