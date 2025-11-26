import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pay-card',
  templateUrl: './pay-card.component.html',
  styleUrls: ['./pay-card.component.css']
})
export class PayCardComponent {

  card = {
    cardNumber: '',
    expiry: '',
    cvv: '',
    name: '',
    saveCard: false
  };

  constructor(private snack: MatSnackBar) {}

  showSnack(message: string) {
    this.snack.open(message, 'OK', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  payNow() {
    if (!this.card.cardNumber || !this.card.expiry || !this.card.cvv || !this.card.name) {
      this.showSnack('Please fill all card details!');
      return;
    }

    this.showSnack('Processing card payment...');
  }
}
