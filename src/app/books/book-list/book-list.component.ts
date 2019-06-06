import { Component, OnInit } from "@angular/core";

import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";

import * as bookActions from "../state/book.actions";
import * as fromBook from "../state/book.reducer";
import { Book } from "../book.model";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"]
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromBook.AppState>) {}

  ngOnInit() {
    this.store.dispatch(new bookActions.LoadBooks());
    this.books$ = this.store.pipe(select(fromBook.getBooks));
    this.error$ = this.store.pipe(select(fromBook.getError));
  }

  deleteBook(book: Book) {
    if (confirm("Are You Sure You want to Delete the Book?")) {
      this.store.dispatch(new bookActions.DeleteBook(book.id));
    }
  }

  editBook(book: Book) {
    this.store.dispatch(new bookActions.LoadBook(book.id));
  }
}