import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failed',
  templateUrl: './failed.component.html',
  styleUrls: ['./failed.component.css']
})
export class FailedComponent {

  reason: string = "Transaction Declined by Bank";

  constructor(private snackbar: MatSnackBar, private router: Router) {}

  retryPayment() {
    this.snackbar.open("Retrying Payment...", "OK", { duration: 2000 });
    this.router.navigate(['/payment']);
  }

  contactSupport() {
    this.snackbar.open("Support contacted!", "Close", { duration: 2500 });
    window.location.href = "mailto:support@yourapp.com"; 
  }
}
