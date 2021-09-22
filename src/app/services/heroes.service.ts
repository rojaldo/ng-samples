import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable()
export class HeroesService {

  private heroes: Hero[] = [
    new Hero('Superman', 'Super strength', 'Clark Kent'),
    new Hero('Batman', 'Money', 'Bruce Wayne'),
    new Hero('Spiderman', 'Web-slinging',  'Peter Parker'),
    new Hero('Wolverine', 'Super healing', 'James Howlett'),
    new Hero('Hulk', 'Super strength', 'Robert Bruce Banner'),
  ];

  private hero = new Hero('','');

  constructor() { }

  setHeroes(heroes: Hero[]): void {
    this.heroes = heroes;
  }

  getHeroes(): Hero[] {
    return this.heroes;
  }

  getHeroFormData(): Hero {
    return this.hero;
  }

  setHeroFormData(hero: Hero): void {
    this.hero = hero;
  }

}
