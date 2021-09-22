import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  display = '';

  constructor() { }

  getDisplay(): string {
    return this.display;
  }

  setDisplay(value: string): void {
    this.display = value;
  }
  
}
