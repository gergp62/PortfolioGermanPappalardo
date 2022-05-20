import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  logueado:boolean = true;
  constructor() { }

  estaLogueado():boolean {
    return this.logueado;
  }

}
