import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './Books/book-list/book-list.component';
import { BookDetailsComponent } from './Books/book-details/book-details.component';
import { AddBookFireComponent } from './Books/add-book-fire/add-book-fire.component';
import { AddBookRtdbComponent } from './Books/add-book-rtdb/add-book-rtdb.component';
import { EditBookFireComponent } from './Books/edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './Books/edit-book-rtdb/edit-book-rtdb.component';
import { DeleteBookFireComponent } from './Books/delete-book-fire/delete-book-fire.component';
import { DeleteBookComponent } from './Books/delete-book/delete-book.component';

import { ClientesV2Component } from './Customers/clientes-v2/clientes-v2.component';
import { CustomerDetailsComponent } from './Customers/customer-details/customer-details.component';
import { EditCustomerComponent } from './Customers/edit-customer/edit-customer.component';
import { AddCustomerComponent } from './Customers/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './Customers/delete-customer/delete-customer.component';

import { ListaPrestamosComponent } from './components/lista-prestamos/lista-prestamos.component';
import { CrearPrestamoFireComponent } from './components/crear-prestamo-fire/crear-prestamo-fire.component';

import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';

import { AuthGuard } from './guards/guard.guard';


const routes: Routes = [
  {
    path: 'book-list',
    loadChildren: () => import('./Books/books.module').then((m) => m.BooksModule),
    component: BookListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'book-details',
    component: BookDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'book-details-rtdb',
    component: BookDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-book-fire',
    component: AddBookFireComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-book-rtdb',
    component: AddBookRtdbComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-book-rtdb',
    component: EditBookRtdbComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-book-fire',
    component: EditBookFireComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'delete-book',
    component: DeleteBookComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'delete-book-fire',
    component: DeleteBookFireComponent,
    canActivate:[AuthGuard]
  },


  {
    path: 'clientes-v2',
    loadChildren: () => import('./Customers/customers.module').then((m) => m.CustomersModule),
    component: ClientesV2Component,
    canActivate:[AuthGuard]
  },
  {
    path: 'add-customer',
    component: AddCustomerComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-customer',
    component: EditCustomerComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'delete-customer',
    component: DeleteCustomerComponent,
    canActivate:[AuthGuard]
  },


  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'panel-control',
    component: PanelControlComponent,
    canActivate:[AuthGuard]
  },


  {
    path: 'crear-prestamo-fire',
    component: CrearPrestamoFireComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'lista-prestamos',
    component: ListaPrestamosComponent,
    canActivate:[AuthGuard]
  },


  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleV2 { }
