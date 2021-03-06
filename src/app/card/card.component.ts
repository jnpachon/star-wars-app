import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() image: string;
  
  constructor() { }

  ngOnInit() {
  }

}
