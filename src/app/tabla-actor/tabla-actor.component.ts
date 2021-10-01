import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TablaPeliculaComponent } from '../tabla-pelicula/tabla-pelicula.component';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  coleccionMensajesChat:any;
  lista : any = []
  constructor(private refereciasFirebase:AngularFirestore) 
  {
    this.coleccionMensajesChat = refereciasFirebase.collection('actores');
    this.RecuperarActores();
    
  }
  ngOnInit(): void {
    this.RecuperarActores();
  }
  async RecuperarActores()
  {
     /*let ar = this.coleccionMensajesChat.valueChanges()
     ar.subscribe(datosRetornado=>{
      console.info("dato retornados",datosRetornado);
      this.lista = datosRetornado;
      //this.mensajes = datosRetornado;
    })*/
    this.refereciasFirebase.collection("actores").snapshotChanges().subscribe((actores)=>{
      this.lista = [];
      actores.forEach((actores)=>
      {
        this.lista.push({
          data: actores.payload.doc.data(),
          id: actores.payload.doc.id
        })
      })
      console.log("lista de actores",this.lista);
    
    })
     
  }
  
  
}
