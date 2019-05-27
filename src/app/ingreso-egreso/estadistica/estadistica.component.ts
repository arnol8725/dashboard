import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';

import { MultiDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';
import * as fromIngresoEgreso from '../ingreso-egreso.reducer' ;
@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit,OnDestroy {
  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  subscription: Subscription = new Subscription();

  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: number[] = [];
  
  
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private store : Store<fromIngresoEgreso.AppState>) { }

  ngOnInit() {
    console.log('entro EstadisticaComponent');
    this.subscription  = this.store.select('ingresoEgreso')  
    .subscribe(result => {
      
       
        this.contarIngresoEgreso(result.items)  ;   

      
    });
  }
  contarIngresoEgreso( items: IngresoEgreso[] ) {

    this.ingresos = 0;
    this.egresos = 0;

    this.cuantosEgresos = 0;
    this.cuantosIngresos = 0;

    items.forEach( item => {

      if ( item.tipo === 'ingreso' ) {
        this.cuantosIngresos ++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos ++;
        this.egresos += item.monto;  
      }

    });

    this.doughnutChartData = [ this.ingresos, this.egresos ];

  }
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
