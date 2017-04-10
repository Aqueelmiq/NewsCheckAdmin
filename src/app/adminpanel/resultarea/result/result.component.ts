import {Component, OnDestroy, OnInit} from '@angular/core';
import {Source} from "../../Source";
import {Subscription} from "rxjs";
import {DataService} from "../../../dataservice/data.service";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy {

  resultsub: Subscription;
  source: Source;
  edit: boolean = false;
  constructor(public ds: DataService, public toast: ToasterService) {
    this.resultsub = ds.getCurrentResult().subscribe((source)=> {
      this.source = source;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.resultsub.unsubscribe();
  }

  editDetail() {
    if(this.edit) {
      this.ds.updateResult(this.source);
      this.toast.pop('success', 'Success', 'Updated an Entry');
    }
    this.edit = !this.edit;
  }

  hide() {
    this.ds.hideResult();
  }

}
