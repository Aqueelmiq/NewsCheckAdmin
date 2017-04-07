import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  edit: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  editDetail() {
    if(this.edit) {
      //POST REQUEST TO SERVER
    }
    this.edit = !this.edit;

  }

}
