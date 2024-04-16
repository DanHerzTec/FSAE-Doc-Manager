import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() files: any; // Define the type according to the data structure you're passing
cards: any = [
    {
      title: 'Card 1',
      description: 'This is card 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 2',
      description: 'This is card 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Card 3',
      description: 'This is card 3',
      image: 'https://via.placeholder.com/150'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
