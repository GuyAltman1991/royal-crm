import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactsPageComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';

import { CustomersPageComponent } from '../pages/customers-page/customers-page/customers-page.component';
import { NewCustomerComponent } from '../pages/customers-page/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contacts/new-contact', component: NewContactComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'customers/new-customer', component: NewCustomerComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
