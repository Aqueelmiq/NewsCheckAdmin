import { Component, OnInit } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-useraccess',
  templateUrl: './useraccess.component.html',
  styleUrls: ['./useraccess.component.css']
})
export class UseraccessComponent implements OnInit {

  constructor(public af: AngularFire, private router: Router) { }

  email: string;
  pass: string;

  ngOnInit() {
  }

  login() {
    this.af.auth.login({email: this.email, password: this.pass})
      .then(
      (success) => {
        console.log(success);
        this.router.navigate(['/admin']);
      }).catch(
      (err) => {
        console.log(err);
        alert("Invalid User!");
      });
  }

  logout() {
    this.af.auth.logout();
  }
}
