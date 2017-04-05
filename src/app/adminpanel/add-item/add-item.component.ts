import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name: string;
  rating: number;
  url: string;
  bias: string;

  constructor() { }

  ngOnInit() {
  }

}
