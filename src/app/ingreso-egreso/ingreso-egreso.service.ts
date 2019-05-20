import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { filter, map } from 'rxjs/operators';
import { auth } from 'firebase';
import { User } from '../auth/user.model';
import { SetItemsAction } from './ingreso-egreso.actions';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  ingresoEgresoListenerSubcription : Subscription= new Subscription();
  ingresoEgresoItemsSubcription : Subscription= new Subscription();

  constructor(private afBD: AngularFirestore,private serviceAuth : AuthService, private store :Store<AppState>) { }

  mensaje(titulo : string,mensaje : string,tipo : any){
    Swal.fire({
      type: tipo,
      title: titulo,
      text: mensaje,
      footer: ''
    });
   }

  initIngresoEgredoListener(){
  
   this.ingresoEgresoListenerSubcription= this.store.select('auth')
      .pipe(
        filter(auth => auth.user != null)  
    )
    .subscribe(auth => {
      console.log(auth.user);
      this.ingresoEgresoItems(auth.user.uid);
      
    });
      
  }

  cancelarSubscription(){
    this.ingresoEgresoListenerSubcription.unsubscribe();
    this.ingresoEgresoItemsSubcription.unsubscribe();
  }

  private ingresoEgresoItems(uid: string){
   this.ingresoEgresoItemsSubcription=  this.afBD.collection(`${uid }/ingreso-egresos/items`)
    .snapshotChanges()
    .pipe(
        map( docData => {
          console.log('Valor de docData');
          console.log(docData);
            return docData.map( doc => {
              console.log('Valor de doc');
              console.log(doc);
              console.log(doc.payload.doc.id);
                return { 
                  ...doc.payload.doc.data(),
                  uid: doc.payload.doc.id  
                };
            });                      
        })
    )
    .subscribe((coleccion : any[]) =>{
        console.log(coleccion);

        this.store.dispatch(new SetItemsAction(coleccion));

    });
  }

  crearIngresoEgredo(ingresoEgreso: IngresoEgreso){
    const user= this.serviceAuth.getUsuario();

    console.log(user);
  
     return  this.afBD.doc(`${ user.uid }/ingreso-egresos`)
      .collection('items').add({...ingresoEgreso});      
     /* .then()
      .catch ( err => {   
          console.log(err);  });
*/

          
    
    
  }

  borrarIngresoEgreso ( uid : string){
    const user= this.serviceAuth.getUsuario();
   return  this.afBD.doc(`${user.uid}/ingreso-egresos/items/${uid}`)
    .delete();
  }



}
