import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from './ingreso-egreso.model';

@Pipe({
  name: 'ordernIngresoEgreso'
})
export class OrdernIngresoEgresoPipe implements PipeTransform {

  transform(item: IngresoEgreso[]): IngresoEgreso[] {
    return item.sort( (a,b) => {
          if(a.tipo === 'ingreso'){
            return -1;
          }else{
            return 1;
          }
    });
  }

}
