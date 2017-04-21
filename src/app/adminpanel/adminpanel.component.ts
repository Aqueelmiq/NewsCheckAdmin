import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(public af: AngularFire, public router:Router) {
    this.af.auth.subscribe((auth) => {
      if(!auth) {
        this.router.navigate(['/user']);
      }
    })
  }

  ngOnInit() {}

}
