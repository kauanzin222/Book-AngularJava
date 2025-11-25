import { Component } from '@angular/core';
import { BookInterface } from '../../BookInterface';

@Component({
  selector: 'app-books',
  standalone: false,
  templateUrl: './books.html',
  styleUrl: './books.css',
})
export class Books {

  book: BookInterface = {} as BookInterface;
  isUpdate: boolean = false;
  idCount: number = 4;

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
    // Se não for Update, faça
    if (!this.isUpdate) {
      this.book.id = this.idCount;
      this.idCount++;
      this.books.push(this.book);
    }

    this.book = {} as BookInterface;
    this.isUpdate = false;
  }

  removeBook(selectedBook: BookInterface) {
    this.books = this.books.filter(book => book != selectedBook);

    /*console.log("id: %d", selectedBook.id);
    console.log('Removing the "%s" book', selectedBook.title);*/
  }

  updateBook(selectedBook: BookInterface) {
    this.book = selectedBook;
    this.isUpdate = true;

    /*console.log("id: %d", selectedBook.id);
    console.log('Updating the "%s" book', selectedBook.title);*/
  }
}
