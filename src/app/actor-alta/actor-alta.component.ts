import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit {

  coleccionMensajesChat :any;
  constructor(private fb:FormBuilder,private refereciasFirebase:AngularFirestore,private router:Router) 
  {
    this.coleccionMensajesChat = refereciasFirebase.collection('actores');
  }
  public grupoControles !: FormGroup;
  lista :any = [];
  nombre :string = "";
  apellido :string = "";
  email :string = "";
  address :string = "";
  country :string = "";
  ngOnInit(): void {
    this.grupoControles = this.fb.group({
      'nombre': ['',[Validators.required,this.validadorDeEspacios]],
      'apellido': ['',Validators.required],
      'email': ['',[Validators.required,Validators.email]],
      'address':['',Validators.required],
      'country':['',Validators.required]
    });
  }
  Enviar()
  {
    
    let actor = {nombre: this.nombre,apellido:this.apellido,email:this.email,direccion:this.address,pais:this.country}
    this.coleccionMensajesChat.add(actor);
    console.log(actor);
  }
  recibirPaises($event :any)
  {
    this.lista = $event;
    console.log("lista: ",this.lista);
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
 anterior()
  {
    this.router.navigate(["busqueda"]);
  }
  siguiente()
  {
      this.router.navigate(["peliculas/alta"]);
  } 
}
