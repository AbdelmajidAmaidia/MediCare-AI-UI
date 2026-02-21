import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-landing-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule],
  templateUrl: './landing-home.component.html',
})
export class LandingHomeComponent {
  features = [
    { icon: 'local_hospital', title: 'Expert Doctors', desc: 'Access board-certified specialists 24/7 from the comfort of your home.' },
    { icon: 'smart_toy', title: 'AI Health Assistant', desc: 'Get instant answers to health questions powered by advanced AI.' },
    { icon: 'science', title: 'Lab Results', desc: 'View and track your lab results securely in real time.' },
    { icon: 'local_pharmacy', title: 'Pharmacy Delivery', desc: 'Get medications delivered to your doorstep within hours.' },
    { icon: 'security', title: 'Secure & Private', desc: 'Your health data is encrypted and HIPAA compliant.' },
    { icon: 'payments', title: 'Transparent Billing', desc: 'No hidden fees. Clear pricing with flexible payment options.' },
  ];
}
