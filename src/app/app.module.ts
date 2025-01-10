//Se establecen los imports necesarios para el buen funcionamiento del .ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './heroes/heroes.module';

import { ListComponent } from './heroes/list/list.component';
import { CommonModule } from '@angular/common';

import { AddCharacterComponent } from './dbz/components/add-character/add-character.component';
import { DbzModule } from './dbz/dbz.module';



@NgModule({
   //Se establecen las declaraciones
  declarations:[
    AppComponent,
    ListComponent,
    
  ],
   //Y los imports
  imports: [

    BrowserModule,
    AppRoutingModule,
    DbzModule 
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


