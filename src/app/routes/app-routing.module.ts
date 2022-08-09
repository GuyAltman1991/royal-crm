import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactDetailsComponent } from '../pages/contacts/contact-details/contact-details.component';
import { ContactsPageComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/customers-page/customer-details/customer-details.component';

import { CustomersPageComponent } from '../pages/customers-page/customers-page/customers-page.component';
import { NewCustomerComponent } from '../pages/customers-page/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page/login-page.component';
import { SignupPageComponent } from '../pages/signup-page/signup-page/signup-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path: 'logout-page', component: LoginPageComponent },
  { path: 'signup-page', component: SignupPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'customers/new-customer', component: NewCustomerComponent },
  {
    path: 'customers/customer-details/:id',
    component: CustomerDetailsComponent,
  },
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'contacts/new-contact', component: NewContactComponent },
  { path: 'contacts/contact-details/:id', component: ContactDetailsComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
