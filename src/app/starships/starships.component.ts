import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  events:any[] = [];

  constructor(protected dataService: DataService) {}

  ngOnInit() {
    this.dataService.getStarships()
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
