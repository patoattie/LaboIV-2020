import { Component } from '@angular/core';
import { Hero } from './clases/hero';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `
    <h1>{{title}}</h1>
    <!-- <h2>My favorite hero is: {{myHero}}</h2> -->
    <h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        <!-- {{ hero }} -->
        {{ hero.name }}
      </li>
    </ul>

    <p *ngIf="heroes.length > 3">There are many heroes!</p>
  `
})
export class AppComponent {
  title: string;
  // heroes: string[];
  heroes: Hero[];
  // myHero: string;
  myHero: Hero;

  constructor() {
    this.title = 'Tour of Heroes';
    // this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.heroes = [
      new Hero(1, 'Windstorm'),
      new Hero(13, 'Bombasto'),
      new Hero(15, 'Magneta'),
      new Hero(20, 'Tornado')
    ];

    this.myHero = this.heroes[0];
  }
}
