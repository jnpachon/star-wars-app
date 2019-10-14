import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  events:any[] = [];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPlanets()
    .subscribe(
      (data) => { // Success
        this.events = data['results'];
        console.log( this.events );
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
