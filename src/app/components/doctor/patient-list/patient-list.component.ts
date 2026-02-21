import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

interface Patient { id: string; name: string; age: number; gender: string; condition: string; lastVisit: string; nextVisit: string; status: string; }

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, MatButtonModule,
    MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatChipsModule, FormsModule],
  templateUrl: './patient-list.component.html',
})
export class PatientListComponent {
  search = '';
  filterStatus = 'all';
  displayedColumns = ['name', 'age', 'condition', 'lastVisit', 'nextVisit', 'status', 'actions'];

  patients: Patient[] = [
    { id: 'P001', name: 'John Smith', age: 45, gender: 'M', condition: 'Hypertension', lastVisit: 'Nov 15', nextVisit: 'Dec 20', status: 'Active' },
    { id: 'P002', name: 'Maria Garcia', age: 32, gender: 'F', condition: 'Diabetes Type 2', lastVisit: 'Nov 20', nextVisit: 'Dec 22', status: 'Active' },
    { id: 'P003', name: 'David Lee', age: 58, gender: 'M', condition: 'Coronary Artery Disease', lastVisit: 'Oct 28', nextVisit: 'Jan 5', status: 'Critical' },
    { id: 'P004', name: 'Emma Wilson', age: 28, gender: 'F', condition: 'Anxiety Disorder', lastVisit: 'Nov 10', nextVisit: 'Dec 15', status: 'Stable' },
    { id: 'P005', name: 'James Brown', age: 67, gender: 'M', condition: 'COPD', lastVisit: 'Nov 5', nextVisit: 'Dec 10', status: 'Active' },
    { id: 'P006', name: 'Sophia Martinez', age: 41, gender: 'F', condition: 'Rheumatoid Arthritis', lastVisit: 'Oct 15', nextVisit: 'Jan 15', status: 'Stable' },
  ];

  get filteredPatients() {
    return this.patients.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(this.search.toLowerCase()) || p.condition.toLowerCase().includes(this.search.toLowerCase());
      const matchStatus = this.filterStatus === 'all' || p.status === this.filterStatus;
      return matchSearch && matchStatus;
    });
  }
}
