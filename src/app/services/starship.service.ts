import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {
  private url = 'https://swapi.dev/api/starships/';
  getStarship: any;

  constructor(private http: HttpClient) {}

  getStarships(): Observable<Starship[]> {
    return this.http.get<Starship[]>(this.url);
  }
}
