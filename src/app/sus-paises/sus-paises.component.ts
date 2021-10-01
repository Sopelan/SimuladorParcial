import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { TablaPaisesComponent } from '../tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-sus-paises',
  templateUrl: './sus-paises.component.html',
  styleUrls: ['./sus-paises.component.css']
})
export class SusPaisesComponent implements OnInit {

  tablaPais : TablaPaisesComponent
  @Input() suPais : any = ""
  constructor(private http: HttpClient) 
  {
    this.tablaPais = new TablaPaisesComponent(http)
  }

  ngOnInit(): void {
  }

  
  

}
