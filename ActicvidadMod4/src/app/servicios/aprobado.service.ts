import { Injectable } from '@angular/core';
import { InfoDeUsuario } from '../modelo/datos';



@Injectable({
  providedIn: 'root'
})
export class AprobadoService {

  constructor(

  ) { }

usuarioValido(datos:InfoDeUsuario):boolean{
  
return datos.nombre != ''&& datos.nacido>1940;
}
}
