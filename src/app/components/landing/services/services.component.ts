import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatChipsModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    { icon: 'video_call', title: 'Telemedicine', desc: 'Consult with licensed doctors via video call, chat, or phone 24/7.', tags: ['Video', 'Chat', '24/7'] },
    { icon: 'science', title: 'Lab Testing', desc: 'Order lab tests online, visit nearest lab or get home collection.', tags: ['Blood Tests', 'Imaging', 'Genetics'] },
    { icon: 'local_pharmacy', title: 'E-Pharmacy', desc: 'Upload prescriptions and get medications delivered in 2-4 hours.', tags: ['Delivery', 'Prescription', 'OTC'] },
    { icon: 'psychology', title: 'Mental Health', desc: 'Confidential therapy sessions with certified mental health professionals.', tags: ['Therapy', 'CBT', 'Support'] },
    { icon: 'monitor_heart', title: 'Remote Monitoring', desc: 'Continuous health monitoring with smart devices and real-time alerts.', tags: ['IoT', 'Wearables', 'Alerts'] },
    { icon: 'smart_toy', title: 'AI Diagnostics', desc: 'AI-powered symptom checker and preliminary diagnosis assistance.', tags: ['AI', 'Symptoms', 'Triage'] },
  ];
}
