import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'line-chart', component: LineChartComponent},
  { path: 'bar-chart', component: BarChartComponent},
  { path: 'doughnut-chart', component: DoughnutChartComponent},
  { path: 'radar-chart', component: RadarChartComponent},
  { path: 'virtual-scroll', component: VirtualScrollComponent},
  { path: 'drag-drop', component: DragDropComponent},
  { path: '**', pathMatch: 'full', redirectTo: "home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
