import { Component, OnInit } from '@angular/core';

const ad=1000;
const ch=500;
let customers=[];

@Component({
  selector: 'app-suite',
  templateUrl: './suite.component.html',
  styleUrls: ['./suite.component.css']
})
export class SuiteComponent implements OnInit {
  cName:string;
  cId:number;
  cAdults:number;
  cChildren:number;
  amount:number=0;

  cust={
    cName:"",
    cId:0,
    cAdults:0,
    cChildren:0,
    amount:0
  }
  constructor() { }

  ngOnInit() {
  }

  book(){
    this.cust.cAdults=this.cAdults;
    this.cust.cId=this.cId;
    this.cust.cName=this.cName;
    this.cust.cChildren=this.cChildren;
    this.amount=this.cAdults*ad+this.cChildren*ch;
    this.cust.amount=this.amount;
    customers.push(this.cust);
  }

}
