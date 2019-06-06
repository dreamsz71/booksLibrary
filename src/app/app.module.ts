import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import  { StoreDevtoolsModule} from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { RouterModule } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';

//import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
//import { BooksModule } from '../app/books/books.module';

@NgModule({
  declarations: [
    AppComponent,
  //  HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports : [RouterModule]
})
export class AppModule { }
