import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public sessionData = {
    temp: true,
    name: 'Player',
    score: 0
  };

  constructor() { }

  public setSessionData(data: any): void{
    this.sessionData = data;
  }

  public getSessionData(): any{
    return this.sessionData;
  }

  public resetScore(): any{
    this.sessionData.score = 0;
  }
}
