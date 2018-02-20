import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cse',
  templateUrl: './cse.component.html',
  styleUrls: ['./cse.component.css']
})
export class CseComponent implements OnInit {

  books=[]
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.books=this.booksService.getBooks()
  }

}
