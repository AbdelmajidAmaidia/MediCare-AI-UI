import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-brand-guidelines',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule, MatChipsModule],
  templateUrl: './brand-guidelines.component.html',
})
export class BrandGuidelinesComponent {
  colors = [
    { name: 'Primary Blue', hex: '#1565c0', rgb: '21, 101, 192' },
    { name: 'Dark Blue', hex: '#0d47a1', rgb: '13, 71, 161' },
    { name: 'Accent Green', hex: '#00c853', rgb: '0, 200, 83' },
    { name: 'Warning Red', hex: '#d50000', rgb: '213, 0, 0' },
    { name: 'Light Gray', hex: '#f5f5f5', rgb: '245, 245, 245' },
    { name: 'Dark Gray', hex: '#424242', rgb: '66, 66, 66' },
  ];
  fonts = [
    { name: 'Roboto', weights: 'Light (300), Regular (400), Medium (500), Bold (700)', use: 'Primary UI font' },
    { name: 'Roboto Slab', weights: 'Regular (400), Bold (700)', use: 'Headings and display text' },
    { name: 'Roboto Mono', weights: 'Regular (400)', use: 'Code and data display' },
  ];
}
