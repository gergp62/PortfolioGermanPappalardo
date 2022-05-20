import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/persona.model';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-item-educacion',
  templateUrl: './item-educacion.component.html',
  styleUrls: ['./item-educacion.component.css']
})
export class ItemEducacionComponent implements OnInit {

  @Input() eduItem:Educacion;
  @Input() index:number;
  @Output() onEditItem:EventEmitter<number> = new EventEmitter<number>();

  constructor(private ps:PortfolioService) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(confirm("Esta seguro de eliminar este intem"))
      this.ps.deleteEduItem(this.index)
  }
  onEdit(){
    this.onEditItem.emit(this.index)

  }

}
