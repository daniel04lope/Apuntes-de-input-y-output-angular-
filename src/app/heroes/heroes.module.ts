//Se establecen los imports necesarios para el buen funcionamiento del .ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';




@NgModule({
   //Se establecen las declaraciones
  declarations: [
    HeroComponent,
    
  ],
  //Los modulos que se van a exportar
  imports: [
    CommonModule
  ],
    //Y los imports
  exports: [
    HeroComponent,
  
  ]
})
export class HeroesModule { }
