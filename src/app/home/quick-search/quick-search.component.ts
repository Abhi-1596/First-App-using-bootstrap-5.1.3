import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-search',
  templateUrl: './quick-search.component.html',
  styleUrls: ['./quick-search.component.css']
})
export class QuickSearchComponent implements OnInit {

  hotelTypes: any[] = [
    {
      "_id": 1,
      "trip": "1",
      "name": "Business",
      "image": "https://i.ibb.co/8P41bJx/business.jpg",
      "cost": 5000
    },
    {
      "_id": 2,
      "trip": "2",
      "name": "Holiday",
      "image": "https://i.ibb.co/CVNX8NZ/holiday.jpg",
      "cost": 3000
    },
    {
      "_id": 3,
      "trip": "3",
      "name": "Travel",
      "image": "https://i.ibb.co/KrmBprr/travel.jpg",
      "cost": 2000
    },
    {
      "_id": 4,
      "trip": "4",
      "name": "Luxury",
      "image": "https://i.ibb.co/HBc81qR/luxury.jpg",
      "cost": 8000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
