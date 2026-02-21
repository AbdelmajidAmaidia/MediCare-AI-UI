import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-financial-admin',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule, MatSelectModule, FormsModule, NgChartsModule],
  templateUrl: './financial-admin.component.html',
})
export class FinancialAdminComponent {
  selectedPeriod = 'monthly';
  summaryCards = [
    { label: 'Gross Revenue', value: '$284,500', icon: 'attach_money', color: '#1565c0', change: '+12.8%' },
    { label: 'Platform Fees', value: '$42,675', icon: 'account_balance', color: '#2e7d32', change: '+12.8%' },
    { label: 'Doctor Payouts', value: '$198,150', icon: 'payments', color: '#e65100', change: '+11.2%' },
    { label: 'Refunds', value: '$5,200', icon: 'undo', color: '#c62828', change: '-2.1%' },
  ];

  displayedColumns = ['category', 'amount', 'percentage', 'trend'];
  breakdown = [
    { category: 'Telemedicine Consultations', amount: '$185,000', percentage: '65%', trend: 'up' },
    { category: 'Lab Test Bookings', amount: '$56,900', percentage: '20%', trend: 'up' },
    { category: 'Pharmacy Orders', amount: '$28,450', percentage: '10%', trend: 'up' },
    { category: 'Subscription Plans', amount: '$14,150', percentage: '5%', trend: 'stable' },
  ];

  chartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      { data: [180000, 195000, 210000, 240000, 265000, 284500], label: 'Gross Revenue', backgroundColor: '#1565c0' },
      { data: [130000, 140000, 155000, 175000, 190000, 198150], label: 'Doctor Payouts', backgroundColor: '#43a047' },
      { data: [27000, 29000, 31500, 36000, 40000, 42675], label: 'Platform Fees', backgroundColor: '#f9a825' },
    ]
  };
  chartOptions: ChartConfiguration<'bar'>['options'] = { responsive: true };
  chartType = 'bar' as const;
}
