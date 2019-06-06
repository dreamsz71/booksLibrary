import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { Store, State, select } from "@ngrx/store";
import * as bookActions from "../state/book.actions";
import * as fromBook from "../state/book.reducer";
import { Book } from "../book.model";

@Component({
  selector: "app-book-add",
  templateUrl: "./book-add.component.html",
  styleUrls: ["./book-add.component.css"]
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<fromBook.AppState>
  ) {}

  ngOnInit() {
    this.bookForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      count: ["", Validators.required],
      author: ["", Validators.required]
    });
  }

  createBook() {
    const newBook: Book = {
      name: this.bookForm.get("name").value,
      description: this.bookForm.get("description").value,
      count: this.bookForm.get("count").value,
      author: this.bookForm.get("author").value
    };

    this.store.dispatch(new bookActions.CreateBook(newBook));

    this.bookForm.reset();
  }
}