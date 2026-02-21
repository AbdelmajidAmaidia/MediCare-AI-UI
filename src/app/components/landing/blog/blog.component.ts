import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule, MatChipsModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  posts = [
    { title: 'How AI is Transforming Diagnostics', date: 'Dec 10, 2024', category: 'AI & Health', readTime: '5 min', summary: 'Explore how machine learning models are achieving physician-level accuracy in detecting diseases from medical images.' },
    { title: 'Telemedicine: The Future of Primary Care', date: 'Dec 5, 2024', category: 'Telemedicine', readTime: '4 min', summary: 'With 70% of primary care visits now conducted virtually, we examine what this means for healthcare access.' },
    { title: 'Understanding Your Lab Results', date: 'Nov 28, 2024', category: 'Patient Education', readTime: '6 min', summary: 'A comprehensive guide to reading and interpreting common blood test results and what they mean for your health.' },
    { title: 'Mental Health in the Digital Age', date: 'Nov 20, 2024', category: 'Mental Health', readTime: '7 min', summary: 'Digital therapeutics and online therapy platforms are making mental health support more accessible than ever.' },
    { title: 'Pharmacy Automation: Speed and Safety', date: 'Nov 15, 2024', category: 'Pharmacy', readTime: '3 min', summary: 'How robotic dispensing systems and AI verification are reducing medication errors by 90%.' },
    { title: 'Wearable Tech and Preventive Care', date: 'Nov 10, 2024', category: 'Technology', readTime: '5 min', summary: 'Smartwatches and IoT devices are enabling continuous health monitoring and early detection of conditions.' },
  ];
}
