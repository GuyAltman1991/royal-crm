import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { ContactsPageComponent } from './pages/contacts/contacts-page/contacts-page.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { HamburgerComponent } from './layout/header/hamburger/hamburger.component';
import { LeftNavBarLinksComponent } from './layout/header/left-nav-bar-links/left-nav-bar-links.component';
import { RightNavBarLinksComponent } from './layout/header/right-nav-bar-links/right-nav-bar-links.component';
import { DisplayUserConectedComponent } from './layout/header/right-nav-bar-links/display-user-conected/display-user-conected.component';
import { DisplayUserDisconectedComponent } from './layout/header/right-nav-bar-links/display-user-disconected/display-user-disconected.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { NavLinkTopComponent } from './layout/header/nav-link-top/nav-link-top.component';
import { RandomNumPipe } from './pipes/random-num.pipe';
import { ParagraphCapitalPipe } from './pipes/paragraph-capital.pipe';
import { SideNavLinkComponent } from './layout/main/side-nav/side-nav-link/side-nav-link.component';
import { CustomersPageComponent } from './pages/customers/customers-page/customers-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './pages/login-page/login-page/login-page.component';
import { NewContactComponent } from './pages/contacts/new-contact/new-contact.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';
import { NewCustomerComponent } from './pages/customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './pages/customers/customer-form/customer-form.component';
import { SignupPageComponent } from './pages/signup-page/signup-page/signup-page.component';
import { ContactDetailsComponent } from './pages/contacts/contact-details/contact-details.component';
import { CustomerDetailsComponent } from './pages/customers/customer-details/customer-details.component';
import { EditContactComponent } from './pages/contacts/edit-contact/edit-contact.component';
import { EditCustomerComponent } from './pages/customers/edit-customer/edit-customer.component';
import { CalculateAgePipe } from './pipes/calculate-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsPageComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    LeftNavBarLinksComponent,
    RightNavBarLinksComponent,
    DisplayUserConectedComponent,
    DisplayUserDisconectedComponent,
    PageHeaderComponent,
    NavLinkTopComponent,
    RandomNumPipe,
    ParagraphCapitalPipe,
    SideNavLinkComponent,
    CustomersPageComponent,
    ErrorPageComponent,
    LoginPageComponent,
    NewContactComponent,
    AboutPageComponent,
    ContactFormComponent,
    NewCustomerComponent,
    CustomerFormComponent,
    SignupPageComponent,
    ContactDetailsComponent,
    CustomerDetailsComponent,
    EditContactComponent,
    EditCustomerComponent,
    CalculateAgePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
