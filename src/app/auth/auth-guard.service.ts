import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { select } from '@ngrx/store';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  
  constructor(public authService : AuthService) { }

  canLoad() : Observable<boolean>|Promise<boolean>|boolean  {
    console.log('canLoad');
    return  this.authService.isAuth().pipe(take(1));
  }

  canActivate(){
    console.log('canActivate');
    return  this.authService.isAuth();   
  }
}
