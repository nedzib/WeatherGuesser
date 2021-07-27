import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game-routing.module';
import { MetricPipe } from 'src/app/core/pipes/metric.pipe';


@NgModule({
  declarations: [
    GameComponent,
    MetricPipe
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
