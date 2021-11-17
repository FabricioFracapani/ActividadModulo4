import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InfoDeUsuario } from 'src/app/modelo/datos';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() nombre:string = '';
  @Input() nacido:number = 1920 ;
  @Output() aceptado = new EventEmitter<InfoDeUsuario>();

  constructor() { 

  }

  aceptar(){
    this.aceptado.emit({
      nombre:this.nombre,
      nacido:this.nacido,
    });
    return false;
  }

  ngOnInit(): void {
  }

}
