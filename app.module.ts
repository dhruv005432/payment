import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    PaymentHomeComponent,
    PricingComponent,
    PaymentOptionsComponent,
    CheckoutComponent,
    PayUpiComponent,
    PayCardComponent,
    ProcessingComponent,
    SuccessComponent,
    FailedComponent,
    HistoryComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule,
    MatIconModule

   
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
