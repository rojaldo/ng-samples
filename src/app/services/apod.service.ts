import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  key = 'DEMO_KEY';

  constructor(public http: HttpClient) { }

  getApod(dateString?: string): Observable<any> {
    if (dateString != undefined) {
      return this.http.get('https://api.nasa.gov/planetary/apod?date=' + dateString + '&api_key=' + this.key);
    }
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=' + this.key)
  }
}
