import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personajes } from '../interface/character.interface';
import { OutletContext } from '@angular/router';
// Se establece el selector, el html y el css que usara este componente
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
//Se establece el input para que el padre pueda comunicarse con el hijo 
@Input()
//Se establece un array con un personaje en este caso 
  public characterList: personajes[] = [{
    nombre:'Trunk',
    poder: 10
  }]


//Se establece el output para que se pueda comunicar el hijo con el padre y pasarle informacion 
@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

//Se establece un metodo para eliminar un personaje
onDeteteCharacter(id?:string):void{

   this.onDelete.emit(id);

  }

}
