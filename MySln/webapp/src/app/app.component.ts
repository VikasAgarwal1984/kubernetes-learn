import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'webapp';
  rowData: any;

  columnDefs: ColDef[] = [
    { field: 'date' },
    { field: 'temperatureC' },
    { field: 'temperatureF' },
    { field: 'summary' },
  ];

  constructor(private ws: WeatherService) {}

  ngOnInit() {
    this.rowData = this.ws.getWeatherData();
  }
}
