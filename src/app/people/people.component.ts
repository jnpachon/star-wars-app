import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  list:number[] = [1, 2, 3, 4 ,5];
  constructor() { }

  ngOnInit() {
  }

}
