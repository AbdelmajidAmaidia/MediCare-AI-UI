import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, NgChartsModule],
  templateUrl: './doctor-dashboard.component.html',
})
export class DoctorDashboardComponent {
  stats = [
    { label: "Today's Appointments", value: '8', icon: 'calendar_today', color: '#1565c0' },
    { label: 'Total Patients', value: '142', icon: 'people', color: '#2e7d32' },
    { label: 'Pending Reviews', value: '5', icon: 'pending_actions', color: '#e65100' },
    { label: 'Monthly Earnings', value: '$12,450', icon: 'account_balance_wallet', color: '#6a1b9a' },
  ];

  todayAppointments = [
    { patient: 'John Smith', age: 45, type: 'Follow-up', time: '9:00 AM', status: 'Arrived' },
    { patient: 'Maria Garcia', age: 32, type: 'New Patient', time: '10:00 AM', status: 'Waiting' },
    { patient: 'David Lee', age: 58, type: 'Consultation', time: '11:00 AM', status: 'Scheduled' },
    { patient: 'Emma Wilson', age: 28, type: 'Follow-up', time: '2:00 PM', status: 'Scheduled' },
    { patient: 'James Brown', age: 67, type: 'Urgent', time: '3:30 PM', status: 'Scheduled' },
  ];

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      { data: [8, 12, 10, 9, 11, 4], label: 'Appointments', backgroundColor: '#1565c0' },
      { data: [2200, 3100, 2800, 2500, 3200, 1100], label: 'Earnings ($)', backgroundColor: '#43a047', yAxisID: 'y1' }
    ]
  };
  chartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, position: 'left' },
      y1: { beginAtZero: true, position: 'right', grid: { drawOnChartArea: false } }
    }
  };
  chartType = 'bar' as const;
}
