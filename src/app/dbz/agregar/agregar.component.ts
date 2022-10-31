import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {
  
  @Input() public nuevoHijo:IPersonaje = {
    nombre: '',
    poder:0
  }
  
  // @Output() onNuevoPersonaje: EventEmitter<IPersonaje> = new EventEmitter<IPersonaje>();

  public constructor(private _dbzService:DbzService){ }
  public agregar():void{
    if(this.nuevoHijo.nombre.trim().length === 0){
      return;
    }
    
    // this.onNuevoPersonaje.emit(this.nuevoHijo);
    this._dbzService.agregarPersonaje(this.nuevoHijo);

    this.nuevoHijo = {
      nombre: '',
      poder:0
    };
  }
}
