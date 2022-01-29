import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientesV2Component } from './clientes-v2/clientes-v2.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: 'clientes-v2',
    component: ClientesV2Component
  },
  {
    path: 'customer-details',
    component: CustomerDetailsComponent
  },
  {
    path: 'edit-customer',
    component: EditCustomerComponent
  },
  {
    path: 'delete-customer',
    component: DeleteCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
