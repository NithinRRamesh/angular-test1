import { BooksService } from './books.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { CseComponent } from './cse/cse.component';
import { CivilComponent } from './civil/civil.component';
import { ExecutiveComponent } from './executive/executive.component';
import { SuiteComponent } from './suite/suite.component';
import { StandardComponent } from './standard/standard.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CseComponent,
    CivilComponent,
    ExecutiveComponent,
    SuiteComponent,
    StandardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
