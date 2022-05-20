import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  sobremi:string ="";
  constructor( private ps:PortfolioService) {}

  ngOnInit(): void {

    this.sobremi = this.ps.getPorfolio().sobremi;
  }

}
