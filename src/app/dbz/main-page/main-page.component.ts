import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  
  public personajesPadre:IPersonaje[] = [
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    }
  ];

  public nuevoPadre:IPersonaje= {
    nombre:"Roshi",
    poder: 1000
  }

  public cambiarNombre(event: any):void{
    console.log(event);
  }

}
