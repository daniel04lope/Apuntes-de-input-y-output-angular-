import { personajes } from '../interface/character.interface';
import { Component} from '@angular/core';

//Se encarga de establecer el selector del componente y el html que usara
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './pages.component.html'
})

export class MainPageComponent {
//Establece los personajes que apareceran por defecto
  public characters: personajes[] = [{
    nombre: 'Krillin',
    poder: 1000
  },{
    nombre:'Goku',
    poder: 9500
  },{
    nombre:"Vegeta",
    poder: 7500
  }];

 // Establecen los metodos que eliminaran y crearan a los personajes

  onNewCharacter(character:personajes): void{
    //Se encarga de introducir al nuevo personaje y devolver la longuitud nueva del array
    this.characters.push(character);
  }

  onDeleteCharacter(index:number){

  //Elimina el elemento del array
    this.characters.splice(index,1);
  }

}
