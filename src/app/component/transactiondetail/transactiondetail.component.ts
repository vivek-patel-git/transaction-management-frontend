import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../../services/transactions.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transactiondetail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './transactiondetail.component.html',
  styleUrl: './transactiondetail.component.scss'
})
export class TransactiondetailComponent {
  transactionId!: number;
  transaction: any;
  newComment!: string;
  edit = false;
  addcmnt!: string;

  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.params['id'];
    console.log(id, "id from URL");
    if (id !== null) {
      this.getTransactionDetails(id);
    }

  }

  getTransactionDetails(id: string): void {

    this.transactionService.getTransactionById(id)
      .subscribe(transaction => this.transaction = transaction.data);
  }

  editComment(): void {
    this.newComment = this.transaction.comment;
    this.edit = true;
  }

  saveComment(): void {
    this.errorMessage = null;
    if (this.newComment.trim() === '') {
      this.errorMessage = 'Comment cannot be empty.';
      return; // Do not save if comment is empty
    }

    const alphanumericRegex = /^[a-zA-Z0-9 ]*$/;
    if (!alphanumericRegex.test(this.newComment)) {
      this.errorMessage = 'Comment must be alphanumeric.';
      return; // Do not save if comment contains non-alphanumeric characters
    }

    this.transactionService.editComment(this.transaction.id, this.newComment)
      .subscribe(transactions => this.transaction = transactions);

    console.log('updated transaction', this.transaction);
    this.edit = false;
    window.location.reload();
  }

  cancelEdit(): void {
    this.edit = false;
    this.errorMessage = "";
  }

  goBack(): void {
    this.router.navigate(['/transactions']);
  }
}
