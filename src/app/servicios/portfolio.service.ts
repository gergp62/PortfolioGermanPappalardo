import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../persona.model';
import { persona } from '../persona.mock';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  deleteExpItem(index: number) {
    throw new Error('Method not implemented.');
  }

  
  /*constructor(private http:HttpClient) { }
  obtenerDatos():Observable<any> {
    return this.http.get("")

  }*/

  getPorfolio():Persona{
    
    console.log(persona);
    
    return persona;
  }

  deleteEduItem(i:number){
    persona.educacion.splice(i, 1);
  }
}
