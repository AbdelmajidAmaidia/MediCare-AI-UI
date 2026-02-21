import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

interface Bill { id: string; date: string; service: string; provider: string; amount: number; insurance: number; owed: number; status: string; }

@Component({
  selector: 'app-billing-history',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatChipsModule],
  templateUrl: './billing-history.component.html',
})
export class BillingHistoryComponent {
  displayedColumns = ['id', 'date', 'service', 'amount', 'insurance', 'owed', 'status', 'actions'];
  bills: Bill[] = [
    { id: 'INV-001', date: 'Nov 15, 2024', service: 'Cardiology Consultation', provider: 'Dr. Michael Chen', amount: 350, insurance: 280, owed: 70, status: 'Paid' },
    { id: 'INV-002', date: 'Nov 10, 2024', service: 'Complete Blood Count', provider: 'City Lab', amount: 125, insurance: 100, owed: 25, status: 'Paid' },
    { id: 'INV-003', date: 'Oct 28, 2024', service: 'Chest X-Ray', provider: 'Imaging Center', amount: 200, insurance: 160, owed: 40, status: 'Pending' },
    { id: 'INV-004', date: 'Oct 15, 2024', service: 'Prescription Refill', provider: 'MediCare Pharmacy', amount: 85, insurance: 0, owed: 85, status: 'Overdue' },
    { id: 'INV-005', date: 'Sep 20, 2024', service: 'Annual Physical', provider: 'Dr. Robert Johnson', amount: 250, insurance: 250, owed: 0, status: 'Paid' },
  ];

  get totalOwed() { return this.bills.reduce((s, b) => b.status !== 'Paid' ? s + b.owed : s, 0); }
  get totalPaid() { return this.bills.reduce((s, b) => b.status === 'Paid' ? s + b.amount : s, 0); }
}
