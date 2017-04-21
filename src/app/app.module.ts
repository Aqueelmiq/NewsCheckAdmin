import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UseraccessComponent } from './useraccess/useraccess.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AddItemComponent } from './adminpanel/add-item/add-item.component';
import { LookupItemComponent } from './adminpanel/lookup-item/lookup-item.component';
import { NotfoundComponent } from './notfound/notfound.component'

import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavComponent } from './adminpanel/nav/nav.component';
import { ResultareaComponent } from './adminpanel/resultarea/resultarea.component';
import { ResultComponent } from './adminpanel/resultarea/result/result.component';
import { RequestsComponent } from './adminpanel/requests/requests.component';
import { CustomerrequestComponent } from './customerrequest/customerrequest.component';
import { RequestformComponent } from './customerrequest/requestform/requestform.component';
import {DataService} from "./dataservice/data.service";
import {ToasterModule} from "angular2-toaster";
import { InstructionsComponent } from './instructions/instructions.component';
import { HomeComponent } from './home/home.component';
import { AnalysisComponent } from './home/analysis/analysis.component';

const config = {
  apiKey: "AIzaSyDTQms40io3Fu4JboZrtrQXCL0WiV5Ds2I",
  authDomain: "newscheck-e0069.firebaseapp.com",
  databaseURL: "https://newscheck-e0069.firebaseio.com",
  projectId: "newscheck-e0069",
  storageBucket: "newscheck-e0069.appspot.com",
  messagingSenderId: "565544244511"
};

const authConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminpanelComponent },
  { path: 'user',  component: LoginpageComponent },
  { path: 'guide',  component: InstructionsComponent },
  { path: 'tickets',  component: CustomerrequestComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**',    component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UseraccessComponent,
    AdminpanelComponent,
    AddItemComponent,
    LookupItemComponent,
    NotfoundComponent,
    LoginpageComponent,
    NavComponent,
    ResultareaComponent,
    ResultComponent,
    RequestsComponent,
    CustomerrequestComponent,
    RequestformComponent,
    InstructionsComponent,
    HomeComponent,
    AnalysisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToasterModule,
    AngularFireModule.initializeApp(config, authConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
