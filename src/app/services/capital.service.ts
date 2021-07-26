import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  constructor() { }

  private country = '';
  private capital = '';
  private capitalID = '';

  private randomNumber(): number{
    return Math.floor(Math.random() * 255) + 1;
  }

  public async randomCapital(): Promise<any> {
    const ranNumber = this.randomNumber();
    await fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => {
      // console.log(data[ranNumber]);
        this.country = data[ranNumber].name;
        this.capital = data[ranNumber].capital;
        this.capitalID = this.capital.replace(' ', '+');
    });
    return {
      capital: this.capital,
      country: this.country,
      capitalID: this.capitalID
    };
  }
}
