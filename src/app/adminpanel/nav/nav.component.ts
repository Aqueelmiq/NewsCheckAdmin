import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout()
      .then(
        (success) => {
          console.log(success);
        }).catch(
      (err) => {
        console.log(err);
        alert("Logout Failed!");
      });
  }

}
