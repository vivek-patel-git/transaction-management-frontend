import { Injectable } from '@angular/core';
import { Observable, of, throwError  } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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

@Injectable({
  providedIn: 'root'
})

export class TransactionService {

  constructor(private httpClient: HttpClient) { }
  
  getTransactions(status:string,startDate:string,endDate:string):Observable<any> {
   return this.httpClient.get(`http://localhost:3000/api/transactions/?status=${status}&startDate=${startDate}&endDate=${endDate}`);
  }

  getTransactionById(id: string): Observable<any> {
    return this.httpClient.get("http://localhost:3000/api/transactions/"+id)
  }

  addTransaction(transaction:object):Observable<any>{
    return this.httpClient.post("http://localhost:3000/api/transactions/",transaction)
  }

  editComment(id:string,newComment:string):Observable<any>{
    return this.httpClient.put("http://localhost:3000/api/transactions/"+id,{"Comments":newComment})
  }
}
