import { Component } from '@angular/core';
import { BookInterface } from '../../BookInterface';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {

  book: BookInterface = {
    id: 1,
    title: "Angular",
    author: "Kauã Cardoso",
    price: 50.00
  };


}
