import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  team = [
    { name: 'Dr. Emily Chen', role: 'Chief Medical Officer', icon: 'person' },
    { name: 'James Wilson', role: 'CTO & Co-Founder', icon: 'person' },
    { name: 'Dr. Aisha Patel', role: 'Head of AI Research', icon: 'person' },
    { name: 'Marcus Johnson', role: 'VP of Operations', icon: 'person' },
  ];
  values = [
    { icon: 'favorite', title: 'Patient-First', desc: 'Every decision we make centers on improving patient outcomes and experience.' },
    { icon: 'lightbulb', title: 'Innovation', desc: 'We constantly push boundaries with cutting-edge AI and medical technology.' },
    { icon: 'verified_user', title: 'Trust & Safety', desc: 'HIPAA compliant with military-grade security protecting your health data.' },
    { icon: 'diversity_3', title: 'Inclusivity', desc: 'Healthcare for everyone, regardless of location or socioeconomic status.' },
  ];
}
