import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {
  

  public nuevoPadre:IPersonaje= {
    nombre:"Roshi",
    poder: 1000
  }

  constructor(){
  }
}
