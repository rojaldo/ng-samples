import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss'],
  
})
export class ApodComponent implements OnInit {

  apod: any = {}
  selectedDate: NgbDateStruct = { year: new Date().getFullYear(), month: new Date().getMonth() + 1, day: new Date().getDate() };
  apiLoaded = false;
  apodArray: any[] = [];

  hoveredDate: NgbDate | null = null;
  fromDate: NgbDate;
  toDate: NgbDate | null = null;

  constructor(public service: ApodService, calendar: NgbCalendar) { 
    this.fromDate = calendar.getNext(calendar.getToday(), 'd', -10);
    this.toDate = calendar.getToday();

  }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.getApod().subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error)
    );
  }

  processData(data: any) {
    this.apod = data;
  }

  processError(error: any) {
    console.log(error);
  }

  onDateSelected() {
    const dateString = this.selectedDate.year + '-' + this.selectedDate.month + '-' + this.selectedDate.day;
    this.service.getApod(dateString).subscribe(
      (data) => this.processData(data),
      (error) => this.processError(error)
    );
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      const startDateString = this.fromDate.year + '-' + this.fromDate.month + '-' + this.fromDate.day;
      const endDateString = this.toDate.year + '-' + this.toDate.month + '-' + this.toDate.day;
      this.service.getApod(startDateString, endDateString).subscribe(
        (data) => {this.apodArray = data},
        (error) => this.processError(error)
      );
  
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

}
