import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKeyPressed(value: any): void {
    console.log(typeof value);
    this.display = this.display + value;
  }

}
