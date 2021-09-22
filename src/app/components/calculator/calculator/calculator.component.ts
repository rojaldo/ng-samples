import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  display = '';

  constructor(public service: CalculatorService) { }

  ngOnInit(): void {
    this.display = this.service.getDisplay();
  }

  ngOnDestroy(): void {
    this.service.setDisplay(this.display);
  }

  onKeyPressed(value: any): void {
    console.log(typeof value);
    this.display = this.display + value;
  }

}
