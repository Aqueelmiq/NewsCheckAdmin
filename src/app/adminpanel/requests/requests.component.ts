import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  issues: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {
    this.issues = af.database.list('/issues');
  }

  ngOnInit() {}

  resolve(item) {
    this.issues.remove(item.$key);
  }

}
