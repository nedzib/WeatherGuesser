import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  temp = 0;

  constructor() {}

  private randomNumber(): number {
    return Math.floor(Math.random() * 10) + 1;
  }

  public async weatherC(capitol: string): Promise<any> {
    await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        capitol +
        '&appid=' + environment.apiOpenWeather
    )
      .then((response) => response.json())
      .then((data) => {
        try {
          this.temp = Math.floor(data.main.temp - 273.15);
          return {
            temp: this.temp,
            opt1: this.temp + this.randomNumber(),
            opt2: this.temp + this.randomNumber(),
          };
        } catch (error) {
          console.log(error);
          return 'error';
        }
      });
    return {
      temp: this.temp,
      opt1: this.temp + this.randomNumber(),
      opt2: this.temp + this.randomNumber(),
    };
  }

  public async weatherF(capitol: string): Promise<any> {
    await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' +
        capitol +
        '&appid=' + environment.apiOpenWeather
    )
      .then((response) => response.json())
      .then((data) => {
        this.temp = Math.floor((data.main.temp - 273.15) * (9 / 5) + 32);
      });
    return {
      temp: this.temp,
      opt1: this.temp + this.randomNumber(),
      opt2: this.temp + this.randomNumber(),
    };
  }
}
