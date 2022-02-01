import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularMaterialModule } from './modules/angular-material.module';

// import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModuleV2 } from './app-routing-v2.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule} from '@angular/fire/compat/auth';

import { RealTimeDBService } from './services/real-time-db.service';
import { FirestoreService } from './services/firestore.service';
import { AuthService } from './services/auth.service';
import { ClienteV2Service } from './services/cliente-v2.service';
import { RegisterService } from './services/register.service';
import { PrestamosService } from './services/prestamos.service';

// import { BookListComponent } from './Books/book-list/book-list.component';
// import { BookDetailsComponent } from './Books/book-details/book-details.component';
import { AddBookComponent } from './Books/add-book/add-book.component';
import { AddBookRtdbComponent } from './Books/add-book-rtdb/add-book-rtdb.component';
import { AddBookFireComponent } from './Books/add-book-fire/add-book-fire.component';
// import { EditBookFireComponent } from './Books/edit-book-fire/edit-book-fire.component';
// import { EditBookRtdbComponent } from './Books/edit-book-rtdb/edit-book-rtdb.component';
// import { DeleteBookComponent } from './Books/delete-book/delete-book.component';
// import { DeleteBookFireComponent } from './Books/delete-book-fire/delete-book-fire.component';

// import { ClientesV2Component } from './Customers/clientes-v2/clientes-v2.component';
// import { CustomerDetailsComponent } from './Customers/customer-details/customer-details.component';
import { AddCustomerComponent } from './Customers/add-customer/add-customer.component';
// import { EditCustomerComponent } from './Customers/edit-customer/edit-customer.component';
// import { DeleteCustomerComponent } from './Customers/delete-customer/delete-customer.component';

import { ListaPrestamosComponent } from './components/lista-prestamos/lista-prestamos.component';
import { CrearPrestamoFireComponent } from './components/crear-prestamo-fire/crear-prestamo-fire.component';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HomeComponent } from './components/home/home.component';
import { PanelControlComponent } from './components/panel-control/panel-control.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { EffectLoaderService } from './services/effect-loader.service';


@NgModule({
  declarations: [
    // BookListComponent,
    // BookDetailsComponent,
    AddBookComponent,
    AddBookRtdbComponent,
    AddBookFireComponent,
    // EditBookFireComponent,
    // EditBookRtdbComponent,
    // DeleteBookComponent,
    // DeleteBookFireComponent,
    
    // ClientesV2Component,
    // CustomerDetailsComponent,
    AddCustomerComponent,
    // EditCustomerComponent,
    // DeleteCustomerComponent,

    ListaPrestamosComponent,
    CrearPrestamoFireComponent,
    
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    PanelControlComponent,
    NavbarComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // AppRoutingModule,
    AppRoutingModuleV2,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

    AngularMaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'library'), // optionally provide a custom firebase application name
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    RealTimeDBService,
    FirestoreService,
    AuthService,
    RegisterService,
    ClienteV2Service,
    PrestamosService,

    EffectLoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
