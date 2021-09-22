import { Component, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  apod: any = {}

  constructor(public service: ApodService) { }

  ngOnInit(): void {
    this.service.getApod().subscribe(
      (data)=> this.processData(data),
      (error) => this.processError(error)
    );
  }

  processData(data: any) {
    this.apod = data;
  }

  processError(error: any) {
    console.log(error);
  }

}
