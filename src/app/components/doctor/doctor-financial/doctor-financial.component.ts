import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

interface Transaction { date: string; patient: string; service: string; amount: number; status: string; }

@Component({
  selector: 'app-doctor-financial',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatChipsModule, BaseChartDirective],
  templateUrl: './doctor-financial.component.html',
})
export class DoctorFinancialComponent {
  summaryCards = [
    { label: 'Monthly Revenue', value: '$12,450', icon: 'attach_money', color: '#1565c0', change: '+8.2%' },
    { label: 'Consultations', value: '86', icon: 'calendar_today', color: '#2e7d32', change: '+12' },
    { label: 'Avg per Visit', value: '$144', icon: 'trending_up', color: '#e65100', change: '+$6' },
    { label: 'Pending Payout', value: '$3,200', icon: 'account_balance', color: '#6a1b9a', change: '' },
  ];

  displayedColumns = ['date', 'patient', 'service', 'amount', 'status'];
  transactions: Transaction[] = [
    { date: 'Dec 15', patient: 'John Smith', service: 'Follow-up Consultation', amount: 150, status: 'Paid' },
    { date: 'Dec 14', patient: 'Maria Garcia', service: 'New Patient Visit', amount: 250, status: 'Paid' },
    { date: 'Dec 13', patient: 'David Lee', service: 'Cardiology Consultation', amount: 350, status: 'Pending' },
    { date: 'Dec 12', patient: 'Emma Wilson', service: 'Follow-up Consultation', amount: 150, status: 'Paid' },
    { date: 'Dec 11', patient: 'James Brown', service: 'Urgent Consultation', amount: 400, status: 'Paid' },
  ];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      data: [9200, 10500, 8900, 11200, 11500, 12450],
      label: 'Monthly Revenue ($)',
      borderColor: '#1565c0',
      backgroundColor: 'rgba(21,101,192,0.1)',
      fill: true,
      tension: 0.4
    }]
  };
  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: { legend: { display: false } },
  };
  chartType = 'line' as const;
}
