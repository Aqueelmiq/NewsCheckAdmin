import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Source} from "../Source";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  rating: number;
  url: string;
  confidence:boolean;
  reason: string;
  notes: string;

  sources: FirebaseListObservable<any>;

  constructor(public af:AngularFire) {
    this.sources = af.database.list('/sources');
  }

  ngOnInit() {
  }

  onSubmit() {
    var item = new Source(this.url, this.reason, this.confidence);
    item.notes = this.notes;
    item.rating = this.rating;
    this.sources.push(item);
  }

}
