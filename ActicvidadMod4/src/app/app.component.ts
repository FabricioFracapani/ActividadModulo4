import { Component } from '@angular/core';
import { InfoDeUsuario } from './modelo/datos';
import { AprobadoService } from './servicios/aprobado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ActicvidadMod4';

  constructor(
    private AprobadoService: AprobadoService,
  ){}

  informe (iu:InfoDeUsuario){
    
    if(this.AprobadoService.usuarioValido(iu))
    alert('el usuario es valido');
    else
    
    alert('no se completo el formulario correctamente');
    
  }


}
