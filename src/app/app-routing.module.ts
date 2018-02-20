import { HomeComponent } from './home/home.component';
import { ExecutiveComponent } from './executive/executive.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { SuiteComponent } from './suite/suite.component';
import { StandardComponent } from './standard/standard.component';

const routes:Routes=[
  {path:'executive',component:ExecutiveComponent},
  {path:'suite',component:SuiteComponent},
  {path:'standard',component:StandardComponent}
  {path:'',component:HomeComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
