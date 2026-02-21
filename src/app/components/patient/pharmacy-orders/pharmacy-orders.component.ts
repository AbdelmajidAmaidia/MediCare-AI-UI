import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatStepperModule } from '@angular/material/stepper';

interface PharmacyOrder {
  id: string; medication: string; quantity: string; prescribedBy: string; orderedDate: string; status: string; steps: string[];
}

@Component({
  selector: 'app-pharmacy-orders',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatStepperModule],
  templateUrl: './pharmacy-orders.component.html',
})
export class PharmacyOrdersComponent {
  orders: PharmacyOrder[] = [
    { id: 'PO-001', medication: 'Lisinopril 10mg', quantity: '30 tablets', prescribedBy: 'Dr. Michael Chen', orderedDate: 'Dec 15, 2024', status: 'In Transit', steps: ['Order Placed', 'Prescription Verified', 'Dispensed', 'In Transit', 'Delivered'] },
    { id: 'PO-002', medication: 'Cetirizine 10mg', quantity: '60 tablets', prescribedBy: 'Dr. Sarah Williams', orderedDate: 'Dec 10, 2024', status: 'Delivered', steps: ['Order Placed', 'Prescription Verified', 'Dispensed', 'In Transit', 'Delivered'] },
    { id: 'PO-003', medication: 'Vitamin D3 2000IU', quantity: '90 capsules', prescribedBy: 'Dr. Robert Johnson', orderedDate: 'Dec 8, 2024', status: 'Processing', steps: ['Order Placed', 'Prescription Verified', 'Dispensed', 'In Transit', 'Delivered'] },
  ];

  getStatusIndex(status: string): number {
    const steps = ['Order Placed', 'Prescription Verified', 'Dispensed', 'In Transit', 'Delivered'];
    return steps.indexOf(status);
  }

  statusColor(status: string): string {
    const map: Record<string, string> = { 'Delivered': '#e8f5e9', 'In Transit': '#e3f2fd', 'Processing': '#fff3e0' };
    return map[status] || '#f5f5f5';
  }
}
