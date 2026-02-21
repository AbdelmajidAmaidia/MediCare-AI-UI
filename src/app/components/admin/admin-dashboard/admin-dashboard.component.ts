import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule, NgChartsModule],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent {
  stats = [
    { label: 'Total Users', value: '52,841', icon: 'people', color: '#1565c0', change: '+1,240 this month' },
    { label: 'Active Doctors', value: '2,156', icon: 'local_hospital', color: '#2e7d32', change: '+34 this month' },
    { label: 'Consultations Today', value: '1,847', icon: 'video_call', color: '#e65100', change: '+5.2%' },
    { label: 'Platform Revenue', value: '$284K', icon: 'attach_money', color: '#6a1b9a', change: '+12.8% MoM' },
  ];

  recentAlerts = [
    { type: 'warning', message: 'Dr. James Park - License renewal pending', time: '2 hrs ago' },
    { type: 'error', message: 'Payment gateway downtime - 3 failed transactions', time: '4 hrs ago' },
    { type: 'info', message: 'System update scheduled for Dec 20 2AM UTC', time: '6 hrs ago' },
    { type: 'success', message: '50 new doctor verifications completed', time: '1 day ago' },
  ];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      { data: [38000, 42000, 39000, 48000, 51000, 52841], label: 'Total Users', borderColor: '#1565c0', backgroundColor: 'rgba(21,101,192,0.1)', fill: true, tension: 0.4 },
      { data: [180000, 195000, 210000, 240000, 265000, 284000], label: 'Revenue ($)', borderColor: '#43a047', backgroundColor: 'rgba(67,160,71,0.1)', fill: true, tension: 0.4, yAxisID: 'y1' }
    ]
  };
  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    scales: { y: { position: 'left' }, y1: { position: 'right', grid: { drawOnChartArea: false } } }
  };
  chartType = 'line' as const;
}
