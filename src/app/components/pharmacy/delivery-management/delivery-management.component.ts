import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

interface Delivery { id: string; patient: string; address: string; medications: string; rider: string; dispatchTime: string; eta: string; status: string; }

@Component({
  selector: 'app-delivery-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './delivery-management.component.html',
})
export class DeliveryManagementComponent {
  deliveries: Delivery[] = [
    { id: 'DEL-001', patient: 'Sarah Martinez', address: '123 Oak Street, Apt 4B', medications: 'Lisinopril 10mg x30', rider: 'Alex Johnson', dispatchTime: '10:15 AM', eta: '11:00 AM', status: 'In Transit' },
    { id: 'DEL-002', patient: 'John Smith', address: '456 Maple Ave', medications: 'Metformin 500mg x60', rider: 'Maria Lopez', dispatchTime: '10:30 AM', eta: '11:15 AM', status: 'In Transit' },
    { id: 'DEL-003', patient: 'Emma Wilson', address: '789 Pine Road', medications: 'Cetirizine 10mg x60', rider: 'David Park', dispatchTime: '9:45 AM', eta: '10:30 AM', status: 'Delivered' },
    { id: 'DEL-004', patient: 'Maria Garcia', address: '321 Elm Court', medications: 'Atorvastatin 20mg x30', rider: 'Unassigned', dispatchTime: '-', eta: '-', status: 'Pending' },
  ];

  riderStats = [
    { name: 'Alex Johnson', deliveries: 12, rating: 4.9, status: 'Active' },
    { name: 'Maria Lopez', deliveries: 10, rating: 4.8, status: 'Active' },
    { name: 'David Park', deliveries: 15, rating: 4.7, status: 'Returning' },
  ];
}
