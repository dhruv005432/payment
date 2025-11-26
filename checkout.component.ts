import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  user = { name: '', email: '', mobile: '' };
  plan = { name: 'Premium', price: 999, validity: '31 Dec 2025' };
  couponCode = '';
  discount = 0;
  gst = 18; // %
  totalAmount = 0;

  paymentMethod = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {
    this.calculateTotal();
  }

  calculateTotal() {
    const amountAfterDiscount = this.plan.price - this.discount;
    this.totalAmount = amountAfterDiscount + (amountAfterDiscount * this.gst / 100);
  }

  applyCoupon() {
    if(this.couponCode.toUpperCase() === 'SAVE100') {
      this.discount = 100;
      this.snackBar.open('Coupon applied successfully!', 'Close', { duration: 3000 });
    } else {
      this.discount = 0;
      this.snackBar.open('Invalid coupon code!', 'Close', { duration: 3000 });
    }
    this.calculateTotal();
  }

  payNow() {
    if(!this.user.name || !this.user.email || !this.user.mobile || !this.paymentMethod) {
      this.snackBar.open('Please fill all details and select payment method!', 'Close', { duration: 3000 });
      return;
    }

    // Redirect to processing page
    this.router.navigate(['/processing'], { queryParams: { status: 'success' } });
  }

}
