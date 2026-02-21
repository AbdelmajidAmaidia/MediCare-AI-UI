import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-booking',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatStepperModule,
    MatDatepickerModule, MatNativeDateModule, ReactiveFormsModule],
  templateUrl: './appointment-booking.component.html',
})
export class AppointmentBookingComponent {
  specialtyForm: FormGroup;
  doctorForm: FormGroup;
  scheduleForm: FormGroup;
  confirmForm: FormGroup;

  specialties = ['Cardiology', 'Dermatology', 'General Practice', 'Neurology', 'Orthopedics', 'Pediatrics', 'Psychiatry', 'Radiology'];

  doctors = [
    { name: 'Dr. Michael Chen', specialty: 'Cardiology', rating: 4.9, available: true },
    { name: 'Dr. Sarah Williams', specialty: 'Dermatology', rating: 4.8, available: true },
    { name: 'Dr. Robert Johnson', specialty: 'General Practice', rating: 4.7, available: false },
    { name: 'Dr. Lisa Patel', specialty: 'Neurology', rating: 4.9, available: true },
  ];

  timeSlots = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '4:00 PM'];
  selectedSlot = '';
  minDate = new Date();

  constructor(private fb: FormBuilder) {
    this.specialtyForm = this.fb.group({ specialty: ['', Validators.required] });
    this.doctorForm = this.fb.group({ doctorName: ['', Validators.required] });
    this.scheduleForm = this.fb.group({ date: ['', Validators.required], timeSlot: ['', Validators.required] });
    this.confirmForm = this.fb.group({ reason: ['', Validators.required], notes: [''] });
  }

  selectSlot(slot: string) {
    this.selectedSlot = slot;
    this.scheduleForm.patchValue({ timeSlot: slot });
  }
}
