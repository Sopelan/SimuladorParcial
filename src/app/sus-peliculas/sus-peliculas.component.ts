import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-sus-peliculas',
  templateUrl: './sus-peliculas.component.html',
  styleUrls: ['./sus-peliculas.component.css']
})
export class SusPeliculasComponent implements OnInit {

  tablaPeliculas : TablaPeliculaComponent;
  @Input() ActorElejidoApellido : any = "";
  @Input() ActorElejidoNombre:any = "";
  
  constructor(private refereciasFirebase:AngularFirestore) 
  { 
    this.tablaPeliculas = new TablaPeliculaComponent(refereciasFirebase);
  }

  ngOnInit(): void {
  }
  SiEsta(item:any):boolean
  {
    for(let i = 0;i<item.data.Actores.length;i++)
    {
      if(item.data.Actores[i].nombre == this.ActorElejidoNombre && item.data.Actores[i].apellido == this.ActorElejidoApellido)
        return true
    }
    return false;
  }
}
