import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

interface DoctorApplication { id: string; name: string; specialty: string; hospital: string; licenseNo: string; submittedDate: string; documents: string[]; status: string; }

@Component({
  selector: 'app-doctor-verification',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './doctor-verification.component.html',
})
export class DoctorVerificationComponent {
  applications: DoctorApplication[] = [
    { id: 'APP-001', name: 'Dr. James Wilson', specialty: 'Cardiology', hospital: 'City General Hospital', licenseNo: 'MD-2024-001', submittedDate: 'Dec 10, 2024', documents: ['Medical Degree', 'License', 'Insurance'], status: 'Pending' },
    { id: 'APP-002', name: 'Dr. Priya Sharma', specialty: 'Neurology', hospital: 'University Medical Center', licenseNo: 'MD-2024-002', submittedDate: 'Dec 12, 2024', documents: ['Medical Degree', 'License', 'Board Cert'], status: 'Under Review' },
    { id: 'APP-003', name: 'Dr. Carlos Rivera', specialty: 'Orthopedics', hospital: 'Sports Medicine Institute', licenseNo: 'MD-2024-003', submittedDate: 'Dec 14, 2024', documents: ['Medical Degree', 'License'], status: 'Pending' },
  ];

  approve(app: DoctorApplication) { app.status = 'Approved'; }
  reject(app: DoctorApplication) { app.status = 'Rejected'; }
}
