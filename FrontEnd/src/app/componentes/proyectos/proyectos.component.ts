import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  listaProyecto:Proyecto[] = [];
  
  constructor(private ps:PortfolioService) { }

  ngOnInit(): void {
    this.listaProyecto = this.ps.getPorfolio().proyectos;
  }

}
