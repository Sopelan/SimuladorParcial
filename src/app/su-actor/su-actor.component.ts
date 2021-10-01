import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-su-actor',
  templateUrl: './su-actor.component.html',
  styleUrls: ['./su-actor.component.css']
})
export class SuActorComponent implements OnInit {

  @Input() nombre: any;
  @Input() apellido: any;
  @Input() email: any;
  @Input() pais: any;
  @Input() direccion: any;
  constructor() { }

  ngOnInit(): void {
  }

}
