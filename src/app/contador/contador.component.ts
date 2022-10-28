import {Component} from '@angular/core'
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <h3>La base es: <strong> 5 </strong> </h3>
        <button (click)="acumular(-5)"> -{{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(base)"> +{{base}} </button>
    `
})
export class ContadorComponent{
    public titulo:string = 'Contador app';
    public numero: number= 10;
    public base: number = 5;
    acumular(valor: number):void{
      this.numero += valor;
    }
}