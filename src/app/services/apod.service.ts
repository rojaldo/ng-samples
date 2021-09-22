import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  constructor(public http: HttpClient) { }

  getApod(): Observable<any> {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2021-06-25')
  }
}
