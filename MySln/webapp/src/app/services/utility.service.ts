import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {}

  getBasePath(): string {
    return document.getElementsByTagName('base')[0].href;
  }
}
