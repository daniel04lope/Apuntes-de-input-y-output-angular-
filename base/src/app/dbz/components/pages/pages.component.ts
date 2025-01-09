import { personajes } from '../interface/character.interface';
import { Component} from '@angular/core';
import { DbzService } from '../service/servicio.service';



@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './pages.component.html'
})

export class MainPageComponent {

constructor(private dbzService:DbzService){



  }

  get characters(): personajes[] {
    return [...this.dbzService.characters]; //Con spreed hacemos una copia de cada uno de los personajes
  }

  onDeleteCharacter( id:string ){
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter(character: personajes):void {
    this.dbzService.addCharacter(character);
  }
}