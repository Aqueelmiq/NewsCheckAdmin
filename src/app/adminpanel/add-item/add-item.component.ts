import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Source} from "../Source";
import {DataService} from "../../dataservice/data.service";
import {AngularFire} from "angularfire2";
import {newsx} from '../data';

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

  constructor(public ds: DataService, public af: AngularFire, public toasterService: ToasterService) {
    /*var sources = []
    for (var key in newsx) {
      console.log('Hi');
      let source = new Source(key, newsx[key]['type'], newsx[key]['Investigated?']);
      source.reason2 = newsx[key]['2nd type'];
      source.reason3 = newsx[key]['2nd type'];
      source.notes = newsx[key]['Source Notes (things to know?)'];
      if(source.confidence) {
        source.rating = 2*Math.random();
      }
      else {
        source.rating = 1 + 3 * Math.random();
      }
      sources.push(source);
    }
    this.af.database.object('/sources').set(sources);*/
  }

  ngOnInit() {}

  onSubmit() {
    var item = new Source(this.url, this.reason, this.confidence);
    item.notes = this.notes;
    item.rating = this.rating;
    this.ds.newResult(item);
    this.toasterService.pop('success', 'Success!', 'Added a new source.')
  }

}
