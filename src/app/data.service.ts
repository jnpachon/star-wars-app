import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient) { }

  getPeople() {
    return this.http.get('https://swapi.co/api/people/?format=json');
  }

  getFilms() {
    return this.http.get('https://swapi.co/api/films/?format=json');
  }

  getStarships() {
    return this.http.get('https://swapi.co/api/starships/?format=json');
  }

  getVehicles() {
    return this.http.get('https://swapi.co/api/vehicles/?format=json');
  }

  getSpecies() {
    return this.http.get('https://swapi.co/api/species/?format=json');
  }

  getPlanets() {
    return this.http.get('https://swapi.co/api/planets/?format=json');
  }
}
