import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../services/transactions.service';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {
  transactionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient, // Inject HttpClient,
    private transactionService: TransactionService 
  ) {
    this.transactionForm = this.formBuilder.group({
      sender: this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        dateOfBirth: [null, Validators.required],
        IDNumber: [null, Validators.required]
      }),
      recipient: this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        accountNumber: [null, Validators.required],
        bank: [null, Validators.required]
      }),
      Amount: [null, Validators.required],
      CurrencyCd: [null, Validators.required],
      Comments: [null]
    });
  }

  onSubmit() {
    console.log(this.transactionForm.value);
    if (this.transactionForm.invalid) {
      console.log("invalid");
      return;
    }

    // Assuming your API endpoint is '/api/transactions'

    // Send POST request to the API with form data
    this.transactionService.addTransaction(this.transactionForm.value)
      .subscribe(
        () => {
          console.log(this.transactionForm.value);
          console.log('Transaction saved successfully');
          // Redirect to /transactions after saving
          this.router.navigate(['/transactions']);
        }
      );
  }

  cancel(){
    this.router.navigate(['/transactions']);
  }
}
