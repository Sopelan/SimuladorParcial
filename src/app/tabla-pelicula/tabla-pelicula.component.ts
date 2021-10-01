import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { collection, deleteDoc, doc, getDocs, getFirestore, onSnapshot } from 'firebase/firestore';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  db = getFirestore();
  lista : any = [];
  coleccionMensajesChat: AngularFirestoreCollection;
  mensaje:string = ""
  mensajes:any = "";
  segundo=0;
  pelicula : any

  @Output() modificar:EventEmitter<any> =new EventEmitter<any>()

  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.coleccionMensajesChat = refereciasFirebase.collection('peliculas');
    this.RecuperarPeliculas();
  }
  ngOnInit(): void {
    this.segundo = 0;
    this.mensaje = "";
  }
  GuardarPelicula(id:number,nombre:string,tipo:string,fechaEstreno:any,cantidadPublico:number,fotoPelicula:string,Actores:any)
  {
    let pelicula = {"id":id,"nombre":nombre,"tipo":tipo,"fechaEstreno":fechaEstreno,"cantidadPublico":cantidadPublico,"fotoPelicula":fotoPelicula,"Actores":Actores}
    console.log(pelicula);
    this.coleccionMensajesChat.add(pelicula);
  }
  async RecuperarPeliculas()
  {
     /*let ar = this.coleccionMensajesChat.valueChanges()
     ar.subscribe(datosRetornado=>{
      console.info("dato retornados",datosRetornado);
      this.lista = datosRetornado;
      //this.mensajes = datosRetornado;
    })*/
    this.refereciasFirebase.collection("peliculas").snapshotChanges().subscribe((peliculas)=>{
      this.lista = [];
      peliculas.forEach((pelicula)=>
      {
        this.lista.push({
          data: pelicula.payload.doc.data(),
          id: pelicula.payload.doc.id
        })
      })
      console.log(this.lista);
    
    })
     
  }
  ModificarPelicula(pelicula:any)
  {
    //console.log(pelicula)
    this.modificar.emit(pelicula);
    
  }
  
}
