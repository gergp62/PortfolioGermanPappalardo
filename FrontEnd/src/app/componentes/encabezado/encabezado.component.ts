import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  nombre:string = "";
  apellido:string = "";
  ciudad:string = "";
  pais:string = "";
  profesion:string = "";

  constructor( private ps:PortfolioService) { }

  ngOnInit(): void {
    this.nombre = this.ps.getPorfolio().nombre;
    this.apellido = this.ps.getPorfolio().apellido;
    this.ciudad = this.ps.getPorfolio().ciudad;
    this.pais = this.ps.getPorfolio().pais;
    this.profesion = this.ps.getPorfolio().profesion;
  }

}
