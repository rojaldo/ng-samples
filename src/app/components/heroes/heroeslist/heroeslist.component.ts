import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroeslist',
  templateUrl: './heroeslist.component.html',
  styleUrls: ['./heroeslist.component.scss']
})
export class HeroeslistComponent implements OnInit {

  @Input() heroes: Hero[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
