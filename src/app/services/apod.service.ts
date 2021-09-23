import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  key = 'tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';

  constructor(public http: HttpClient) { }

  getApod(startDateString?: string, endDateString?: string): Observable<any> {
    if (startDateString != undefined && endDateString === undefined) {
      return this.http.get('https://api.nasa.gov/planetary/apod?date=' + startDateString + '&api_key=' + this.key);
    } else if (startDateString !== undefined && endDateString != undefined) {
      return this.http.get('https://api.nasa.gov/planetary/apod?start_date=' + startDateString + '&end_date=' + endDateString + '&api_key=' + this.key);
    } else if (startDateString === undefined && endDateString === undefined) {
      return this.http.get('https://api.nasa.gov/planetary/apod?api_key=' + this.key);
    }
    return new Observable<any>();
  }
}
