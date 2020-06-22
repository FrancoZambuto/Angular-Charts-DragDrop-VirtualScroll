import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData = [350, 450, 100]
  ;
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    let _doughnutChartData;
    _doughnutChartData = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)];

    
      this.doughnutChartData = _doughnutChartData;
  }

}
