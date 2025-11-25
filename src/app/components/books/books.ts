import { Component } from '@angular/core';
import { BookInterface } from '../../BookInterface';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {

  newBook: BookInterface = {} as BookInterface;

  books: BookInterface[] = [
    {
      id: 1,
      title: "Java 24 horas",
      author: "Glauco Todesco",
      price: 40.5
    },
    {
      id: 2,
      title: "Angular 24 horas",
      author: "Fernanda Maria",
      price: 36.5
    },
    {
      id: 3,
      title: "AWS 24 horas",
      author: "Kauã Cardoso",
      price: 43.25
    }
  ];

  saveBook() {
    this.newBook.id = this.books.length + 1;
    this.books.push(this.newBook);
    this.newBook = {} as BookInterface;
  }
}
