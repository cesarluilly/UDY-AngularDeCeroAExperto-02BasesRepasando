import { Component, OnInit, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  @Input() personajesHijo:IPersonaje[] = [];
  
}
