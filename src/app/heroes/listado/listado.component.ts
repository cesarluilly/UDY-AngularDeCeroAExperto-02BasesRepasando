import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  public heroes: string[] = ['spiderman', 'iroman', 'thor'];
  public ultimoHeroBorrado:string = "";
  
  public borrarHeroe():void{
    const heroeBorrado = this.heroes.shift();
    this.ultimoHeroBorrado = heroeBorrado || "";
    
  }
}
