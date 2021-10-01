import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private router:Router) {
    this.pelicula = {id:"",data:new Pelicula(0,"","","",0,"")}
    this.pelicula.data.cantidadPublico = null;
    this.pelicula.data.id = null;
   }
   @Output() pelicula:any 
  @Output() Ver:boolean = true;
  ngOnInit(): void {
  }
  mostrar($event:any)
  {
    this.pelicula = $event;
    this.Ver = false;
    console.log(this.pelicula)
  }
  PonerEnBlanco($event : any)
  {
    if($event == "blanco")
    {
      this.pelicula = {id:"",data:new Pelicula(0,"","","",0,"")}
      this.pelicula.data.cantidadPublico = null;
      this.pelicula.data.id = null;
      this.Ver = true;

    }
  }
  anterior()
  {
    this.router.navigate(["actor/actorPelicula"]);
  }
  siguiente()
  {
      this.router.navigate(["actor/alta"]);
  } 
}
