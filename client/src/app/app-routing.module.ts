import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './user/home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoansComponent } from './user/loans/loans.component';
import { AllLoansComponent } from './admin/all-loans/all-loans.component';
import { AllTransactionsComponent } from './admin/all-transactions/all-transactions.component';
import { UsersComponent } from './admin/users/users.component';
import { DepositsComponent } from './user/deposits/deposits.component';
import { AllDepositsComponent } from './admin/all-deposits/all-deposits.component';
import { TransactionsComponent } from './user/transactions/transactions.component';


const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'loans', component: LoansComponent},
  {path: 'deposits', component: DepositsComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'admin', component: AdminHomeComponent},
  {path: 'all-loans', component: AllLoansComponent},
  {path: 'all-deposits', component: AllDepositsComponent},
  {path: 'all-transactions', component: AllTransactionsComponent},
  {path: 'all-users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
