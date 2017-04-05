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
import { ResultlistComponent } from './adminpanel/resultarea/resultlist/resultlist.component';
import { ResultComponent } from './adminpanel/resultarea/result/result.component';

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
  { path: 'admin', component: AdminpanelComponent },
  { path: 'user',  component: LoginpageComponent },
  { path: '',
    redirectTo: '/admin',
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
    ResultlistComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config, authConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
