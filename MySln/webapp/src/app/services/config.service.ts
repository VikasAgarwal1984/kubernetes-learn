import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EndpointService } from './endpoint.service';
import { UtilityService } from './utility.service';

export class WebAppConfiguration {
  WeatherApiBasePath!: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private config!: WebAppConfiguration;

  constructor(private utilityService: UtilityService, private endpointService: EndpointService) {
    this.initialize();
  }

  private initialize() {
    const baseUrl = this.utilityService.getBasePath();
    return this.endpointService.get<WebAppConfiguration>(baseUrl + "configuration/config.json").pipe(map(x => {
      if(x) {
        this.config = { WeatherApiBasePath: x.WeatherApiBasePath  };
      }
      return this.config;
    }))
  }

  getConfig() {
    if(this.config) {
      return of(this.config);
    }
    else
    {
      return this.initialize();
    }
  }
}
