import { Component } from '@angular/core';
import {AngularFire} from "angularfire2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public af: AngularFire, private router: Router) { }

  ngOnInit() {
    this.af.auth.subscribe((auth) => {
      if(!auth) {
        this.router.navigate(['/user']);
      }
    })
  }
}
