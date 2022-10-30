import { Component, OnInit } from '@angular/core';

interface IPersonaje {
  nombre: string;
  poder: number;
}


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  public nuevo:IPersonaje = {
    nombre: 'Trunks',
    poder:14000
  }

  public agregar():void{
    console.log(this.nuevo);
    
  }

  public cambiarNombre(event: any):void{
    console.log(event);
  }

}
