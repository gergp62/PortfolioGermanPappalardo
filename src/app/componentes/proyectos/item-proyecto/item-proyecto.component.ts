import { Component, Input, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/persona.model';

@Component({
  selector: 'app-item-proyecto',
  templateUrl: './item-proyecto.component.html',
  styleUrls: ['./item-proyecto.component.css']
})
export class ItemProyectoComponent implements OnInit {

  @Input() item:Proyecto

  constructor() { }

  ngOnInit(): void {
  }

}
