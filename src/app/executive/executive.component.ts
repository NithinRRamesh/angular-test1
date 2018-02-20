import { Component, OnInit } from '@angular/core';
import { error } from 'selenium-webdriver';


const ad=100;
const ch=50;

let customers=[]
@Component({
  selector: 'app-executive',
  templateUrl: './executive.component.html',
  styleUrls: ['./executive.component.css']
})
export class ExecutiveComponent implements OnInit {
  cName:string;
  error=false;
  cId:number;
  cAdults:number;
  cChildren:number;
  cDate:string;
  amount:number=0;

  cust={
    cName:"",
    cId:0,
    cAdults:0,
    cChildren:0,
    amount:0,
    cDate:""
  }
  constructor() { }

  ngOnInit() {
    this.error=false;
  }

  book(){
    this.cust.cAdults=this.cAdults;
    this.cust.cId=this.cId;
    this.cust.cName=this.cName;
    this.cust.cDate=this.cDate;
    this.cust.cChildren=this.cChildren;
    this.amount=this.cAdults*ad+this.cChildren*ch;

    for(let i=0;i<customers.length;i++){
      if(customers[i].cDate==this.cDate){
        this.error = true;
      }
    }

    this.cust.amount=this.amount;
    customers.push(this.cust);
  }
}
