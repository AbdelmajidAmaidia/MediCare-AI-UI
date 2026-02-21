import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
  Typography,
} from '@mui/material';
import {
  Home as HomeIcon,
  CalendarMonth as CalendarIcon,
  MedicalServices as MedicalIcon,
  SmartToy as AiIcon,
  LocalPharmacy as PharmacyIcon,
  Receipt as BillingIcon,
  People as PeopleIcon,
  Science as ScienceIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Star as StarIcon,
  AccountBalanceWallet as WalletIcon,
  VerifiedUser as VerifiedIcon,
  AttachMoney as MoneyIcon,
  Settings as SettingsIcon,
  Lock as LockIcon,
} from '@mui/icons-material';

interface SidebarProps {
  userRole: 'patient' | 'doctor' | 'lab' | 'pharmacy' | 'admin';
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = {
  patient: [
    { text: 'Home', icon: <HomeIcon />, page: 'patient-home' },
    { text: 'My Appointments', icon: <CalendarIcon />, page: 'patient-appointments' },
    { text: 'Medical Record', icon: <MedicalIcon />, page: 'patient-records' },
    { text: 'AI Assistant', icon: <AiIcon />, page: 'patient-ai' },
    { text: 'Pharmacy Orders', icon: <PharmacyIcon />, page: 'patient-pharmacy' },
    { text: 'New Prescription', icon: <AssignmentIcon />, page: 'patient-prescriptions' },
    { text: 'Billing', icon: <BillingIcon />, page: 'patient-billing' },
    { text: 'Locked Result (Demo)', icon: <LockIcon />, page: 'patient-locked-result' },
    { text: 'Subscription', icon: <StarIcon />, page: 'patient-subscription' },
  ],
  doctor: [
    { text: 'Dashboard', icon: <DashboardIcon />, page: 'doctor-dashboard' },
    { text: 'Patients', icon: <PeopleIcon />, page: 'doctor-patients' },
    { text: 'Appointments', icon: <CalendarIcon />, page: 'doctor-appointments' },
    { text: 'Consultations', icon: <MedicalIcon />, page: 'doctor-consultations' },
    { text: 'AI Diagnostic Support', icon: <AiIcon />, page: 'doctor-ai' },
    { text: 'Wallet', icon: <WalletIcon />, page: 'doctor-wallet' },
  ],
  lab: [
    { text: 'Dashboard', icon: <DashboardIcon />, page: 'lab-dashboard' },
    { text: 'Test Requests', icon: <ScienceIcon />, page: 'lab-requests' },
    { text: 'Results', icon: <AssignmentIcon />, page: 'lab-results' },
    { text: 'My Payroll', icon: <WalletIcon />, page: 'lab-payroll' },
  ],
  pharmacy: [
    { text: 'Dashboard', icon: <DashboardIcon />, page: 'pharmacy-dashboard' },
    { text: 'Incoming Orders', icon: <PharmacyIcon />, page: 'pharmacy-orders' },
    { text: 'Delivery', icon: <AssignmentIcon />, page: 'pharmacy-delivery' },
    { text: 'Business Wallet', icon: <WalletIcon />, page: 'pharmacy-wallet' },
  ],
  admin: [
    { text: 'Dashboard', icon: <DashboardIcon />, page: 'admin-dashboard' },
    { text: 'User Management', icon: <PeopleIcon />, page: 'admin-users' },
    { text: 'Verifications', icon: <VerifiedIcon />, page: 'admin-verifications' },
    { text: 'Review Verification (Demo)', icon: <VerifiedIcon />, page: 'admin-verification-detail' },
    { text: 'Financials', icon: <MoneyIcon />, page: 'admin-financials' },
    { text: 'Payroll', icon: <BillingIcon />, page: 'admin-payroll' },
    { text: 'Platform Settings', icon: <SettingsIcon />, page: 'admin-settings' },
  ],
};

const drawerWidth = 260;

export default function Sidebar({ userRole, currentPage, onPageChange }: SidebarProps) {
  const items = menuItems[userRole];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid #E0E0E0',
        },
      }}
    >
      <Toolbar sx={{ px: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MedicalIcon sx={{ color: 'primary.main', fontSize: 32 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
            MediCare
          </Typography>
        </Box>
      </Toolbar>
      <List sx={{ px: 1, pt: 2 }}>
        {items.map((item) => (
          <ListItem key={item.page} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={currentPage === item.page}
              onClick={() => onPageChange(item.page)}
              sx={{
                borderRadius: 2,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                  '& .MuiListItemIcon-root': {
                    color: 'white',
                  },
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 40,
                  color: currentPage === item.page ? 'white' : 'text.secondary',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
