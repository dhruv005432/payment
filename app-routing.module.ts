import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PaymentHomeComponent } from './payment-home/payment-home.component';
import { PricingComponent } from './pricing/pricing.component';
import { PaymentOptionsComponent } from './payment-options/payment-options.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PayUpiComponent } from './pay-upi/pay-upi.component';
import { PayCardComponent } from './pay-card/pay-card.component';
import { ProcessingComponent } from './processing/processing.component';
import { SuccessComponent } from './success/success.component';
import { FailedComponent } from './failed/failed.component';
import { HistoryComponent } from './history/history.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  // Home / Landing
  { path: '', component: PaymentHomeComponent },

  // Pricing / Plans
  { path: 'pricing', component: PricingComponent },

  // Payment Options
  { path: 'options', component: PaymentOptionsComponent },

  // Checkout page
  { path: 'checkout', component: CheckoutComponent },

  // Payment Methods
  { path: 'upi', component: PayUpiComponent },
  { path: 'card', component: PayCardComponent },

  // Payment Processing
  { path: 'processing', component: ProcessingComponent },

  // Payment Outcome
  { path: 'success', component: SuccessComponent },
  { path: 'failed', component: FailedComponent },

  // History / Records
  { path: 'history', component: HistoryComponent },

  // Support
  { path: 'support', component: SupportComponent },

  // Wildcard: redirect unknown routes to Home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
