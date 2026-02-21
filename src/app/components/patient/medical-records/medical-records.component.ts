import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';

interface MedicalRecord {
  id: string; type: string; date: string; doctor: string; diagnosis: string; notes: string; status: string;
}

@Component({
  selector: 'app-medical-records',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule, MatExpansionModule, FormsModule],
  templateUrl: './medical-records.component.html',
})
export class MedicalRecordsComponent {
  search = '';
  filterType = 'all';
  records: MedicalRecord[] = [
    { id: 'MR001', type: 'Consultation', date: 'Nov 15, 2024', doctor: 'Dr. Michael Chen', diagnosis: 'Hypertension Stage 1', notes: 'Blood pressure 145/90. Prescribed lisinopril 10mg daily. Follow-up in 4 weeks.', status: 'Final' },
    { id: 'MR002', type: 'Lab Results', date: 'Nov 10, 2024', doctor: 'Dr. Lisa Patel', diagnosis: 'Complete Blood Count - Normal', notes: 'WBC: 7.2, RBC: 4.8, HGB: 14.2, HCT: 42%, PLT: 245K. All within normal ranges.', status: 'Final' },
    { id: 'MR003', type: 'Imaging', date: 'Oct 28, 2024', doctor: 'Dr. James Wright', diagnosis: 'Chest X-Ray - Clear', notes: 'No abnormalities detected. Lungs clear. Heart size normal.', status: 'Final' },
    { id: 'MR004', type: 'Prescription', date: 'Oct 15, 2024', doctor: 'Dr. Sarah Williams', diagnosis: 'Allergic Rhinitis', notes: 'Prescribed cetirizine 10mg. Avoid known allergens. Nasal irrigation recommended.', status: 'Active' },
    { id: 'MR005', type: 'Consultation', date: 'Sep 20, 2024', doctor: 'Dr. Robert Johnson', diagnosis: 'Annual Physical - Healthy', notes: 'All vitals normal. BMI 23.4. Recommended annual flu vaccine. No concerning findings.', status: 'Final' },
  ];

  get filteredRecords() {
    return this.records.filter(r => {
      const matchSearch = r.diagnosis.toLowerCase().includes(this.search.toLowerCase()) || r.doctor.toLowerCase().includes(this.search.toLowerCase());
      const matchType = this.filterType === 'all' || r.type === this.filterType;
      return matchSearch && matchType;
    });
  }
}
