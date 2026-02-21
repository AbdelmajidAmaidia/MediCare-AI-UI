import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

interface TimeSlot { time: string; patient?: string; type?: string; available: boolean; }

@Component({
  selector: 'app-doctor-scheduler',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule],
  templateUrl: './doctor-scheduler.component.html',
})
export class DoctorSchedulerComponent {
  weekDays = ['Mon Dec 16', 'Tue Dec 17', 'Wed Dec 18', 'Thu Dec 19', 'Fri Dec 20', 'Sat Dec 21'];
  selectedDay = 'Mon Dec 16';

  schedule: Record<string, TimeSlot[]> = {
    'Mon Dec 16': [
      { time: '9:00 AM', patient: 'John Smith', type: 'Follow-up', available: false },
      { time: '9:30 AM', available: true },
      { time: '10:00 AM', patient: 'Maria Garcia', type: 'New Patient', available: false },
      { time: '10:30 AM', available: true },
      { time: '11:00 AM', patient: 'David Lee', type: 'Consultation', available: false },
      { time: '11:30 AM', available: true },
      { time: '2:00 PM', patient: 'Emma Wilson', type: 'Follow-up', available: false },
      { time: '2:30 PM', available: true },
      { time: '3:00 PM', available: true },
      { time: '3:30 PM', patient: 'James Brown', type: 'Urgent', available: false },
    ],
    'Tue Dec 17': [
      { time: '9:00 AM', available: true },
      { time: '9:30 AM', patient: 'Alice Cooper', type: 'Follow-up', available: false },
      { time: '10:00 AM', available: true },
      { time: '2:00 PM', patient: 'Bob Davis', type: 'Consultation', available: false },
    ],
    'Wed Dec 18': [
      { time: '10:00 AM', patient: 'Carol Evans', type: 'New Patient', available: false },
      { time: '11:00 AM', available: true },
      { time: '3:00 PM', patient: 'Dan Foster', type: 'Follow-up', available: false },
    ],
  };

  get currentSlots(): TimeSlot[] {
    return this.schedule[this.selectedDay] || [
      { time: '9:00 AM', available: true },
      { time: '10:00 AM', available: true },
      { time: '11:00 AM', available: true },
      { time: '2:00 PM', available: true },
      { time: '3:00 PM', available: true },
    ];
  }
}
