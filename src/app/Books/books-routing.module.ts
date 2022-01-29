import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookListComponent } from './book-list/book-list.component';
import { DeleteBookFireComponent } from './delete-book-fire/delete-book-fire.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookFireComponent } from './edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './edit-book-rtdb/edit-book-rtdb.component';

const routes: Routes = [
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'book-details',
    component: BookDetailsComponent
  },
  {
    path: 'book-details-rtdb',
    component: BookDetailsComponent
  },
  {
    path: 'edit-book-rtdb',
    component: EditBookRtdbComponent
  },
  {
    path: 'edit-book-fire',
    component: EditBookFireComponent
  },
  {
    path: 'delete-book',
    component: DeleteBookComponent
  },
  {
    path: 'delete-book-fire',
    component: DeleteBookFireComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
