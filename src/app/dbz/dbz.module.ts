//Se establecen los imports necesarios para el buen funcionamiento del .ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './components/pages/pages.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  //Se establecen las declaraciones
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  //Los modulos que se van a exportar
  exports: [
    MainPageComponent,
  ],
  //Y los imports
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
