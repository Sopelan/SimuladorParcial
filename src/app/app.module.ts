import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { TablaPeliculaComponent } from './tabla-pelicula/tabla-pelicula.component';
import { PeliculaAltaComponent } from './pelicula-alta/pelicula-alta.component';
import { ActorAltaComponent } from './actor-alta/actor-alta.component';
import { ActorListadoComponent } from './actor-listado/actor-listado.component';
import { PeliculaListadoComponent } from './pelicula-listado/pelicula-listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { DetallePeliculaComponent } from './detalle-pelicula/detalle-pelicula.component';
import { TablaPaisesComponent } from './tabla-paises/tabla-paises.component';
import {HttpClientModule } from '@angular/common/http';
import { TablaActorComponent } from './tabla-actor/tabla-actor.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { SusPeliculasComponent } from './sus-peliculas/sus-peliculas.component';
import { SusPaisesComponent } from './sus-paises/sus-paises.component';
import { SuActorComponent } from './su-actor/su-actor.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    TablaPeliculaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    DetallePeliculaComponent,
    TablaPaisesComponent,
    TablaActorComponent,
    ActorPeliculaComponent,
    SusPeliculasComponent,
    SusPaisesComponent,
    SuActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
