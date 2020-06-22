import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HomeComponent } from './components/home/home.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';

// Libraries
import { ChartsModule } from 'ng2-charts';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { CountriesComponent } from './components/countries/countries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LineChartComponent,
    HomeComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    VirtualScrollComponent,
    DragDropComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    ChartsModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
