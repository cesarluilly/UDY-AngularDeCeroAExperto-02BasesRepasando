import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input() public nuevoHijo:IPersonaje = {
    nombre: '',
    poder:0
  }
  
  @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter<IPersonaje>();

  public agregar():void{
    if(this.nuevoHijo.nombre.trim().length === 0){
      return;
    }
    
    this.onNuevoPersonaje.emit(this.nuevoHijo);
    this.nuevoHijo = {
      nombre: '',
      poder:0
    };
  }
}
