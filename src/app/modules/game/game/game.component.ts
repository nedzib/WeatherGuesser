import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CapitalService } from 'src/app/services/capital.service';
import { ClimaService } from 'src/app/services/clima.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public score = 0;
  public country = '';
  public capital = '';

  public payload = {
    temp: true,
    name: 'Player',
    score: 0
  };

  public rightOpt = 4;

  public opt = [0,0,0]

  // NGClass Variables
  public right = [false, false, false];
  public wrong = [false, false, false];


  constructor(
    private UService: UsuarioService,
    private CService: CapitalService,
    private WService: ClimaService,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.resetButtons();
    let infoCountry = {
      capital: '',
      country: '',
      capitalID: ''
    };
    while(infoCountry.capital === '' || infoCountry.country === ''){
      infoCountry = await this.CService.randomCapital();
    }
    console.log(infoCountry);
    // console.log(infoWeatherC, 'C°');
    // console.log(infoWeatherF, 'F°');
    this.country = infoCountry.country;
    this.capital = infoCountry.capital;
    this.payload = this.UService.getSessionData();
    console.log(this.payload);
    if(this.payload.temp === true){
      const infoWeatherC = await this.WService.weatherC(infoCountry.capitalID);
      this.fillData(infoWeatherC);
    } else {
      const infoWeatherF = await this.WService.weatherF(infoCountry.capitalID);
      this.fillData(infoWeatherF);
    }
    

  }  

  public onSelect(value: any): void{
    let audio = new Audio();
    if(value === this.rightOpt){
      console.log('right');
      this.right[value] = true;
      this.score = this.score + 1;
      this.payload.score = this.score
      audio.src = "assets/sounds/right.mp3";
      audio.play();
      this.reload();
    } else {
      console.log('NO right');
      this.wrong[value] = true;
      this.score = this.score - 1;
      this.payload.score = this.score
      audio.src = "assets/sounds/noright.mp3";
      audio.play();
    }
  }


  private fillData(temps: any): void{
    console.log(temps);
    const rightOpt = (Math.floor(Math.random() * 3));
    this.rightOpt = rightOpt;
    this.opt[rightOpt] = temps.temp
    if(rightOpt === 0){
      this.opt[1] = temps.opt1;
      this.opt[2] = temps.opt2;
    }
    if(rightOpt === 1){
      this.opt[0] = temps.opt1;
      this.opt[2] = temps.opt2;
    }
    if(rightOpt === 2){
      this.opt[1] = temps.opt1;
      this.opt[0] = temps.opt2;
    }
  }

  private async reload(): Promise<void>{
    this.resetButtons();
    let infoCountry = {
      capital: '',
      country: '',
      capitalID: ''
    };
    while(infoCountry.capital === '' || infoCountry.country === ''){
      infoCountry = await this.CService.randomCapital();
    }
    console.log(infoCountry);
    this.country = infoCountry.country;
    this.capital = infoCountry.capital;
    console.log(this.payload);
    if(this.payload.temp === true){
      const infoWeatherC = await this.WService.weatherC(infoCountry.capitalID);
      this.fillData(infoWeatherC);
    } else {
      const infoWeatherF = await this.WService.weatherF(infoCountry.capitalID);
      this.fillData(infoWeatherF);
    }
  }

  private resetButtons(): void{
    this.right = [false, false, false];
    this.wrong = [false, false, false];
  }

  private wait(ms: number){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
  }

  public onSubmit(): void{
    console.log('--onSubmit--End');
      this.UService.setSessionData(this.payload);
      this.router.navigate(['/end']);
  }
}