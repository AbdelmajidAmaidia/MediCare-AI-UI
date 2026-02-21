import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

interface AppUser { id: string; name: string; email: string; role: string; joined: string; status: string; }

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatTableModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule, FormsModule],
  templateUrl: './user-management.component.html',
})
export class UserManagementComponent {
  search = '';
  filterRole = 'all';
  displayedColumns = ['name', 'email', 'role', 'joined', 'status', 'actions'];

  users: AppUser[] = [
    { id: 'U001', name: 'Sarah Martinez', email: 'sarah@example.com', role: 'Patient', joined: 'Jan 15, 2024', status: 'Active' },
    { id: 'U002', name: 'Dr. Michael Chen', email: 'mchen@example.com', role: 'Doctor', joined: 'Feb 20, 2024', status: 'Active' },
    { id: 'U003', name: 'Patricia Wong', email: 'pwong@example.com', role: 'Lab', joined: 'Mar 10, 2024', status: 'Active' },
    { id: 'U004', name: 'Bob Pharmacy', email: 'pharmacy@example.com', role: 'Pharmacy', joined: 'Apr 5, 2024', status: 'Active' },
    { id: 'U005', name: 'James Admin', email: 'admin@example.com', role: 'Admin', joined: 'Jan 1, 2024', status: 'Active' },
    { id: 'U006', name: 'Emily Davis', email: 'emily@example.com', role: 'Patient', joined: 'May 22, 2024', status: 'Inactive' },
    { id: 'U007', name: 'Dr. Lisa Patel', email: 'lpatel@example.com', role: 'Doctor', joined: 'Jun 18, 2024', status: 'Suspended' },
  ];

  get filteredUsers() {
    return this.users.filter(u => {
      const matchSearch = u.name.toLowerCase().includes(this.search.toLowerCase()) || u.email.toLowerCase().includes(this.search.toLowerCase());
      const matchRole = this.filterRole === 'all' || u.role === this.filterRole;
      return matchSearch && matchRole;
    });
  }
}
