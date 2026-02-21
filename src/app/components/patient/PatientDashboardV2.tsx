import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  LinearProgress,
  Divider,
} from '@mui/material';
import {
  Chat as ChatIcon,
  VideoCall as VideoIcon,
  TrendingUp as TrendingUpIcon,
  FavoriteBorder as HeartIcon,
  MonitorWeight as WeightIcon,
  Bloodtype as BloodPressureIcon,
  Assignment as AssignmentIcon,
  LocalPharmacy as PharmacyIcon,
  Receipt as ReceiptIcon,
  CheckCircle as CheckIcon,
  Info as InfoIcon,
} from '@mui/icons-material';

interface PatientDashboardV2Props {
  patientName?: string;
  onOpenChat?: () => void;
  onJoinVideo?: () => void;
  onBookAppointment?: () => void;
}

export default function PatientDashboardV2({
  patientName = 'Sarah',
  onOpenChat,
  onJoinVideo,
  onBookAppointment,
}: PatientDashboardV2Props) {
  // Mock data
  const nextAppointment = {
    date: 'Feb 10, 2026',
    time: '10:30 AM',
    doctor: 'Dr. Michael Kumar',
    specialty: 'Cardiologist',
    type: 'Teleconsultation',
    canJoin: true,
  };

  const vitals = [
    {
      label: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      status: 'normal',
      trend: '+2%',
      icon: <BloodPressureIcon />,
      color: '#00C853',
      sparkline: [118, 120, 119, 121, 120],
    },
    {
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      status: 'normal',
      trend: '-3%',
      icon: <HeartIcon />,
      color: '#FF3B30',
      sparkline: [74, 73, 75, 71, 72],
    },
    {
      label: 'Weight',
      value: '68.5',
      unit: 'kg',
      status: 'normal',
      trend: '-0.5kg',
      icon: <WeightIcon />,
      color: '#007AFF',
      sparkline: [69, 68.8, 68.7, 68.6, 68.5],
    },
  ];

  const activities = [
    {
      icon: <AssignmentIcon sx={{ color: '#00C853' }} />,
      title: 'New Lab Result Available',
      subtitle: 'Blood Test - Complete Blood Count',
      time: '2 hours ago',
      action: 'View',
    },
    {
      icon: <PharmacyIcon sx={{ color: '#007AFF' }} />,
      title: 'Prescription Ready for Pickup',
      subtitle: 'Order #1234 - City Pharmacy',
      time: '5 hours ago',
      action: 'Track',
    },
    {
      icon: <ReceiptIcon sx={{ color: '#FF9500' }} />,
      title: 'Invoice Paid Successfully',
      subtitle: 'Consultation with Dr. Kumar - $75.00',
      time: '1 day ago',
      action: 'Receipt',
    },
    {
      icon: <CheckIcon sx={{ color: '#00C853' }} />,
      title: 'Appointment Confirmed',
      subtitle: 'Feb 10 at 10:30 AM with Dr. Kumar',
      time: '2 days ago',
      action: 'Details',
    },
  ];

  const renderSparkline = (data: number[], color: string) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const width = 80;
    const height = 30;
    const points = data
      .map((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        return `${x},${y}`;
      })
      .join(' ');

    return (
      <svg width={width} height={height} style={{ display: 'block' }}>
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <Box>
      {/* Welcome Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1E293B' }}>
          Hello, {patientName}! 👋
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Typography variant="body1" color="text.secondary">
            How are you feeling today?
          </Typography>
          <Button
            variant="outlined"
            size="small"
            startIcon={<ChatIcon />}
            onClick={onOpenChat}
            sx={{ textTransform: 'none', fontWeight: 600 }}
          >
            Chat with AI Assistant
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Next Appointment Card - Full Width */}
        <Grid item xs={12}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, #007AFF 0%, #0D47A1 100%)',
              color: 'white',
              boxShadow: '0 8px 24px rgba(0, 122, 255, 0.3)',
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    bgcolor: '#00C853',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Typography variant="overline" sx={{ letterSpacing: 1.2, fontWeight: 600 }}>
                  UPCOMING APPOINTMENT
                </Typography>
              </Box>

              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'white',
                        color: 'primary.main',
                        fontSize: '2rem',
                        fontWeight: 700,
                        border: '4px solid rgba(255,255,255,0.3)',
                      }}
                    >
                      MK
                    </Avatar>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {nextAppointment.doctor}
                      </Typography>
                      <Typography variant="body1" sx={{ opacity: 0.9, mb: 1 }}>
                        {nextAppointment.specialty}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Chip
                          label={nextAppointment.date}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                        />
                        <Chip
                          label={nextAppointment.time}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                        />
                        <Chip
                          label={nextAppointment.type}
                          size="small"
                          sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      variant="contained"
                      size="large"
                      fullWidth
                      startIcon={<VideoIcon />}
                      onClick={onJoinVideo}
                      disabled={!nextAppointment.canJoin}
                      sx={{
                        bgcolor: 'white',
                        color: '#007AFF',
                        fontWeight: 600,
                        '&:hover': { bgcolor: '#F1F5F9' },
                        '&:disabled': { bgcolor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.7)' },
                      }}
                    >
                      {nextAppointment.canJoin ? 'Join Video Call' : 'Not Yet Available'}
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      sx={{ color: 'white', textTransform: 'none', fontWeight: 500 }}
                    >
                      Reschedule
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Vitals Summary */}
        {vitals.map((vital, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: 2,
                      bgcolor: `${vital.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: vital.color,
                    }}
                  >
                    {vital.icon}
                  </Box>
                  <Chip
                    label={vital.trend}
                    size="small"
                    sx={{
                      bgcolor: vital.trend.startsWith('-') ? '#00C85315' : '#FF950015',
                      color: vital.trend.startsWith('-') ? '#00C853' : '#FF9500',
                      fontWeight: 600,
                    }}
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {vital.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: '#1E293B' }}>
                  {vital.value}{' '}
                  <Typography component="span" variant="body1" color="text.secondary">
                    {vital.unit}
                  </Typography>
                </Typography>
                <Box sx={{ mt: 2 }}>{renderSparkline(vital.sparkline, vital.color)}</Box>
              </CardContent>
            </Card>
          </Grid>
        ))}

        {/* Recent Activity Feed */}
        <Grid item xs={12}>
          <Card sx={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E293B' }}>
                  Recent Activity
                </Typography>
                <Button size="small" sx={{ textTransform: 'none', fontWeight: 600 }}>
                  View All
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {activities.map((activity, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        py: 2,
                        cursor: 'pointer',
                        borderRadius: 2,
                        px: 2,
                        mx: -2,
                        '&:hover': { bgcolor: '#F8FAFC' },
                      }}
                    >
                      <Box
                        sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          bgcolor: '#F1F5F9',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {activity.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5, color: '#1E293B' }}>
                          {activity.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                          {activity.subtitle}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                      <Button size="small" variant="outlined" sx={{ textTransform: 'none', fontWeight: 600 }}>
                        {activity.action}
                      </Button>
                    </Box>
                    {index < activities.length - 1 && <Divider />}
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Card sx={{ bgcolor: '#F8FAFC', boxShadow: 'none' }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
                Quick Actions
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={onBookAppointment}
                    sx={{
                      py: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <VideoIcon /> Book Appointment
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <AssignmentIcon /> View Records
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <PharmacyIcon /> Prescriptions
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      py: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      justifyContent: 'flex-start',
                      gap: 1,
                    }}
                  >
                    <ReceiptIcon /> Billing
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
