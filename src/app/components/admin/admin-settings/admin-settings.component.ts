import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-settings',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule,
    MatDividerModule, MatTabsModule, ReactiveFormsModule, FormsModule],
  templateUrl: './admin-settings.component.html',
})
export class AdminSettingsComponent {
  generalForm: FormGroup;
  notificationForm: FormGroup;
  featureFlags = [
    { label: 'AI Symptom Checker', enabled: true },
    { label: 'Telemedicine Video Calls', enabled: true },
    { label: 'Pharmacy Home Delivery', enabled: true },
    { label: 'Lab Home Collection', enabled: false },
    { label: 'Prescription Auto-Refill', enabled: false },
    { label: 'Insurance Integration', enabled: true },
  ];

  constructor(private fb: FormBuilder) {
    this.generalForm = this.fb.group({
      platformName: ['MediCare AI', Validators.required],
      supportEmail: ['support@medicare-ai.com', [Validators.required, Validators.email]],
      maxAppointmentsPerDay: [20, [Validators.required, Validators.min(1)]],
      consultationFeePercent: [15, [Validators.required, Validators.min(0), Validators.max(50)]],
      timezone: ['UTC', Validators.required],
    });
    this.notificationForm = this.fb.group({
      emailNotifications: [true],
      smsNotifications: [true],
      pushNotifications: [false],
      appointmentReminders: [true],
      paymentAlerts: [true],
    });
  }

  saveGeneral() { console.log('General settings saved:', this.generalForm.value); }
  saveNotifications() { console.log('Notification settings saved:', this.notificationForm.value); }
}
