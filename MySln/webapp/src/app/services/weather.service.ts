import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { ConfigService } from './config.service';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private configService: ConfigService, private endpoint: EndpointService) { }

  getWeatherData() {
    return this.configService.getConfig().pipe(switchMap(x => {

      console.log('Config response', x);

      let baseUrl = x.WeatherApiBasePath;
      if(baseUrl.endsWith("/")) {
        baseUrl = baseUrl.substring(0, baseUrl.length - 1);
      }

      const url = baseUrl + "/WeatherForecast";
      console.log('Weather API url', url);
      return this.endpoint.get(url);
    }));
  }
}
