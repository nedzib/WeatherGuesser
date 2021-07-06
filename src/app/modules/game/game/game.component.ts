import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public score = 10;
  public payload = {
    temp: true,
    name: 'Player'
  };

  constructor(
    private UService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.payload = this.UService.getSessionData();
    console.log(this.payload);
  }

  public onSelect(value: any): void{
    console.log(value);
  }

}
