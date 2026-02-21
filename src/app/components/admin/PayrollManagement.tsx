import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Avatar,
  Checkbox,
  Toolbar,
  alpha,
} from '@mui/material';
import {
  AttachMoney as MoneyIcon,
  CalendarToday as CalendarIcon,
  People as PeopleIcon,
  Payment as PaymentIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  consultations: number;
  commissionRate: number;
  earnings: number;
  status: 'Paid' | 'Unpaid';
  avatar: string;
}

const mockStaff: StaffMember[] = [
  { id: '1', name: 'Dr. Sarah Wilson', role: 'Cardiologist', consultations: 45, commissionRate: 70, earnings: 3150.00, status: 'Unpaid', avatar: 'S' },
  { id: '2', name: 'Dr. Michael Chen', role: 'General Practitioner', consultations: 62, commissionRate: 65, earnings: 3100.00, status: 'Unpaid', avatar: 'M' },
  { id: '3', name: 'Emily Davis', role: 'Nurse Practitioner', consultations: 30, commissionRate: 40, earnings: 1200.00, status: 'Paid', avatar: 'E' },
  { id: '4', name: 'Dr. James Smith', role: 'Dermatologist', consultations: 28, commissionRate: 70, earnings: 1960.00, status: 'Unpaid', avatar: 'J' },
  { id: '5', name: 'Jessica Lee', role: 'Lab Technician', consultations: 0, commissionRate: 0, earnings: 2400.00, status: 'Unpaid', avatar: 'L' },
];

export default function PayrollManagement() {
  const [selected, setSelected] = useState<string[]>([]);
  const [staffData, setStaffData] = useState<StaffMember[]>(mockStaff);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = staffData.filter(n => n.status === 'Unpaid').map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleProcessPayroll = () => {
    const updatedStaff = staffData.map(staff => 
      selected.includes(staff.id) ? { ...staff, status: 'Paid' as const } : staff
    );
    setStaffData(updatedStaff);
    setSelected([]);
  };

  const stats = [
    { label: 'Total Payout Pending', value: '$10,610.00', icon: <MoneyIcon />, color: '#f44336' },
    { label: 'Next Pay Date', value: 'Feb 15, 2026', icon: <CalendarIcon />, color: '#2196F3' },
    { label: 'Active Staff', value: '12', icon: <PeopleIcon />, color: '#4CAF50' },
  ];

  return (
    <Box sx={{ p: 3, pb: 10 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
        Payroll Management
      </Typography>

      {/* Top Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} md={4} key={stat.label}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                <Box 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: `${stat.color}20`, 
                    color: stat.color,
                    mr: 2
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Main Table */}
      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selected.length > 0 && selected.length < staffData.filter(s => s.status === 'Unpaid').length}
                    checked={staffData.filter(s => s.status === 'Unpaid').length > 0 && selected.length === staffData.filter(s => s.status === 'Unpaid').length}
                    onChange={handleSelectAllClick}
                  />
                </TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell align="center">Total Consultations</TableCell>
                <TableCell align="center">Commission Rate</TableCell>
                <TableCell align="right">Total Earnings</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {staffData.map((row) => {
                const isItemSelected = selected.indexOf(row.id) !== -1;
                const isPaid = row.status === 'Paid';

                return (
                  <TableRow
                    key={row.id}
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    selected={isItemSelected}
                    sx={{ cursor: isPaid ? 'default' : 'pointer', opacity: isPaid ? 0.7 : 1 }}
                    onClick={() => !isPaid && handleClick(row.id)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        disabled={isPaid}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.light' }}>{row.avatar}</Avatar>
                        <Typography variant="body2" fontWeight={600}>{row.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell align="center">{row.consultations}</TableCell>
                    <TableCell align="center">{row.commissionRate > 0 ? `${row.commissionRate}%` : '-'}</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600 }}>${row.earnings.toFixed(2)}</TableCell>
                    <TableCell align="center">
                      <Chip 
                        label={row.status} 
                        color={isPaid ? 'success' : 'warning'} 
                        size="small" 
                        variant={isPaid ? 'outlined' : 'filled'}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Sticky Bottom Action Bar */}
      {selected.length > 0 && (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'auto',
            minWidth: 400,
            zIndex: 1000,
            borderRadius: 4,
            bgcolor: '#1a1a1a',
            color: 'white',
            boxShadow: 6,
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {selected.length} Staff Selected
            </Typography>
            <Button 
              variant="contained" 
              color="success" 
              startIcon={<PaymentIcon />}
              onClick={handleProcessPayroll}
              sx={{ borderRadius: 2 }}
            >
              Process Payroll
            </Button>
          </Toolbar>
        </Paper>
      )}
    </Box>
  );
}
