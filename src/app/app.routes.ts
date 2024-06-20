import { Routes } from '@angular/router';
import {TransactionviewComponent} from '../app/component/transactionview/transactionview.component';
import {TransactiondetailComponent} from '../app/component/transactiondetail/transactiondetail.component';
import { AddTransactionComponent } from './component/add-transaction/add-transaction.component';

export const routes: Routes = [
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  { path: 'transactions', component: TransactionviewComponent },
  { path: 'transaction/:id', component: TransactiondetailComponent },
  { path: 'transactions/create', component: AddTransactionComponent}
];
