import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pay-upi',
  templateUrl: './pay-upi.component.html',
  styleUrls: ['./pay-upi.component.css']
})
export class PayUpiComponent {

  upiId: string = '';
  qrCodeUrl: string = '';

  constructor(private snack: MatSnackBar) {}

  showSnack(message: string) {
    this.snack.open(message, 'OK', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

  generateQr() {
    if (!this.upiId) {
      this.qrCodeUrl = '';
      return;
    }

    const upiUrl = `upi://pay?pa=${this.upiId}&pn=User&cu=INR`;
    this.qrCodeUrl =
      `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;
  }

  enterUpi() {
    if (!this.upiId) {
      this.showSnack("Please enter your UPI ID!");
      return;
    }
    this.showSnack(`UPI ID Entered: ${this.upiId}`);
  }

  scanQR() {
    this.showSnack("Opening QR Scanner...");
  }

  verifyAndPay() {
    if (!this.upiId) {
      this.showSnack("Enter UPI ID before paying!");
      return;
    }

    this.showSnack(`Verifying & Processing Payment for ${this.upiId} ...`);
  }
}
