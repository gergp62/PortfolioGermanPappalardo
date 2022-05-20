import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  listaEducacion:Educacion[] = [];

  educacion:Educacion = {
    institucion:"", titulo:"", desde: new Date, hasta: new Date, logoInstitucion:""
  }
  

  constructor( private ps:PortfolioService) { }

  ngOnInit(): void {

    this.listaEducacion = this.ps.getPorfolio().educacion;


  }

  onEdit(i:number){
    
    
    this.educacion = this.listaEducacion[i];
  }

}
