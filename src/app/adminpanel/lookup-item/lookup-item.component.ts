import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Http} from "@angular/http";
import {Source} from "../Source";

@Component({
  selector: 'app-lookup-item',
  templateUrl: './lookup-item.component.html',
  styleUrls: ['./lookup-item.component.css']
})
export class LookupItemComponent implements OnInit {

  name: string;
  url: string;
  result: Source;
  suggestions = [];
  sources = [];

  constructor(public af: AngularFire, public http: Http) {
    af.database.list('/sources').subscribe((list) => {
      this.sources = list;
    });
  }

  ngOnInit() {
  }

  pick(suggestion) {
    this.result = suggestion;
    this.suggestions = [];
  }

  hover(event) {
    event.target.className = "list-group-item active"
  }

  blur(event) {
    event.target.className = "list-group-item"
  }

  suggest() {
    this.suggestions = this.sources.filter((source)=> {
      console.log(this.url);
      return source["url"].indexOf(this.url) > -1;
    }).slice(0, 5);
  }

  search() {
    for(const source in this.sources) {
      if(this.sources[source]["url"].toLowerCase() == this.url.toLowerCase()) {
        this.pick(this.sources[source]);
        break;
      }
    }
  }

}
