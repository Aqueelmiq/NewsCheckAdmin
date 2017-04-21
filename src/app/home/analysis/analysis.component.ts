import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  url: string;
  backend = "https://newscheckbackend.herokuapp.com/check";
  feedback = "https://newscheckbackend.herokuapp.com/user/feedback";
  isResult: boolean = false;
  score:string = "0";
  suggest:string = "Not Available";
  success: string = "";
  classP: string = "bg-success";

  constructor(public http: Http) {}

  ngOnInit() {
  }

  public search() {
    this.isResult = true;
    this.success = "";
    this.http.post(this.backend, {"url": this.url})
      .subscribe((data) => {
        data = data.json();
        this.score = '' + Math.floor(data['data']['score']*100)/100;
        this.suggest = data['data']['suggestion'];
        if(parseInt(this.score) > 65) {
          this.classP = "bg-success";
        }
        else if(parseInt(this.score) > 35) {
          this.classP = "bg-warning";
        }
        else {
          this.classP = "bg-danger";
        }
    });
  }

  public agreed() {
    this.http.put(this.feedback, {"url": this.url, "feedback": parseInt(this.score)/10})
      .subscribe((data) => {
        this.success = "Feedback Successfully Submitted!"
      });
  }

}
