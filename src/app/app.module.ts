import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroeslistComponent } from './components/heroes/heroeslist/heroeslist.component';
import { HeroformComponent } from './components/heroes/heroform/heroform.component';
import { HeroesService } from './services/heroes.service';
import { CalculatorService } from './services/calculator.service';
import { HttpClientModule } from '@angular/common/http';
import { ApodComponent } from './components/apod/apod/apod.component';
import { ApodService } from './services/apod.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroeslistComponent,
    HeroformComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HeroesService, 
    CalculatorService, 
    ApodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
