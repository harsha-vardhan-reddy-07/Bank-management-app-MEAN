import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './user/home/home.component';
import { LoansComponent } from './user/loans/loans.component';
import { UsersComponent } from './admin/users/users.component';
import { LandingComponent } from './landing/landing.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AllLoansComponent } from './admin/all-loans/all-loans.component';
import { AllTransactionsComponent } from './admin/all-transactions/all-transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { AllDepositsComponent } from './admin/all-deposits/all-deposits.component';
import { DepositsComponent } from './user/deposits/deposits.component';
import { TransactionsComponent } from './user/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoansComponent,
    UsersComponent,
    LandingComponent,
    AdminHomeComponent,
    AllLoansComponent,
    AllTransactionsComponent,
    AllDepositsComponent,
    DepositsComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
