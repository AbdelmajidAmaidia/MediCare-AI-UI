import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  IconButton,
  Avatar,
  Paper,
  Badge,
  Button,
  TextField,
  InputAdornment,
  LinearProgress,
  Stack,
  Tooltip
} from '@mui/material';
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon,
  People as PeopleIcon,
  MedicalServices as MedicalServicesIcon,
  Dns as ServerIcon,
  MoreVert as MoreVertIcon,
  Download as DownloadIcon,
  FilterList as FilterListIcon
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// --- Mock Data ---
const revenueData = [
  { day: '1', gross: 4000, net: 400 },
  { day: '5', gross: 3000, net: 300 },
  { day: '10', gross: 5000, net: 500 },
  { day: '15', gross: 7000, net: 700 },
  { day: '20', gross: 6000, net: 600 },
  { day: '25', gross: 8000, net: 800 },
  { day: '30', gross: 9500, net: 950 },
];

export default function SuperAdminOverview() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', bgcolor: '#f1f5f9' }}>
      
      {/* 1. Top Header */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          bgcolor: 'white', 
          borderBottom: '1px solid #e2e8f0' 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" fontWeight={800} color="#0f172a">Dashboard</Typography>
          <TextField
            size="small"
            placeholder="Search anything..."
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon color="action" fontSize="small" /></InputAdornment>,
            }}
            sx={{ width: 300, bgcolor: '#f8fafc', '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
          />
        </Box>
        
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton>
            <Badge badgeContent={5} color="error">
              <NotificationsIcon color="action" />
            </Badge>
          </IconButton>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ cursor: 'pointer' }}>
            <Avatar 
              alt="Admin Profile" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
              sx={{ width: 32, height: 32 }}
            />
            <Box>
              <Typography variant="subtitle2" fontWeight={600} color="#0f172a">Admin User</Typography>
              <Typography variant="caption" color="text.secondary">Super Admin</Typography>
            </Box>
          </Stack>
        </Stack>
      </Paper>

      <Box sx={{ p: 3, flexGrow: 1, overflowY: 'auto' }}>
        
        {/* 2. Top KPI Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* Card 1: Revenue */}
          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={0} sx={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="caption" fontWeight={600} color="text.secondary" textTransform="uppercase">Total Revenue</Typography>
                  <Box sx={{ bgcolor: '#eff6ff', borderRadius: 1, p: 0.5 }}>
                    <TrendingUpIcon fontSize="small" color="primary" />
                  </Box>
                </Box>
                <Typography variant="h4" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>€124,500</Typography>
                <Typography variant="body2" color="success.main" fontWeight={600} sx={{ display: 'flex', alignItems: 'center' }}>
                  +12% <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 0.5 }}>vs last month</Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2: Active Doctors */}
          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={0} sx={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="caption" fontWeight={600} color="text.secondary" textTransform="uppercase">Active Doctors</Typography>
                  <Box sx={{ bgcolor: '#f0fdf4', borderRadius: 1, p: 0.5 }}>
                    <PeopleIcon fontSize="small" color="success" />
                  </Box>
                </Box>
                <Typography variant="h4" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>85 <Typography component="span" variant="h6" color="text.secondary">/ 120</Typography></Typography>
                <LinearProgress variant="determinate" value={(85/120)*100} color="success" sx={{ borderRadius: 1, height: 6 }} />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>Online now</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3: Patient Consultations */}
          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={0} sx={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="caption" fontWeight={600} color="text.secondary" textTransform="uppercase">Consultations</Typography>
                  <Box sx={{ bgcolor: '#fef3c7', borderRadius: 1, p: 0.5 }}>
                    <MedicalServicesIcon fontSize="small" sx={{ color: '#d97706' }} />
                  </Box>
                </Box>
                <Typography variant="h4" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>1,240</Typography>
                <Typography variant="body2" color="text.secondary" fontWeight={500}>Completed today</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 4: Server Status */}
          <Grid item xs={12} md={6} lg={3}>
            <Card elevation={0} sx={{ height: '100%', border: '1px solid #e2e8f0', borderRadius: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="caption" fontWeight={600} color="text.secondary" textTransform="uppercase">System Status</Typography>
                  <Box sx={{ bgcolor: '#f3e8ff', borderRadius: 1, p: 0.5 }}>
                    <ServerIcon fontSize="small" sx={{ color: '#9333ea' }} />
                  </Box>
                </Box>
                <Typography variant="h4" fontWeight={800} color="#0f172a" sx={{ mb: 1 }}>Operational</Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
                  <Typography variant="body2" color="success.main" fontWeight={600}>99.9% Uptime</Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* 3. Main Chart Section */}
        <Paper elevation={0} sx={{ p: 3, border: '1px solid #e2e8f0', borderRadius: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography variant="h6" fontWeight={800} color="#0f172a">Revenue Growth</Typography>
              <Typography variant="body2" color="text.secondary">Performance over last 30 days</Typography>
            </Box>
            <Button startIcon={<DownloadIcon />} variant="outlined" size="small" color="inherit">
              Export Report
            </Button>
          </Box>
          
          <Box sx={{ height: 400, width: '100%' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="day" 
                  stroke="#94a3b8" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12 }} 
                />
                <YAxis 
                  stroke="#94a3b8" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12 }} 
                  tickFormatter={(value) => `€${value}`}
                />
                <RechartsTooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: 14, fontWeight: 600 }}
                />
                <Legend iconType="circle" />
                <Line 
                  type="monotone" 
                  dataKey="gross" 
                  name="Gross Volume" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 6 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="net" 
                  name="Net Commission" 
                  stroke="#22c55e" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#22c55e', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Paper>

      </Box>
    </Box>
  );
}
