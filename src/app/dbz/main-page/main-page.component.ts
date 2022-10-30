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
  
  public personajes:IPersonaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ];
  public nuevo:IPersonaje = {
    nombre: '',
    poder:0
  }

  public agregar():void{
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.personajes.push(this.nuevo);
    console.log(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder:0
    };
    
  }

  public cambiarNombre(event: any):void{
    console.log(event);
  }

}
