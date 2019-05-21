import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { store } from '@angular/core/src/render3';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { auth } from 'firebase';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
   usuario: string;
  constructor(private router: AuthService,private store : Store<AppState>,private servicesIngreso: IngresoEgresoService) { }

  ngOnInit() {
    this.store.select('auth')
    .pipe(
      filter( auth => auth.user != null)
    )
    .subscribe ( auth => this.usuario=auth.user.nombre);
    console.log('user');
  }
  logout(){
      this.router.logout();
      this.servicesIngreso.cancelarSubscription();
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
   // this.usuario = this.router.getUsuario();
    
    
  }

}
