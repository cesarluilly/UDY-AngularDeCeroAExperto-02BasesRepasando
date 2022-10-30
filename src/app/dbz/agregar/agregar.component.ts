import { Component, Input } from '@angular/core';
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

  @Input() public personajesHijo:IPersonaje[] = [];
  
  public agregar():void{
    if(this.nuevoHijo.nombre.trim().length === 0){
      return;
    }

    this.personajesHijo.push(this.nuevoHijo);
    console.log(this.nuevoHijo);

    this.nuevoHijo = {
      nombre: '',
      poder:0
    };
  }
}
