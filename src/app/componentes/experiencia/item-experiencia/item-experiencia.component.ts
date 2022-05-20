import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-item-experiencia',
  templateUrl: './item-experiencia.component.html',
  styleUrls: ['./item-experiencia.component.css']
})
export class ItemExperienciaComponent implements OnInit {

  @Input() expItem:Experiencia;
  @Input() index:number;
  @Output() onEditItem:EventEmitter<number> = new EventEmitter<number>();

  constructor(private ps:PortfolioService) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(confirm("Esta seguro de eliminar este item"))
      this.ps.deleteExpItem(this.index)
  }
  onEdit(){
    this.onEditItem.emit(this.index)

  }

}
