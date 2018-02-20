import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  executive="active"
  suite=""
  standard=""
  onClick(event:any){
    this.executive=""
    this.suite=""
    this.standard=""
    if(event.target.name=="suite"){
      this.suite="active"
    }
    if(event.target.name=="executive"){
      this.executive="active"
    }
    if(event.target.name=="standard"){
      this.standard="active"
    }
  }
}
