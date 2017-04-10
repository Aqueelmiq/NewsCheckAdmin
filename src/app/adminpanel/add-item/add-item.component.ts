import {Component, OnInit} from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import {Source} from "../Source";
import {DataService} from "../../dataservice/data.service";
import {AngularFire} from "angularfire2";

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
    /*this.af.database.object('/sourcesbackup').subscribe(sources => {
      this.af.database.object('/sources').set(sources);
    })*/
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
