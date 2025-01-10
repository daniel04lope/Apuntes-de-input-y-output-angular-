import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { personajes } from '../interface/character.interface';

//Hacemos cambios para subirlo a git
@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: personajes[] = [{
    id: uuid(),
    nombre: 'Krillj',
    poder: 1000
  },{
    id: uuid(),
    nombre:'Goku',
    poder: 9500
  },{
    id: uuid(),
    nombre:"Vegetaaa",
    poder: 7500
  }];

 // onDelete = Index value: number;

  addCharacter(character:personajes): void{

    const newCharacter: personajes = { id: uuid(), ...character}

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    //this.characters.splice(index,1);

   deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}