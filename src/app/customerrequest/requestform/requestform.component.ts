import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-requestform',
  templateUrl: './requestform.component.html',
  styleUrls: ['./requestform.component.css']
})
export class RequestformComponent implements OnInit {

  name: string;
  email: string;
  url: string;
  reason: string;

  issues: FirebaseListObservable<any>;
  constructor(public af: AngularFire) {
    this.issues = this.af.database.list('issues');
  }

  ngOnInit() {
  }

  submit() {
    this.issues.push({
      name: this.name,
      url: this.url,
      email: this.email,
      reason: this.reason
    });
  }

}
