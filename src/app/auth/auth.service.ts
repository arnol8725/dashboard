import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from './user.model';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private afAuth: AngularFireAuth,
              private router : Router,
              private afDB: AngularFirestore) { }
   mensaje(titulo : string,mensaje : string){
    Swal.fire({
      type: 'error',
      title: titulo,
      text: mensaje,
      footer: ''
    });
   }

initAuthListener(){
      this.afAuth.authState.subscribe( (fbUser : firebase.User) => {
          console.log(fbUser);
      });
}

  crearUsuario(nombre : string,email : string,password : string){
   // Swal.showLoading();
        this.afAuth.auth
        .createUserWithEmailAndPassword(email,password)
        .then(resp => {

          const user : User = {
             uid : resp.user.uid,
              email : resp.user.email,
              nombre : nombre  
          };
          let cad= resp.user.uid+"/usuario";;
         // this.afDB.doc(`${ resp.user.uid }/usuario`)
         this.afDB.doc(cad)
          .set( user )
          .then( () => {
            console.error('Entro afDB');
            //Swal.close();
            this.router.navigate(['/']);
          });
          

        })
        .catch( error => {
          
            console.error(error);

            this.mensaje("Error en crear Usuario",error.message);
           
            
        });
  }
  login(email : string,password : string){
    Swal.showLoading();
    this.afAuth.auth
    .signInWithEmailAndPassword(email,password)
    .then(resp => {
      console.log(resp);
      Swal.close();
      this.router.navigate(['/']);
    })
    .catch( error => {
        console.error(error);
        this.mensaje("Error en el Login",error.message);
    });
}
logout(){
  Swal.showLoading();
  this.afAuth.auth.signOut();
  this.router.navigate(['/login']);
  Swal.close();   
}

isAuth() {
    return this.afAuth.authState
           .pipe(
              map(fbUser => {
                if(fbUser===null){
                   this.router.navigate(['/login']); 
                }
                
                return fbUser != null    
              }) 
           );
}      

}
