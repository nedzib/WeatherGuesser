import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public sessionData = {
    temp: true,
    name: 'Player'
  };

  constructor() { }

  public setSessionData(data: any): void{
    this.sessionData = data;
  }

  public getSessionData(): any{
    return this.sessionData;
  }
}
