import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NavigationService, UserRole } from '../../../services/navigation.service';
import { AuthService } from '../../../services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet,
    MatToolbarModule, MatSidenavModule, MatListModule,
    MatIconModule, MatButtonModule, MatMenuModule,
    MatSelectModule, MatFormFieldModule, FormsModule
  ],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent implements OnInit {
  selectedRole: UserRole = 'patient';
  userName = '';
  navItems: NavItem[] = [];

  private patientNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard/patient/home' },
    { label: 'Appointments', icon: 'calendar_today', route: '/dashboard/patient/appointments' },
    { label: 'Medical Records', icon: 'folder_shared', route: '/dashboard/patient/records' },
    { label: 'AI Assistant', icon: 'smart_toy', route: '/dashboard/patient/ai-chat' },
    { label: 'Billing', icon: 'receipt', route: '/dashboard/patient/billing' },
    { label: 'Pharmacy', icon: 'local_pharmacy', route: '/dashboard/patient/pharmacy' },
    { label: 'Prescriptions', icon: 'medication', route: '/dashboard/patient/prescriptions' },
    { label: 'Pricing Plans', icon: 'card_membership', route: '/dashboard/patient/pricing' },
  ];

  private doctorNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard/doctor/home' },
    { label: 'My Patients', icon: 'people', route: '/dashboard/doctor/patients' },
    { label: 'Appointments', icon: 'calendar_today', route: '/dashboard/doctor/appointments' },
    { label: 'Consultations', icon: 'video_call', route: '/dashboard/doctor/consultations' },
    { label: 'Financials', icon: 'account_balance_wallet', route: '/dashboard/doctor/financial' },
  ];

  private labNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard/lab/home' },
    { label: 'Lab Results', icon: 'science', route: '/dashboard/lab/results' },
    { label: 'Payroll', icon: 'payments', route: '/dashboard/lab/payroll' },
  ];

  private pharmacyNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard/pharmacy/home' },
    { label: 'Delivery', icon: 'delivery_dining', route: '/dashboard/pharmacy/delivery' },
    { label: 'Wallet', icon: 'account_balance_wallet', route: '/dashboard/pharmacy/wallet' },
  ];

  private adminNavItems: NavItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard/admin/home' },
    { label: 'Users', icon: 'manage_accounts', route: '/dashboard/admin/users' },
    { label: 'Verifications', icon: 'verified_user', route: '/dashboard/admin/verifications' },
    { label: 'Financials', icon: 'attach_money', route: '/dashboard/admin/financials' },
    { label: 'Payroll', icon: 'payments', route: '/dashboard/admin/payroll' },
    { label: 'Settings', icon: 'settings', route: '/dashboard/admin/settings' },
  ];

  constructor(
    public router: Router,
    private navService: NavigationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.navService.userRole$.subscribe(role => {
      this.selectedRole = role;
      this.updateNavItems(role);
    });
    this.navService.userName$.subscribe(name => { this.userName = name; });
  }

  updateNavItems(role: UserRole) {
    const map: Record<UserRole, NavItem[]> = {
      patient: this.patientNavItems,
      doctor: this.doctorNavItems,
      lab: this.labNavItems,
      pharmacy: this.pharmacyNavItems,
      admin: this.adminNavItems,
    };
    this.navItems = map[role];
  }

  navigate(route: string) { this.router.navigate([route]); }

  onRoleChange(role: UserRole) { this.navService.setRole(role); }

  logout() { this.authService.logout(); }
}
