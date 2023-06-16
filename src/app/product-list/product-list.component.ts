import { Component, OnInit } from '@angular/core';
import { Starship } from '../models/starship.model';
import { StarshipService } from '../services/starship.service';

@Component({
  selector: 'app-starship-list',
  template: `
    <h1>Starships2</h1>
    <ul>
      <li *ngFor="let starship of starships">{{ starship.name }}</li>
    </ul>
  `,
  styles: []
})
export class StarshipListComponent implements OnInit {
  starships: Starship[] = [];

  constructor(private starshipService: StarshipService) {}

  ngOnInit(): void {
    this.starshipService.getStarships()
      .subscribe((data: Starship[]) => {
        this.starships = data;
      });
  }

  
}
