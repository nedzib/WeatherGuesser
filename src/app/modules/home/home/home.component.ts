import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public temp: boolean = true;
  public name: string = '';
  public payload = {
    temp: true,
    name: 'Player',
    score: 0
  };

  constructor(
    private UService: UsuarioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    console.log('--Home--');
  }

  public onSubmit(action: string): void{
    if (action === 'start'){
      console.log('--onSubmit--Start');
      // console.log(this.payload);
      this.UService.setSessionData(this.payload);
      this.router.navigate(['/game']);
    } else if (action === 'about'){
      console.log('--onSubmit--About');
    }
  }

  public onChange(state: boolean): void{
    // console.log('--onChange--');
    this.payload.temp = state;
  }

  public onChangeName(data: any): void{
    // console.log(data.srcElement.value);
    this.payload.name = data.srcElement.value;
  }
}
