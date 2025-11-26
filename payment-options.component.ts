import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.css']
})
export class PaymentOptionsComponent {

  toastMessage: string = '';

  constructor(private router: Router) {}

  selectMethod(method: string) {
    this.toastMessage = method + ' selected!';

    // Show Toast / Snackbar
    const toastEl = document.getElementById('liveToast');
    if (toastEl) {
      const toast = new (window as any).bootstrap.Toast(toastEl);
      toast.show();
    }

    // Navigation example
    if (method === 'Card') this.router.navigate(['/pay-card']);
    if (method === 'UPI') this.router.navigate(['/pay-upi']);
    if (method === 'QR') this.router.navigate(['/pay-qr']);
  }
}
