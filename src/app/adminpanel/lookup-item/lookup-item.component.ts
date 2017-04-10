import {Component, OnInit} from '@angular/core';
import {Source} from "../Source";
import {DataService} from "../../dataservice/data.service";

@Component({
  selector: 'app-lookup-item',
  templateUrl: './lookup-item.component.html',
  styleUrls: ['./lookup-item.component.css']
})
export class LookupItemComponent implements OnInit {

  result: Source;
  name: string;
  url: string;
  suggestions = [];
  sources = [];

  constructor(public ds: DataService) {
    ds.sources.subscribe((list) => {
      this.sources = list;
    });
  }

  ngOnInit() {}

  pick(suggestion) {
    this.result = suggestion;
    this.ds.setCurrentResult(suggestion);
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
