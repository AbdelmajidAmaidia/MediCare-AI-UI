import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

interface Prescription { id: string; medication: string; dosage: string; frequency: string; startDate: string; endDate: string; prescribedBy: string; refillsLeft: number; status: string; }

@Component({
  selector: 'app-prescription-flow',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule, MatDialogModule],
  templateUrl: './prescription-flow.component.html',
})
export class PrescriptionFlowComponent {
  displayedColumns = ['medication', 'dosage', 'frequency', 'prescribedBy', 'refills', 'status', 'actions'];
  prescriptions: Prescription[] = [
    { id: 'RX001', medication: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', startDate: 'Nov 15, 2024', endDate: 'Feb 15, 2025', prescribedBy: 'Dr. Michael Chen', refillsLeft: 2, status: 'Active' },
    { id: 'RX002', medication: 'Cetirizine', dosage: '10mg', frequency: 'Once daily as needed', startDate: 'Oct 15, 2024', endDate: 'Oct 15, 2025', prescribedBy: 'Dr. Sarah Williams', refillsLeft: 11, status: 'Active' },
    { id: 'RX003', medication: 'Vitamin D3', dosage: '2000 IU', frequency: 'Once daily with food', startDate: 'Sep 20, 2024', endDate: 'Mar 20, 2025', prescribedBy: 'Dr. Robert Johnson', refillsLeft: 5, status: 'Active' },
    { id: 'RX004', medication: 'Amoxicillin', dosage: '500mg', frequency: 'Three times daily', startDate: 'Aug 5, 2024', endDate: 'Aug 15, 2024', prescribedBy: 'Dr. Robert Johnson', refillsLeft: 0, status: 'Expired' },
  ];
}
