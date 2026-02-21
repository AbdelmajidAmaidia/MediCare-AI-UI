import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  PersonAdd as PersonAddIcon,
  Description as FileIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';

const growthData = [
  { name: 'Week 1', new: 40, cancel: 2 },
  { name: 'Week 2', new: 55, cancel: 4 },
  { name: 'Week 3', new: 80, cancel: 3 },
  { name: 'Week 4', new: 120, cancel: 8 },
];

const activityFeed = [
  { id: 1, user: 'Sarah M.', action: 'booked an appointment', time: '2 mins ago', icon: <ScheduleIcon />, color: 'primary' },
  { id: 2, user: 'Dr. Smith', action: 'uploaded medical license', time: '15 mins ago', icon: <FileIcon />, color: 'warning' },
  { id: 3, user: 'New User', action: 'subscribed to Health+', time: '1 hour ago', icon: <TrendingUpIcon />, color: 'success' },
  { id: 4, user: 'System', action: 'Daily backup completed', time: '3 hours ago', icon: <CheckCircleIcon />, color: 'info' },
  { id: 5, user: 'James W.', action: 'requested password reset', time: '4 hours ago', icon: <PeopleIcon />, color: 'default' },
];

export default function SuperAdminDashboard() {
  return (
    <Box sx={{ p: 3, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: '#1a237e' }}>
        Overview
      </Typography>

      {/* KPI Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Total Revenue</Typography>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>€124,500</Typography>
              <Chip icon={<TrendingUpIcon />} label="+12% this month" color="success" size="small" variant="outlined" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Active Users</Typography>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>10,240</Typography>
              <Typography variant="caption" color="text.secondary">80% Patients • 20% Doctors</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2, bgcolor: '#fff4f4' }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Pending Verifications</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" fontWeight={700} color="error.main">3</Typography>
                <WarningIcon color="error" />
              </Box>
              <Typography variant="caption" color="error.main">Action Required</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>System Status</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Typography variant="h6" fontWeight={600} color="#4caf50">Operational</Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">All systems healthy</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Growth Chart */}
        <Grid item xs={12} lg={8}>
          <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>Growth Analytics</Typography>
              <Box sx={{ height: 350, width: '100%', mt: 2 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1976d2" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#1976d2" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorCancel" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d32f2f" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#d32f2f" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <RechartsTooltip />
                    <Area type="monotone" dataKey="new" stroke="#1976d2" fillOpacity={1} fill="url(#colorNew)" name="New Subscriptions" strokeWidth={2} />
                    <Area type="monotone" dataKey="cancel" stroke="#d32f2f" fillOpacity={1} fill="url(#colorCancel)" name="Cancellations" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Live Activity Feed */}
        <Grid item xs={12} lg={4}>
          <Card elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2, height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" fontWeight={600}>Live Activity</Typography>
                <Chip label="Real-time" size="small" color="success" variant="outlined" sx={{ height: 20, fontSize: '0.7rem' }} />
              </Box>
              <List sx={{ maxHeight: 350, overflow: 'auto' }}>
                {activityFeed.map((item) => (
                  <ListItem key={item.id} alignItems="flex-start" sx={{ px: 0 }}>
                    <ListItemAvatar sx={{ minWidth: 40 }}>
                      <Avatar sx={{ width: 32, height: 32, bgcolor: item.color === 'default' ? 'grey.300' : `${item.color}.light`, color: item.color === 'default' ? 'grey.700' : `${item.color}.main` }}>
                        {item.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body2" component="span">
                          <strong>{item.user}</strong> {item.action}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {item.time}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
