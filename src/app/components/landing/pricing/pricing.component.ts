import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  plans = [
    {
      name: 'Basic', price: 0, period: 'month', color: '#78909c',
      features: ['2 telemedicine visits/month', 'Basic AI symptom checker', 'Appointment scheduling', 'Medical records storage (1GB)', 'Email support'],
      cta: 'Get Started Free'
    },
    {
      name: 'Professional', price: 29, period: 'month', color: '#1565c0', popular: true,
      features: ['Unlimited telemedicine visits', 'Advanced AI diagnostics', 'Priority doctor matching', 'Lab result interpretation', 'Pharmacy delivery (free)', 'Medical records (50GB)', '24/7 phone support'],
      cta: 'Start Pro Trial'
    },
    {
      name: 'Enterprise', price: 99, period: 'month', color: '#4a148c',
      features: ['Everything in Professional', 'Dedicated care coordinator', 'Mental health sessions', 'Home nurse visits (2/month)', 'Family plan (up to 5)', 'EHR integration', 'SLA guarantee'],
      cta: 'Contact Sales'
    },
  ];
}
