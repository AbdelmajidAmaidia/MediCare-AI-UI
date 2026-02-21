import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-pharmacy-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule, BaseChartDirective],
  templateUrl: './pharmacy-dashboard.component.html',
})
export class PharmacyDashboardComponent {
  stats = [
    { label: 'Orders Today', value: '38', icon: 'shopping_bag', color: '#1565c0' },
    { label: 'Pending Delivery', value: '12', icon: 'delivery_dining', color: '#e65100' },
    { label: 'Low Stock Items', value: '5', icon: 'inventory', color: '#c62828' },
    { label: "Today's Revenue", value: '$4,280', icon: 'attach_money', color: '#2e7d32' },
  ];

  recentOrders = [
    { id: 'ORD-001', patient: 'Sarah Martinez', items: 'Lisinopril 10mg x30', time: '9:15 AM', status: 'Processing' },
    { id: 'ORD-002', patient: 'John Smith', items: 'Metformin 500mg x60', time: '9:30 AM', status: 'Ready' },
    { id: 'ORD-003', patient: 'Maria Garcia', items: 'Atorvastatin 20mg x30', time: '10:00 AM', status: 'Dispatched' },
    { id: 'ORD-004', patient: 'Emma Wilson', items: 'Cetirizine 10mg x60', time: '10:20 AM', status: 'Delivered' },
  ];

  chartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: ['Delivered', 'In Transit', 'Processing', 'Cancelled'],
    datasets: [{ data: [24, 8, 4, 2], backgroundColor: ['#43a047', '#1565c0', '#f9a825', '#e53935'] }]
  };
  chartOptions: ChartConfiguration<'doughnut'>['options'] = { responsive: true, plugins: { legend: { position: 'right' } } };
  chartType = 'doughnut' as const;
}
