import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent {

  billingCycle: 'monthly' | 'yearly' = 'monthly';

  plans = [
    { name: 'Basic', monthly: '₹499', yearly: '₹4999', features: ['Feature 1', 'Feature 2'] },
    { name: 'Standard', monthly: '₹999', yearly: '₹9999', features: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { name: 'Premium', monthly: '₹1999', yearly: '₹19999', features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] },
  ];

  featureList = [
    { name: 'Feature 1' },
    { name: 'Feature 2' },
    { name: 'Feature 3' },
    { name: 'Feature 4' }
  ];

  faqs = [
    { question: 'Can I switch plans later?', answer: 'Yes, you can upgrade or downgrade anytime.' },
    { question: 'Do you offer refunds?', answer: 'Refunds are available within 7 days of purchase.' },
    { question: 'Is there a free trial?', answer: 'We offer a 7-day free trial for new users.' }
  ];

  constructor(private router: Router, private snack: MatSnackBar) {}

  selectPlan(plan: any) {
    this.snack.open(`${plan.name} plan selected!`, 'OK', { duration: 2500 });
    // Navigate to checkout with selected plan (optional)
    this.router.navigate(['/checkout'], { queryParams: { plan: plan.name, billing: this.billingCycle } });
  }

}
