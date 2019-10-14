import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  events:any[] = [];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.dataService.getVehicles()
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
