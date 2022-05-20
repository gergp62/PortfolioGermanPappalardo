import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  listaExperiencia:Experiencia[]=[];

  experiencia:Experiencia = {
   compania:"", puesto:"", desde: new Date, hasta: new Date, logoCompania:""
  }


  constructor( private ps:PortfolioService) { }

  ngOnInit(): void {

    this.listaExperiencia = this.ps.getPorfolio().experiencia
  }

  onEdit(i:number){
    this.experiencia = this.listaExperiencia[i];
  }

}
