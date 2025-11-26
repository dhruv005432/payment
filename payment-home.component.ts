import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payment-home',
  templateUrl: './payment-home.component.html',
  styleUrls: ['./payment-home.component.css']
})
export class PaymentHomeComponent {

  constructor(
    private router: Router,
    private snack: MatSnackBar
  ) {}

  showSnack(message: string) {
    this.snack.open(message, 'OK', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  goToPayment() {
    this.showSnack('Redirecting to payment options...');
    this.router.navigate(['/payment-options']);
  }

  goToPlans() {
    this.showSnack('Opening plans...');
    this.router.navigate(['/plans']);
  }

  choosePlan(planName: string) {
    this.showSnack(`${planName} Plan Selected`);
    this.router.navigate(['/checkout'], { queryParams: { plan: planName } });
  }
}
