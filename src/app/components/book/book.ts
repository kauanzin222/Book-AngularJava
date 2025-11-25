import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookInterface } from '../../BookInterface';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book {
  @Input()
  book: BookInterface = {} as BookInterface;

  @Output()
  saveEmitter = new EventEmitter();

  save() {
    console.log("Saving a book!");

    this.saveEmitter.emit();
  }
}
