import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TablaActorComponent } from '../tabla-actor/tabla-actor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

  nombre:string = "";
  tipo:string = "";
  fechaEstreno: any = "";
  cantidadPublico:number = 0;
  fotoPelicula:string = "";
  lista : any = []
  list : any = []
  listaActoresElejidos: any = [];
  public grupoControles !: FormGroup;
  private tablaPelicula : TablaPeliculaComponent
  tablaActores : TablaActorComponent;
  constructor(private fb:FormBuilder,private router: Router,private refereciasFirebase:AngularFirestore) 
  {
    this.tablaPelicula = new TablaPeliculaComponent(refereciasFirebase);
    this.tablaActores = new TablaActorComponent(refereciasFirebase);
  }
  
  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre': ['',[Validators.required]],
      'tipo': ['',Validators.required],
      'fechaEstreno': ['',[Validators.required]],
      'cantidadPublico':['',Validators.required],
      'fotoPelicula':['',Validators.required]
    })
    this.tablaPelicula.RecuperarPeliculas();
    
  }
  Enviar()
  {
    this.tablaPelicula.GuardarPelicula(this.tablaPelicula.lista.length+1,this.nombre,this.tipo,this.fechaEstreno,this.cantidadPublico,this.fotoPelicula,this.listaActoresElejidos);
  }
  private validadorDeEspacios(control:AbstractControl):null|object
 {
  let nombre :string = control.value;
  let espacios = nombre.includes(' ');
  if(espacios == true)
  {
    return {
      validadorDeEspacios:true
    }
  }
  else 
    return null;
 }
  AgregarActores(item:any)
  {
    let actor = {
      nombre:item.data.nombre,
      apellido:item.data.apellido,
    }
    let sihay = false;
    for(let i = 0;i<this.listaActoresElejidos.length;i++)
    {
      if(actor.nombre == this.listaActoresElejidos[i].nombre && actor.apellido == this.listaActoresElejidos[i].apellido)
      {
        sihay = true
      }
    }
    if(!sihay)
      this.listaActoresElejidos.push(actor);
    
  }
  anterior()
  {
    this.router.navigate(["actor/alta"]);
  }
  siguiente()
  {
      this.router.navigate(["actor/actorPelicula"]);
  } 
}
