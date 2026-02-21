import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-result-entry',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './lab-result-entry.component.html',
})
export class LabResultEntryComponent {
  resultForm: FormGroup;
  tests = ['Complete Blood Count (CBC)', 'HbA1c', 'Lipid Panel', 'Troponin I', 'Thyroid Function (TSH)', 'Comprehensive Metabolic Panel', 'Urinalysis'];
  
  pendingOrders = [
    { id: 'LT001', patient: 'John Smith', test: 'CBC', ordered: 'Dec 15, 2024 8:30 AM' },
    { id: 'LT002', patient: 'Maria Garcia', test: 'HbA1c', ordered: 'Dec 15, 2024 9:00 AM' },
    { id: 'LT003', patient: 'David Lee', test: 'Troponin I', ordered: 'Dec 15, 2024 9:15 AM' },
  ];

  selectedOrder: any = null;

  constructor(private fb: FormBuilder) {
    this.resultForm = this.fb.group({
      orderId: ['', Validators.required],
      testName: ['', Validators.required],
      result: ['', Validators.required],
      unit: [''],
      referenceRange: [''],
      interpretation: ['', Validators.required],
      notes: [''],
    });
  }

  selectOrder(order: any) {
    this.selectedOrder = order;
    this.resultForm.patchValue({ orderId: order.id, testName: order.test });
  }

  submitResult() {
    if (this.resultForm.valid) {
      console.log('Result submitted:', this.resultForm.value);
    }
  }
}
