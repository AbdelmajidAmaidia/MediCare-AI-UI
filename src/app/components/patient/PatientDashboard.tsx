import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button, Chip, Avatar } from '@mui/material';
import {
  CalendarMonth as CalendarIcon,
  LocalPharmacy as PharmacyIcon,
  VideoCall as VideoIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';
import AIChatWidget from './AIChatWidget';

interface PatientDashboardProps {
  patientName: string;
}

export default function PatientDashboard({ patientName }: PatientDashboardProps) {
  const nextAppointment = {
    doctor: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: 'Feb 10, 2026',
    time: '2:30 PM',
    type: 'Teleconsultation',
  };

  const recentActivity = [
    {
      id: 1,
      type: 'Prescription',
      title: 'Blood Pressure Medication',
      doctor: 'Dr. Sarah Johnson',
      date: 'Feb 5, 2026',
    },
    {
      id: 2,
      type: 'Test Result',
      title: 'Blood Test - Complete',
      doctor: 'Lab Department',
      date: 'Feb 3, 2026',
    },
    {
      id: 3,
      type: 'Appointment',
      title: 'Routine Checkup Completed',
      doctor: 'Dr. Michael Chen',
      date: 'Jan 28, 2026',
    },
  ];

  return (
    <Box>
      {/* Welcome Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
          Hello, {patientName}! 👋
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back to your healthcare dashboard
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Next Appointment Card */}
        <Grid item xs={12} md={8}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                    Next Appointment
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Upcoming consultation
                  </Typography>
                </Box>
                <Chip
                  icon={<VideoIcon sx={{ fontSize: 16 }} />}
                  label={nextAppointment.type}
                  color="primary"
                  size="small"
                  sx={{ fontWeight: 500 }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                  {nextAppointment.doctor.split(' ')[1].charAt(0)}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {nextAppointment.doctor}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {nextAppointment.specialty}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <CalendarIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2">{nextAppointment.date}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <TimeIcon sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2">{nextAppointment.time}</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Button variant="contained" fullWidth>
                  Join Video Call
                </Button>
                <Button variant="outlined" fullWidth>
                  Reschedule
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Quick Actions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<CalendarIcon />}
                    sx={{ py: 1.5, justifyContent: 'flex-start' }}
                  >
                    Book Appointment
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<PharmacyIcon />}
                    sx={{ py: 1.5, justifyContent: 'flex-start' }}
                  >
                    Order Medicine
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* AI Chat Widget */}
        <Grid item xs={12} md={4}>
          <AIChatWidget />
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Recent Activity
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {recentActivity.map((activity) => (
                  <Box
                    key={activity.id}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.default',
                    }}
                  >
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Chip label={activity.type} size="small" variant="outlined" />
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                          {activity.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {activity.doctor} • {activity.date}
                      </Typography>
                    </Box>
                    <Button size="small">View</Button>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
