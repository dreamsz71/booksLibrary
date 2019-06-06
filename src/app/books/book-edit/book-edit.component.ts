import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

import { Observable } from "rxjs";

import * as bookActions from "../state/book.actions";
import * as fromBook from "../state/book.reducer";
import { Book } from "../book.model";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromBook.AppState>
  ) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      count: ["", Validators.required],
      author: ["", Validators.required],
      id: null
    })

    const book$: Observable<Book> = this.store.select(
      fromBook.getCurrentBook
    )

    book$.subscribe(currentBook => {
      if (currentBook) {
        this.bookForm.patchValue({
          name: currentBook.name,
          description: currentBook.description,
          count: currentBook.count,
          author: currentBook.author,
          id: currentBook.id
        });
      }
    })
  }

  updateBook() {
    const updatedBook: Book = {
      name: this.bookForm.get("name").value,
      description: this.bookForm.get("description").value,
      count: this.bookForm.get("count").value,
      author: this.bookForm.get("author").value,
      id: this.bookForm.get("id").value
    };

    this.store.dispatch(new bookActions.UpdateBook(updatedBook))
  }

}
