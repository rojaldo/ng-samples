import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  name = '';
  heroes = [
    { name: 'Superman' },
    { name: 'Batman' },
    { name: 'Spiderman' },
    { name: 'Wolverine' },
    { name: 'Hulk' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addHero(): void {
    this.heroes.push({ name: this.name });
    this.name = '';
  }

}
