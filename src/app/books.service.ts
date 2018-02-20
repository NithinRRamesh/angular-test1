import { Injectable } from '@angular/core';

const books=['ABC','DEF','GHI','KLM'];

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return books;
  }
}
