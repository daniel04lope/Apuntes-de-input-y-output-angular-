import { Component } from '@angular/core';

@Component({
  selector: 'hero-componente',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
 
  constructor(){}
  public nombre: string = 'Iron man'
  public edad: Number= 30;
  public nombrecapitalizado= this.nombre.toUpperCase();
  private descripcion:string="Es iron man";

  getdescription(): string {
    return this.descripcion;
  }
    
    }
