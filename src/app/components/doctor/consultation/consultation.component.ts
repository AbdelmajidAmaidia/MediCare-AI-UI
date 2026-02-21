import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule,
    MatChipsModule, MatDividerModule, ReactiveFormsModule],
  templateUrl: './consultation.component.html',
})
export class ConsultationComponent {
  notesForm: FormGroup;
  prescriptionForm: FormGroup;

  patient = {
    name: 'John Smith', age: 45, gender: 'Male', blood: 'O+',
    allergies: ['Penicillin', 'Sulfa drugs'],
    vitals: { bp: '145/90', hr: '82 bpm', temp: '98.6°F', weight: '185 lbs', o2: '98%' },
    currentMeds: ['Lisinopril 10mg daily', 'Aspirin 81mg daily']
  };

  constructor(private fb: FormBuilder) {
    this.notesForm = this.fb.group({
      chiefComplaint: ['', Validators.required],
      examination: [''],
      assessment: ['', Validators.required],
      plan: ['', Validators.required],
    });
    this.prescriptionForm = this.fb.group({
      medication: ['', Validators.required],
      dosage: ['', Validators.required],
      frequency: ['', Validators.required],
      duration: ['', Validators.required],
      instructions: [''],
    });
  }

  saveNotes() { console.log('Notes saved:', this.notesForm.value); }
  addPrescription() { console.log('Prescription added:', this.prescriptionForm.value); }
}
