import { Component } from '@angular/core';
import { UsuarioMaster } from 'src/models/usuario-master.model';
import { UsuarioMasterService } from 'src/services/usuario-master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoEcommerce';
  constructor(private usuariomasterservice:UsuarioMasterService){
    this.usuariomasterservice.get().subscribe(data =>{
      console.log(data)
    })
  }
}
