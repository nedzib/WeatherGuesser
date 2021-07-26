import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndComponent } from './end/end.component';
import { EndRoutingModule } from './end-routing.module';


@NgModule({
  declarations: [
    EndComponent
  ],
  imports: [
    CommonModule,
    EndRoutingModule
  ]
})
export class EndModule { }
