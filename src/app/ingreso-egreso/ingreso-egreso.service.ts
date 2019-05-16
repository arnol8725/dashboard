import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IngresoEgreso } from './ingreso-egreso.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IngresoEgresoService {

  constructor(private afBD: AngularFirestore,private serviceAuth : AuthService) { }

  crearIngresoEgredo(ingresoEgreso: IngresoEgreso){
    const user= this.serviceAuth.getUsuario();

    console.log(user);
  
     return  this.afBD.doc(`${ user.uid }/ingreso-egresos`)
      .collection('items').add({...ingresoEgreso,uid:user.uid});  
     /* .then()
      .catch ( err => {   
          console.log(err);  });
*/

          
    
    
  }



}
