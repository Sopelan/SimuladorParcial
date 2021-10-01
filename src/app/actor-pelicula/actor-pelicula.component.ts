import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { TablaActorComponent } from '../tabla-actor/tabla-actor.component';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.css']
})
export class ActorPeliculaComponent implements OnInit {

  tablaActores : TablaActorComponent;
  ActorElejidoNombre:any = ""
  ActorElejidoApellido:any = ""
  suPais : any ="";
  actor : any
  direccion : any;
  email: any;
  constructor(private refereciasFirebase:AngularFirestore,private router:Router) 
  {
    this.tablaActores = new  TablaActorComponent(refereciasFirebase);
  }

  ngOnInit(): void {
  }
  Mostrar(item:any)
  {
    this.ActorElejidoNombre =item.data.nombre
    this.ActorElejidoApellido =item.data.apellido
    this.suPais= item.data.pais
    this.direccion = item.data.direccion;
    this.email = item.data.email;
  }
  anterior()
  {
    this.router.navigate(["peliculas/alta"]);
  }
  siguiente()
  {
      this.router.navigate(["busqueda"]);
  } 
}
