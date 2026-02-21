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
  selector: 'app-lab-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule, BaseChartDirective],
  templateUrl: './lab-dashboard.component.html',
})
export class LabDashboardComponent {
  stats = [
    { label: 'Pending Tests', value: '24', icon: 'hourglass_empty', color: '#e65100' },
    { label: 'Completed Today', value: '47', icon: 'check_circle', color: '#2e7d32' },
    { label: 'Critical Results', value: '3', icon: 'warning', color: '#c62828' },
    { label: 'Avg TAT', value: '2.4 hrs', icon: 'timer', color: '#1565c0' },
  ];

  pendingTests = [
    { id: 'LT001', patient: 'John Smith', test: 'CBC + Differential', priority: 'STAT', received: '8:30 AM', status: 'In Progress' },
    { id: 'LT002', patient: 'Maria Garcia', test: 'HbA1c', priority: 'Routine', received: '9:00 AM', status: 'Pending' },
    { id: 'LT003', patient: 'David Lee', test: 'Troponin I', priority: 'STAT', received: '9:15 AM', status: 'In Progress' },
    { id: 'LT004', patient: 'Emma Wilson', test: 'Lipid Panel', priority: 'Routine', received: '9:30 AM', status: 'Pending' },
  ];

  displayedColumns = ['id', 'patient', 'test', 'priority', 'received', 'status', 'action'];

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
    datasets: [{
      data: [4, 12, 18, 15, 10, 8, 3],
      label: 'Tests Processed',
      backgroundColor: '#1565c0'
    }]
  };
  chartOptions: ChartConfiguration<'bar'>['options'] = { responsive: true };
  chartType = 'bar' as const;
}
