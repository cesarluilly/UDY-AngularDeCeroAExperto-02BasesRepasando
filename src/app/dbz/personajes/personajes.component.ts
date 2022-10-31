import { Component, OnInit, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  // @Input() public personajesHijo:IPersonaje[] = [];
  public get personajesHijo(){
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService: DbzService){}
}
