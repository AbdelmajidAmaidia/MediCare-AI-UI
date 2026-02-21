import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

interface PayrollEntry { id: string; name: string; role: string; department: string; baseSalary: number; consultations: number; bonus: number; deductions: number; net: number; status: string; }

@Component({
  selector: 'app-payroll-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatChipsModule, MatFormFieldModule, MatSelectModule, FormsModule],
  templateUrl: './payroll-management.component.html',
})
export class PayrollManagementComponent {
  filterDept = 'all';
  displayedColumns = ['name', 'role', 'baseSalary', 'bonus', 'deductions', 'net', 'status', 'action'];

  entries: PayrollEntry[] = [
    { id: 'PR001', name: 'Dr. Michael Chen', role: 'Cardiologist', department: 'Doctor', baseSalary: 8000, consultations: 86, bonus: 2150, deductions: 1200, net: 8950, status: 'Pending' },
    { id: 'PR002', name: 'Dr. Sarah Williams', role: 'Dermatologist', department: 'Doctor', baseSalary: 7500, consultations: 72, bonus: 1800, deductions: 1100, net: 8200, status: 'Pending' },
    { id: 'PR003', name: 'Dr. Patricia Wong', role: 'Lab Director', department: 'Lab', baseSalary: 6000, consultations: 0, bonus: 500, deductions: 900, net: 5600, status: 'Processed' },
    { id: 'PR004', name: 'Mark Thompson', role: 'Sr. Lab Tech', department: 'Lab', baseSalary: 3800, consultations: 0, bonus: 300, deductions: 570, net: 3530, status: 'Processed' },
    { id: 'PR005', name: 'Pharmacy Manager', role: 'Pharmacy Head', department: 'Pharmacy', baseSalary: 5000, consultations: 0, bonus: 400, deductions: 750, net: 4650, status: 'Pending' },
  ];

  get filteredEntries() {
    return this.filterDept === 'all' ? this.entries : this.entries.filter(e => e.department === this.filterDept);
  }

  get totalNetPayroll() { return this.filteredEntries.reduce((s, e) => s + e.net, 0); }
}
