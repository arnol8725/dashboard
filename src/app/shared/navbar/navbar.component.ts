import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

   usuario: string;

  constructor(private services: AuthService,private store : Store<AppState>) { }

  ngOnInit() {
    this.store.select('auth')
    .pipe(
      filter( auth => auth.user != null)
    )
    .subscribe ( auth => this.usuario=auth.user.nombre);
     
  }

  

}
