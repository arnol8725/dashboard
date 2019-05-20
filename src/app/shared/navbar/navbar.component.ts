import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  private usuario: User;

  constructor(private services: AuthService) { }

  ngOnInit() {
    
     
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.usuario = this.services.getUsuario();  
    console.log('user');
    console.log(this.usuario.nombre);
  }

}
