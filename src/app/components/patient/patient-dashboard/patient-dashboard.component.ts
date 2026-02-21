import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, BaseChartDirective],
  templateUrl: './patient-dashboard.component.html',
})
export class PatientDashboardComponent {
  stats = [
    { label: 'Upcoming Appointments', value: '3', icon: 'calendar_today', color: '#1565c0' },
    { label: 'Active Prescriptions', value: '5', icon: 'medication', color: '#2e7d32' },
    { label: 'Unread Lab Results', value: '2', icon: 'science', color: '#e65100' },
    { label: 'Pending Bills', value: '$450', icon: 'receipt', color: '#6a1b9a' },
  ];

  appointments = [
    { doctor: 'Dr. Michael Chen', specialty: 'Cardiologist', date: 'Dec 20, 2024', time: '10:00 AM', status: 'Confirmed' },
    { doctor: 'Dr. Sarah Williams', specialty: 'Dermatologist', date: 'Dec 22, 2024', time: '2:30 PM', status: 'Pending' },
    { doctor: 'Dr. Robert Johnson', specialty: 'General Practitioner', date: 'Jan 5, 2025', time: '9:00 AM', status: 'Confirmed' },
  ];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      { data: [72, 75, 71, 74, 70, 73], label: 'Heart Rate (bpm)', borderColor: '#e53935', backgroundColor: 'rgba(229,57,53,0.1)', fill: true, tension: 0.4 },
      { data: [120, 118, 122, 119, 121, 117], label: 'Systolic BP', borderColor: '#1565c0', backgroundColor: 'rgba(21,101,192,0.1)', fill: true, tension: 0.4 },
    ]
  };
  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: { legend: { display: true } },
    scales: { y: { beginAtZero: false } }
  };
  chartType = 'line' as const;
}
