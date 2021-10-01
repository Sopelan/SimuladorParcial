import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.RecuperarPaises();
  }
  lista: any
  @Output() mostrar:EventEmitter<any> =new EventEmitter<any>()

  ngOnInit(): void {
  }
  RecuperarPaises()
  {
    this.http.get("https://restcountries.com/v3/all").subscribe(datosRetornado =>{
      console.info("dato retornados",datosRetornado);
      this.mostrar.emit(datosRetornado);
      this.lista = datosRetornado;
    })
  }

}
