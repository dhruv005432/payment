import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {

  selectedMonth: string = '';
  selectedStatus: string = '';
  selectedMethod: string = '';

  months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  statuses = ['Success','Pending','Failed'];
  methods = ['Card','UPI','Wallet','Net Banking','Pay Later','EMI'];

  payments = [
    { date: new Date(2025,10,1), amount: '₹499', method: 'Card', status: 'Success' },
    { date: new Date(2025,10,5), amount: '₹999', method: 'UPI', status: 'Pending' },
    { date: new Date(2025,10,10), amount: '₹1999', method: 'Wallet', status: 'Failed' },
    // Add more dummy data
  ];

  constructor(private snack: MatSnackBar) {}

  // Filter payments based on selected filters
  filteredPayments() {
    return this.payments.filter(p => 
      (this.selectedMonth === '' || p.date.toLocaleString('default', { month: 'long' }) === this.selectedMonth) &&
      (this.selectedStatus === '' || p.status === this.selectedStatus) &&
      (this.selectedMethod === '' || p.method === this.selectedMethod)
    );
  }

  // Assign status color classes
  statusClass(status: string) {
    switch(status) {
      case 'Success': return 'bg-success text-white';
      case 'Pending': return 'bg-warning text-dark';
      case 'Failed': return 'bg-danger text-white';
      default: return '';
    }
  }

  downloadInvoice(payment: any) {
    this.snack.open(`Downloading invoice for ${payment.amount} (${payment.date.toLocaleDateString()})`, 'OK', { duration: 2500 });
    // Implement actual download logic here
  }

  downloadAllInvoices() {
    this.snack.open('Downloading all invoices...', 'OK', { duration: 2500 });
    // Implement actual download logic here
  }
}
