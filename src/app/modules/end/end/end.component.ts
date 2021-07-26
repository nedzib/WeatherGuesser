import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  public payload = {
    temp: true,
    name: 'Player',
    score: 0
  };

  constructor(
    private UService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.payload = this.UService.getSessionData();
    console.log(this.payload);
  }

  public onSubmit(action: string): void{
    if (action === 'home'){
      console.log('--onSubmit--home');
      // console.log(this.payload);
      this.UService.setSessionData(this.payload);
      this.router.navigate(['/']);
    } else if (action === 'again'){
      console.log('--onSubmit--again');
      this.UService.resetScore();
      this.router.navigate(['/game']);
    }
  }

}
