import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';

import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit,OnDestroy {
  ingresoEgresoDetalle : Subscription = new Subscription();
  items: IngresoEgreso[] = [];
  noIngreso : number;
  noEgreso : number ;
  totalIngreso : number ;
  totalEgreso : number ;
  
  public doughnutChartLabels: Label[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: MultiDataSet ;
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.ingresoEgresoDetalle = this.store.select('items')
    .subscribe(result => {
      
      this.noEgreso=0;
      this.noIngreso=0;
      this.totalEgreso=0;
      this.totalIngreso=0;
      console.log(result);
      this.items = result.items;   
        

      this.items.forEach( item => {
            if(item.tipo === 'ingreso'){
                  this.noIngreso += 1;
                  this.totalIngreso += item.monto;
            }else{
                  this.noEgreso += 1;
                  this.totalEgreso += item.monto;   
            }
      });

       this.doughnutChartData = [
        [this.totalIngreso, this.totalEgreso]
      ];
      
    });
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  ngOnDestroy(){
    this.ingresoEgresoDetalle.unsubscribe()
  }

}
