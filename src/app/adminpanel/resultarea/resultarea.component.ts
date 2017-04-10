import { Component, OnInit } from '@angular/core';
import {DataService} from "../../dataservice/data.service";

@Component({
  selector: 'app-resultarea',
  templateUrl: './resultarea.component.html',
  styleUrls: ['./resultarea.component.css']
})
export class ResultareaComponent implements OnInit {

  show: boolean = false;
  constructor(public ds: DataService) {
    this.ds.show.subscribe(s => {
      this.show = s;
    })
  }

  ngOnInit() {}

}
