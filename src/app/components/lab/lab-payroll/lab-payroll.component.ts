import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

interface LabEmployee { id: string; name: string; role: string; testsProcessed: number; hoursWorked: number; basePay: number; bonus: number; total: number; status: string; }

@Component({
  selector: 'app-lab-payroll',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule, MatChipsModule],
  templateUrl: './lab-payroll.component.html',
})
export class LabPayrollComponent {
  displayedColumns = ['name', 'role', 'tests', 'hours', 'basePay', 'bonus', 'total', 'status', 'action'];
  employees: LabEmployee[] = [
    { id: 'E001', name: 'Dr. Patricia Wong', role: 'Lab Director', testsProcessed: 0, hoursWorked: 160, basePay: 6000, bonus: 500, total: 6500, status: 'Processed' },
    { id: 'E002', name: 'Mark Thompson', role: 'Senior Technician', testsProcessed: 487, hoursWorked: 168, basePay: 3800, bonus: 300, total: 4100, status: 'Processed' },
    { id: 'E003', name: 'Ana Rodriguez', role: 'Lab Technician', testsProcessed: 342, hoursWorked: 152, basePay: 2800, bonus: 200, total: 3000, status: 'Pending' },
    { id: 'E004', name: 'Kevin Park', role: 'Lab Technician', testsProcessed: 298, hoursWorked: 160, basePay: 2800, bonus: 150, total: 2950, status: 'Pending' },
    { id: 'E005', name: 'Lisa Chen', role: 'Phlebotomist', testsProcessed: 156, hoursWorked: 144, basePay: 2200, bonus: 100, total: 2300, status: 'Pending' },
  ];

  get totalPayroll() { return this.employees.reduce((s, e) => s + e.total, 0); }
  get pendingCount() { return this.employees.filter(e => e.status === 'Pending').length; }
}
