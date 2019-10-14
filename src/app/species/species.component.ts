import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  events:any[] = [];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSpecies()
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
