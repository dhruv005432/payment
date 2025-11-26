import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  // Form data
  form = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private snack: MatSnackBar) {}

  // Open chat support
  openChat() {
    this.snack.open("Opening Chat Support...", "OK", {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
    // Here you can implement actual chat window or redirect
  }

  // Submit contact form
  submitForm() {
    if (!this.form.name || !this.form.email || !this.form.message) {
      this.snack.open("Please fill all fields!", "OK", {
        duration: 2500,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      return;
    }

    this.snack.open("Your message has been sent successfully!", "OK", {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });

    // Reset form after submission
    this.form = { name: '', email: '', message: '' };
  }

  // Optional: FAQ click feedback
  faqClick(faqItem: string) {
    this.snack.open(`You clicked on: ${faqItem}`, "OK", {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
