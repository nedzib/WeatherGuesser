import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metric'
})
export class MetricPipe implements PipeTransform {

  transform(value: any, type: any, args?: any): any {
    if (type === true){
      return (value + ' °C');
    } else {
      return (value + ' °F');
    }
  }

}
