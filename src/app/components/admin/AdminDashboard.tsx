import React from 'react';
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
  Chip,
  Button,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  TrendingUp as TrendingIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  LocalHospital as HospitalIcon,
  Edit as EditIcon,
  Block as BlockIcon,
} from '@mui/icons-material';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'lab' | 'pharmacy';
  status: 'active' | 'inactive';
  joinDate: string;
}

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '2,847', change: '+12%', icon: <PeopleIcon />, color: '#007AFF' },
    { label: 'Monthly Revenue', value: '$48,250', change: '+8%', icon: <MoneyIcon />, color: '#00C853' },
    { label: 'Consultations', value: '1,234', change: '+15%', icon: <HospitalIcon />, color: '#FF9500' },
    { label: 'Growth Rate', value: '23%', change: '+5%', icon: <TrendingIcon />, color: '#FF3B30' },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 35000, consultations: 890 },
    { month: 'Feb', revenue: 42000, consultations: 1020 },
    { month: 'Mar', revenue: 38000, consultations: 950 },
    { month: 'Apr', revenue: 45000, consultations: 1100 },
    { month: 'May', revenue: 48000, consultations: 1180 },
    { month: 'Jun', revenue: 51000, consultations: 1250 },
  ];

  const userGrowthData = [
    { month: 'Jan', patients: 1200, doctors: 45, staff: 30 },
    { month: 'Feb', patients: 1450, doctors: 48, staff: 32 },
    { month: 'Mar', patients: 1680, doctors: 52, staff: 35 },
    { month: 'Apr', patients: 1920, doctors: 55, staff: 38 },
    { month: 'May', patients: 2250, doctors: 58, staff: 40 },
    { month: 'Jun', patients: 2550, doctors: 62, staff: 42 },
  ];

  const users: User[] = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@medicare.com',
      role: 'doctor',
      status: 'active',
      joinDate: 'Jan 2025',
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john.smith@email.com',
      role: 'patient',
      status: 'active',
      joinDate: 'Feb 2026',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      role: 'patient',
      status: 'active',
      joinDate: 'Jan 2026',
    },
    {
      id: 4,
      name: 'Michael Chen',
      email: 'michael.chen@medicare.com',
      role: 'lab',
      status: 'active',
      joinDate: 'Dec 2025',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      email: 'lisa.a@medicare.com',
      role: 'pharmacy',
      status: 'active',
      joinDate: 'Nov 2025',
    },
    {
      id: 6,
      name: 'David Williams',
      email: 'david.w@email.com',
      role: 'patient',
      status: 'inactive',
      joinDate: 'Oct 2025',
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'doctor':
        return 'primary';
      case 'patient':
        return 'default';
      case 'lab':
        return 'secondary';
      case 'pharmacy':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Platform overview and management
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Chip
                      label={stat.change}
                      size="small"
                      color="success"
                      sx={{ height: 20, fontSize: '0.75rem' }}
                    />
                  </Box>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: `${stat.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Revenue Chart */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Revenue & Consultations
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#007AFF" strokeWidth={2} name="Revenue ($)" />
                  <Line type="monotone" dataKey="consultations" stroke="#00C853" strokeWidth={2} name="Consultations" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* User Growth Chart */}
        <Grid item xs={12} lg={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                User Growth by Category
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="patients" fill="#007AFF" name="Patients" />
                  <Bar dataKey="doctors" fill="#00C853" name="Doctors" />
                  <Bar dataKey="staff" fill="#FF9500" name="Staff" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* User Management Table */}
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              User Management
            </Typography>
            <Button variant="contained">Add New User</Button>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 600 }}>User</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Email</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Role</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>Join Date</TableCell>
                  <TableCell sx={{ fontWeight: 600 }} align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 36, height: 36 }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Chip
                        label={user.role.toUpperCase()}
                        size="small"
                        color={getRoleBadgeColor(user.role) as any}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status.toUpperCase()}
                        size="small"
                        color={user.status === 'active' ? 'success' : 'default'}
                      />
                    </TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell align="right">
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" color="error">
                        <BlockIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
