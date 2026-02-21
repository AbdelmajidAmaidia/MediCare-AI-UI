import React from 'react';
import {
  Tooltip,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  IconButton,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  VideoCall as VideoIcon,
  LocalHospital as HospitalIcon,
  TrendingUp as TrendingIcon,
  People as PeopleIcon,
  CalendarMonth as CalendarIcon,
  Science as ScienceIcon,
  ArrowForward as ArrowIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

export default function DoctorDashboard() {
  const todaySchedule = [
    {
      id: 1,
      time: '9:00 AM',
      patient: 'John Smith',
      type: 'Teleconsultation',
      reason: 'Follow-up - Blood Pressure',
      duration: '30 min',
      status: 'completed',
    },
    {
      id: 2,
      time: '10:00 AM',
      patient: 'Emily Rodriguez',
      type: 'Physical',
      reason: 'Routine Checkup',
      duration: '45 min',
      status: 'in-progress',
    },
    {
      id: 3,
      time: '11:30 AM',
      patient: 'Michael Chen',
      type: 'Teleconsultation',
      reason: 'New Patient Consultation',
      duration: '30 min',
      status: 'upcoming',
    },
    {
      id: 4,
      time: '2:00 PM',
      patient: 'Sarah Johnson',
      type: 'Physical',
      reason: 'Chest Pain Evaluation',
      duration: '30 min',
      status: 'upcoming',
    },
    {
      id: 5,
      time: '3:00 PM',
      patient: 'David Williams',
      type: 'Teleconsultation',
      reason: 'Prescription Renewal',
      duration: '15 min',
      status: 'upcoming',
    },
  ];

  const pendingLabResults = [
    {
      id: 1,
      patient: 'Sarah Johnson',
      test: 'Lipid Panel',
      date: 'Feb 6',
      status: 'critical', // critical, normal, abnormal
    },
    {
      id: 2,
      patient: 'Michael Chen',
      test: 'CBC with Diff',
      date: 'Feb 6',
      status: 'normal',
    },
    {
      id: 3,
      patient: 'David Williams',
      test: 'HbA1c',
      date: 'Feb 5',
      status: 'abnormal',
    },
    {
      id: 4,
      patient: 'Jessica Lee',
      test: 'Urinalysis',
      date: 'Feb 5',
      status: 'normal',
    },
  ];

  const stats = [
    { label: 'Today\'s Patients', value: '12', icon: <PeopleIcon />, color: '#007AFF' },
    { label: 'This Week', value: '48', icon: <CalendarIcon />, color: '#00C853' },
    { label: 'Pending Reviews', value: '5', icon: <TrendingIcon />, color: '#FF9500' },
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
            Doctor Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Welcome back, Dr. Johnson
          </Typography>
        </Box>
        <Button variant="contained" startIcon={<CalendarIcon />}>
          View Full Schedule
        </Button>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {stat.label}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 600 }}>
                      {stat.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
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

      <Grid container spacing={3}>
        {/* Daily Schedule - Main Area */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    Today's Schedule
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Saturday, February 7, 2026
                  </Typography>
                </Box>
                <Chip label="5 Appointments" size="small" color="primary" variant="outlined" />
              </Box>

              <Timeline sx={{ p: 0, m: 0 }}>
                {todaySchedule.map((appointment, index) => (
                  <TimelineItem key={appointment.id}>
                    <TimelineSeparator>
                      <TimelineDot
                        color={
                          appointment.status === 'completed'
                            ? 'success'
                            : appointment.status === 'in-progress'
                            ? 'primary'
                            : 'grey'
                        }
                      />
                      {index < todaySchedule.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent sx={{ pb: 3 }}>
                      <Card
                        variant="outlined"
                        sx={{
                          bgcolor:
                            appointment.status === 'in-progress'
                              ? 'primary.light'
                              : 'background.paper',
                          border:
                            appointment.status === 'in-progress'
                              ? '2px solid'
                              : '1px solid',
                          borderColor:
                            appointment.status === 'in-progress'
                              ? 'primary.main'
                              : 'divider',
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
                              <Avatar sx={{ bgcolor: 'primary.main' }}>
                                {appointment.patient.split(' ')[0].charAt(0)}
                              </Avatar>
                              <Box sx={{ flex: 1 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                                    {appointment.patient}
                                  </Typography>
                                  <Chip
                                    size="small"
                                    label={appointment.type}
                                    icon={
                                      appointment.type === 'Teleconsultation' ? (
                                        <VideoIcon sx={{ fontSize: 16 }} />
                                      ) : (
                                        <HospitalIcon sx={{ fontSize: 16 }} />
                                      )
                                    }
                                    color={
                                      appointment.type === 'Teleconsultation'
                                        ? 'primary'
                                        : 'default'
                                    }
                                  />
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                  {appointment.reason}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                  {appointment.duration}
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ textAlign: 'right' }}>
                              <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                                {appointment.time}
                              </Typography>
                              {appointment.status === 'upcoming' && (
                                <Button size="small" variant="contained">
                                  Start
                                </Button>
                              )}
                              {appointment.status === 'in-progress' && (
                                <Button size="small" variant="contained" color="success">
                                  Continue
                                </Button>
                              )}
                              {appointment.status === 'completed' && (
                                <Chip label="Completed" size="small" color="success" />
                              )}
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        </Grid>

        {/* Pending Lab Results - Side Widget */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Pending Lab Results
                </Typography>
                <Chip label="4 New" color="error" size="small" />
              </Box>
              
              <List sx={{ p: 0 }}>
                {pendingLabResults.map((result, index) => (
                  <React.Fragment key={result.id}>
                    {index > 0 && <Divider component="li" />}
                    <ListItem
                      alignItems="flex-start"
                      secondaryAction={
                        <IconButton edge="end" size="small">
                          <ArrowIcon />
                        </IconButton>
                      }
                      sx={{ px: 0, py: 2 }}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'secondary.light', color: 'secondary.main' }}>
                          <ScienceIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                              {result.test}
                            </Typography>
                            {result.status === 'critical' && (
                              <Tooltip title="Critical Value">
                                <WarningIcon color="error" sx={{ fontSize: 16 }} />
                              </Tooltip>
                            )}
                          </Box>
                        }
                        secondary={
                          <React.Fragment>
                            <Typography variant="body2" component="span" display="block" color="text.primary">
                              {result.patient}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Received {result.date} • {result.status === 'abnormal' ? 'Abnormal' : result.status === 'critical' ? 'Critical' : 'Normal'}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
              
              <Button fullWidth variant="outlined" sx={{ mt: 2 }}>
                View All Results
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
