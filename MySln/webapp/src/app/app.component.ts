import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';

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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://localhost:8080/WeatherForecast';
    this.rowData = this.http.get(url);
  }
}
