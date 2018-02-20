import { Component, OnInit } from '@angular/core';


const ad=200;
const ch=100;
let customers=[]
@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
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
