import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Hero[] = [];
  hero = new Hero('', '');
  constructor(public service: HeroesService) { }

  ngOnInit(): void {
    console.log('HeroesComponent: ngOnInit');
    this.heroes = this.service.getHeroes();
    this.hero = this.service.getHeroFormData();
    
  }

  ngOnDestroy(): void {
    console.log('HeroesComponent: ngOnDestroy');
    this.service.setHeroes(this.heroes);
    this.service.setHeroFormData(this.hero);
    
  }

  addHero(hero: Hero): void {
    this.heroes.push(hero);
  }

  handleChange(hero: Hero): void {
   this.service.setHeroFormData(hero);
  }

}
