import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apod-card',
  templateUrl: './apod-card.component.html',
  styleUrls: ['./apod-card.component.scss']
})
export class ApodCardComponent implements OnInit {

  @Input() apod: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  getVideoID(url: string): string {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : '';
  }

}
