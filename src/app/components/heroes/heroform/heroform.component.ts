import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroform',
  templateUrl: './heroform.component.html',
  styleUrls: ['./heroform.component.scss']
})
export class HeroformComponent implements OnInit, OnDestroy {

  @Input() heroFormData = new Hero('','');
  @Output() heroAdded = new EventEmitter<Hero>();
  @Output() onHeroChange = new EventEmitter<Hero>();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
  }

  addHero(): void {
    this.heroAdded.emit(new Hero(this.heroFormData.name, this.heroFormData.power));
    this.heroFormData.name = '';
    this.heroFormData.power = '';
  }

  handleChange() {
    this.onHeroChange.emit(this.heroFormData)
  }

}
