import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from './user.model';

import { AngularFirestore } from '@angular/fire/firestore';

//ngrx
import { appReducers, AppState } from '../app.reducer';
import { Store } from '@ngrx/store';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../shared/ui.actions';
import { store } from '@angular/core/src/render3';
import { SetUserAction } from './auth.actions';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user:User;
  
private userSubscripstion: Subscription = new Subscription();
  constructor(private afAuth: AngularFireAuth,
              private router : Router,
              private afDB: AngularFirestore,
              public store: Store<AppState>) { }
   mensaje(titulo : string,mensaje : string){
    Swal.fire({
      type: 'error',
      title: titulo,
      text: mensaje,
      footer: ''
    });
   }


  getUsuario(){
    return {...this.user};
  }

initAuthListener(){
      this.afAuth.authState.subscribe( (fbUser : firebase.User) => {
          console.log(fbUser);
          if(fbUser){
            this.userSubscripstion=this.afDB.doc(`${ fbUser.uid }/usuario`).valueChanges()
            .subscribe( (usuarioObj:any)  => {

              const newUser = new User( usuarioObj );
             
              const action = new SetUserAction(newUser);
              this.store.dispatch(action);
              console.log(newUser);
              this.user = newUser;
            });
           
          }else{
            this.user= null;
            this.userSubscripstion.unsubscribe();
          }
      });
}

  crearUsuario(nombre : string,email : string,password : string){
    
     // Swal.showLoading();
    
    this.store.dispatch(new ActivarLoadingAction());

        this.afAuth.auth
        .createUserWithEmailAndPassword(email,password)
        .then(resp => {

          const user : User = {
             uid : resp.user.uid,
              email : resp.user.email,
              nombre : nombre  
          };
          //let cad= resp.user.uid+"/usuario";;
         this.afDB.doc(`${ resp.user.uid }/usuario`)
        // this.afDB.doc(cad)
          .set( user )
          .then( () => {
            //console.error('Entro afDB');
            //Swal.close();
            this.router.navigate(['/']);
            this.store.dispatch(new DesactivarLoadingAction());
          });
          

        })
        .catch( error => {
          
            console.error(error);

            this.mensaje("Error en crear Usuario",error.message);
            this.store.dispatch(new DesactivarLoadingAction());
            
        });
  }
  login(email : string,password : string){
    //Swal.showLoading();
    this.store.dispatch(new ActivarLoadingAction());
    this.afAuth.auth
    .signInWithEmailAndPassword(email,password)
    .then(resp => {
      console.log(resp);
      //Swal.close();
        this.store.dispatch(new DesactivarLoadingAction());
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
