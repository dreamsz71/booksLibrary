import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { bookReducer } from "./state/book.reducer";
import { BookEffect } from "./state/book.effects";

import { BookComponent } from "./book/book.component";
import { BookAddComponent } from "./book-add/book-add.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookListComponent } from "./book-list/book-list.component";

const bookRoutes: Routes = [{ path: "", component: BookComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(bookRoutes),
    StoreModule.forFeature("books", bookReducer),
    EffectsModule.forFeature([BookEffect])
  ],
  declarations: [
    BookComponent,
    BookAddComponent,
    BookEditComponent,
    BookListComponent
  ]
})
export class BooksModule {}