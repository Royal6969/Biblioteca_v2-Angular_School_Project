import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../modules/angular-material.module';
import { BooksRoutingModule } from './books-routing.module';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { EditBookFireComponent } from './edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './edit-book-rtdb/edit-book-rtdb.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { DeleteBookFireComponent } from './delete-book-fire/delete-book-fire.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    EditBookFireComponent,
    EditBookRtdbComponent,
    DeleteBookFireComponent,
    DeleteBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,

    BooksRoutingModule
  ]
})
export class BooksModule { }
