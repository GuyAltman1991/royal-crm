import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '../pages/about-page/about-page.component';
import { ContactDetailsComponent } from '../pages/contacts/contact-details/contact-details.component';
import { ContactsPageComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { EditContactComponent } from '../pages/contacts/edit-contact/edit-contact.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/customers/customer-details/customer-details.component';

import { CustomersPageComponent } from '../pages/customers/customers-page/customers-page.component';
import { EditCustomerComponent } from '../pages/customers/edit-customer/edit-customer.component';
import { NewCustomerComponent } from '../pages/customers/new-customer/new-customer.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { LoginPageComponent } from '../pages/login-page/login-page/login-page.component';
import { SignupPageComponent } from '../pages/Users/signup-page/signup-page.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'login-page',
    component: LoginPageComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'logout-page',
    component: LoginPageComponent,
  },
  {
    path: 'signup-page',
    component: SignupPageComponent,
    canActivate: [LoggedGuard],
  },
  { path: 'about-page', component: AboutPageComponent },
  {
    path: 'customers',
    component: CustomersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/new-customer',
    component: NewCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/customer-details/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/edit-customer/:id',
    component: EditCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/edit-contact/:id',
    component: EditContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/new-contact',
    component: NewContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/contact-details/:id',
    component: ContactDetailsComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
