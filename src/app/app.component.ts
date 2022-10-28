import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public titulo:string = 'Contador app';
  public numero: number= 10;

  acumular(valor: number):void{
    this.numero += valor;
  }
}
