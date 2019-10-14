import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent implements OnInit {

  events:any[] = [];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPeople()
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
