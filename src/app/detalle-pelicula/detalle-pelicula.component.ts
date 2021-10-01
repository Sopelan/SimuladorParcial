import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() Titulo:string = "";
  @Input() Tipo:string = "";
  @Input() Cantidad:any = "";
  @Input() Estreno:string = "";
  @Input() Imagen:string = "";
  @Input() Id:any = ""
  @Input() IdData:any = ""
  @Input() ver:boolean|string = true
  boton:any = "modificar"
  @Output() EnBlanco:EventEmitter<any> =new EventEmitter<any>()
  constructor(private refereciasFirebase:AngularFirestore)
  {

  }

  ngOnInit(): void {
    
  }
  Modificar()
  {
    /*this.refereciasFirebase.collection("peliculas").doc(this.IdData).delete().then(()=>{
      console.log('Eliminado!');
    },(error)=>{
      console.error(error);
    })
    let pelicula = {"id":this.Id,"nombre":this.Titulo,"tipo":this.Tipo,"fechaEstreno":this.Estreno,"cantidadPublico":this.Cantidad,"fotoPelicula":this.Imagen}
    this.refereciasFirebase.collection("peliculas").add(pelicula).then(()=>{
      console.log('Modificado!');
    },(error)=>{
      console.error(error);
    });*/
    this.refereciasFirebase.collection("peliculas").doc(this.IdData).update({
      "nombre":this.Titulo,
      "tipo":this.Tipo,
      "fechaEstreno":this.Estreno,
      "cantidadPublico":this.Cantidad,
      "fotoPelicula":this.Imagen,
      "id": this.Id,
    }).then(()=>{
      console.log('Modificado!');
      
    },(error)=>{
      console.error(error);
    });
    this.EnBlanco.emit("blanco");
    
  }
}
