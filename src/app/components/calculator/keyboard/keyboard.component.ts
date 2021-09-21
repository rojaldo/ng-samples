import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() onKeyboard = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(value: any): void {
    console.log(typeof value);
    this.onKeyboard.emit(value);
  }

}
