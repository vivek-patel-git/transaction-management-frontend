import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from '../../services/transactions.service';
import { RouterModule  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { Router } from '@angular/router';

interface Sender{
  firstName: String,
  lastName: String,
  dateOfBirth: Date,
  IDNumber: String
}

interface Recipient{
  firstName: String,
  lastName: String,
  email: String,
  accountNumber: String,
  bank: String
}

interface Transaction{
  id: number,
  date: Date,
  sender: Sender,
  recipient: Recipient,
  Amount: Number,
  CurrencyCd: String,
  Comments: String,
  status: String
}

@Component({
  selector: 'app-transactionview',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule,RouterModule, MatDatepickerModule],
  templateUrl: './transactionview.component.html',
  styleUrl: './transactionview.component.scss'
})

export class TransactionviewComponent {
  transactions: Transaction[] = [];
  httpClient = inject(HttpClient);
  http = inject(HttpClient);
  startDate: string = '';
  endDate:string="";

  statusArray = [
    { name: 'ALL', value: '' },
    { name: 'COMPLETED', value: 'COMPLETED' },
    { name: 'IN_PROGRESS', value: 'IN_PROGRESS' },
    { name: 'REJECTED', value: 'REJECTED' },
  ];

  selectedStatus: string = "";
  constructor(private transactionService: TransactionService, private router: Router,) { }

  ngOnInit(): void {

    this.transactionsList();
  }

  transactionsList(): void {
    this.transactionService.getTransactions(this.selectedStatus,this.startDate,this.endDate)
      .subscribe(transactions => this.transactions = transactions.data);
  }
  
  resetFilters(){
    window.location.reload();
  }

}
