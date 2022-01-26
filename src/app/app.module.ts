import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BookListComponent } from './Books/book-list/book-list.component';
import { BookDetailsComponent } from './Books/book-details/book-details.component';
import { AddBookComponent } from './Books/add-book/add-book.component';
import { DeleteBookComponent } from './Books/delete-book/delete-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule, USE_DEVICE_LANGUAGE } from '@angular/fire/compat/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';

import { RealTimeDBService } from './services/real-time-db.service';
import { FirestoreService } from './services/firestore.service';

import { AddBookRtdbComponent } from './Books/add-book-rtdb/add-book-rtdb.component';
import { AddBookFireComponent } from './Books/add-book-fire/add-book-fire.component';
import { EditBookFireComponent } from './Books/edit-book-fire/edit-book-fire.component';
import { EditBookRtdbComponent } from './Books/edit-book-rtdb/edit-book-rtdb.component';
import { DeleteBookFireComponent } from './Books/delete-book-fire/delete-book-fire.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientesV2Component } from './Customers/clientes-v2/clientes-v2.component';
import { AddCustomerComponent } from './Customers/add-customer/add-customer.component';
import { EditCustomerComponent } from './Customers/edit-customer/edit-customer.component';
import { CustomerDetailsComponent } from './Customers/customer-details/customer-details.component';
import { DeleteCustomerComponent } from './Customers/delete-customer/delete-customer.component';

// import { SETTINGS as AUTH_SETTINGS } from '@angular/fire/compat/auth';
// import { LANGUAGE_CODE } from '@angular/fire/compat/auth';
// import { PERSISTENCE } from '@angular/fire/compat/auth';
// import { TENANT_ID } from '@angular/fire/compat/auth';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { ListaPrestamosComponent } from './Bookings/lista-prestamos/lista-prestamos.component';
import { CrearPrestamoFireComponent } from './Bookings/crear-prestamo-fire/crear-prestamo-fire.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent,
    AddBookComponent,
    AddBookRtdbComponent,
    AddBookFireComponent,
    EditBookFireComponent,
    EditBookRtdbComponent,
    DeleteBookComponent,
    NavbarComponent,
    FooterComponent,
    DeleteBookFireComponent,
    ClientesV2Component,
    AddCustomerComponent,
    EditCustomerComponent,
    CustomerDetailsComponent,
    DeleteCustomerComponent,
    LoginComponent,
    RegisterComponent,
    PanelControlComponent,
    ListaPrestamosComponent,
    CrearPrestamoFireComponent,
    InicioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'library'), // optionally provide a custom firebase application name
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule
  ],
  providers: [
    RealTimeDBService,
    FirestoreService,

    // { provide: USE_DEVICE_LANGUAGE, useValue: true },
    // { provide: LANGUAGE_CODE, useValue: 'fr' },
    // { provide: PERSISTENCE, useValue: 'session' },
    // { provide: TENANT_ID, useValue: 'tenant-id-app-one' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
