import { Component, EventEmitter, Output } from '@angular/core';
import { personajes } from '../interface/character.interface';
/*En esgta parte se establece el selector, el html y el css que se usara para este compoenente*/ 
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  /*Aqui se establece el output para que el hijo en este caso add-character pase informacion al padre
  en este caso se establece la propiedad que se encarga de crear el evento para crear al nuevo personaje
  */
  @Output()
  public onNewCharacter: EventEmitter<personajes> = new EventEmitter();
/*Se crea un personaje y se establecen sus dato*/
  public character: personajes = {
    nombre: '',
    poder: 0
  };
/* Aqui se crea un metodo de tipo void que comprueba si la longuitud del caracter
 es distinta a 0 y si es asi se emite el personaje que se ha creado antes*/ 
  emitCharacter(): void {
    if (this.character.nombre.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { nombre: '', poder: 0 };
  }
}