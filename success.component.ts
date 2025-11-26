import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  transactionId: string = 'TXN123456789';
  planName: string = 'Premium Annual Plan';
  validity: string = '25-Nov-2025';

  constructor(
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  continue() {
    this.snackbar.open("Redirecting...", "OK", { duration: 2000 });
    this.router.navigate(['/home']);
  }

  downloadInvoice() {
    this.snackbar.open("Invoice Downloaded ✔", "Close", { duration: 3000 });

    const blob = new Blob(
      ["Invoice Generated. (Sample)"],
      { type: "text/plain" }
    );

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "invoice.txt";
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
