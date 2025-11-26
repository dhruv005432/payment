import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  // Simulated payment outcome: true = success, false = failed
  paymentSuccess: boolean = true;

  constructor(private router: Router, private snack: MatSnackBar) {}

  ngOnInit(): void {
    this.showSnack("Verifying payment...");

    // Simulate delay for payment processing
    setTimeout(() => {
      if (this.paymentSuccess) {
        this.showSnack("Payment Successful!");
        this.router.navigate(['/success']);
      } else {
        this.showSnack("Payment Failed!");
        this.router.navigate(['/failed']);
      }
    }, 4000); // 4 seconds
  }

  showSnack(message: string) {
    this.snack.open(message, 'OK', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
