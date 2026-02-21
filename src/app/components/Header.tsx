import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';

interface HeaderProps {
  userRole: 'patient' | 'doctor' | 'lab' | 'pharmacy' | 'admin';
  userName: string;
  onRoleChange: (role: 'patient' | 'doctor' | 'lab' | 'pharmacy' | 'admin') => void;
}

export default function Header({ userRole, userName, onRoleChange }: HeaderProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRoleSelect = (role: 'patient' | 'doctor' | 'lab' | 'pharmacy' | 'admin') => {
    onRoleChange(role);
    handleMenuClose();
  };

  const roleLabels = {
    patient: 'Patient',
    doctor: 'Doctor',
    lab: 'Lab Technician',
    pharmacy: 'Pharmacist',
    admin: 'Administrator',
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid #E0E0E0',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 500 }}>
          {roleLabels[userRole]} Portal
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton sx={{ color: 'text.secondary' }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton sx={{ color: 'text.secondary' }}>
            <SettingsIcon />
          </IconButton>
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
            onClick={handleMenuOpen}
          >
            <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
              {userName.charAt(0)}
            </Avatar>
            <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
              {userName}
            </Typography>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem disabled>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Switch Role (Demo)
              </Typography>
            </MenuItem>
            <MenuItem onClick={() => handleRoleSelect('patient')}>Patient View</MenuItem>
            <MenuItem onClick={() => handleRoleSelect('doctor')}>Doctor View</MenuItem>
            <MenuItem onClick={() => handleRoleSelect('lab')}>Lab Tech View</MenuItem>
            <MenuItem onClick={() => handleRoleSelect('pharmacy')}>Pharmacist View</MenuItem>
            <MenuItem onClick={() => handleRoleSelect('admin')}>Admin View</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
