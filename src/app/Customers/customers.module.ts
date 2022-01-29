import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { AngularMaterialModule } from '../modules/angular-material.module';

import { ClientesV2Component } from './clientes-v2/clientes-v2.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';

@NgModule({
  declarations: [
    ClientesV2Component,
    CustomerDetailsComponent,
    EditCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,

    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
