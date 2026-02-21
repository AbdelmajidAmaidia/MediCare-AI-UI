import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  IconButton,
  Grid,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Divider,
  Menu,
  MenuItem,
  ButtonGroup,
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  VideoCameraFront as VideoIcon,
  Person as PersonIcon,
  Block as BlockIcon,
  MoreVert as MoreVertIcon,
  CheckCircle as CheckCircleIcon,
  NotificationsActive as EmergencyIcon,
  AccessTime as TimeIcon,
  Event as EventIcon,
  Phone as PhoneIcon,
  Close as CloseIcon,
  PlayArrow as StartIcon,
} from '@mui/icons-material';

// --- Types & Mock Data ---

type AppointmentType = 'video' | 'physical' | 'blocked';

interface Appointment {
  id: string;
  patientName: string;
  type: AppointmentType;
  startTime: number; // Hour (e.g., 9.5 for 9:30)
  duration: number; // Hours
  day: number; // 0=Mon, 1=Tue...
  reason?: string;
  status?: 'confirmed' | 'checked-in' | 'pending';
}

const appointments: Appointment[] = [
  { id: '1', patientName: 'Sarah Jenkins', type: 'video', startTime: 9, duration: 0.5, day: 0, reason: 'Follow-up', status: 'confirmed' },
  { id: '2', patientName: 'Michael Chen', type: 'physical', startTime: 10, duration: 1, day: 0, reason: 'Annual Checkup', status: 'checked-in' },
  { id: '3', patientName: 'Lunch Break', type: 'blocked', startTime: 12, duration: 1, day: 0 },
  { id: '4', patientName: 'Emma Wilson', type: 'video', startTime: 14, duration: 0.5, day: 0, reason: 'Headache', status: 'confirmed' },
  { id: '5', patientName: 'James Rodriguez', type: 'physical', startTime: 9.5, duration: 0.5, day: 1, reason: 'Back Pain', status: 'confirmed' },
  { id: '6', patientName: 'Team Meeting', type: 'blocked', startTime: 8, duration: 1, day: 2 },
  { id: '7', patientName: 'Linda Kim', type: 'video', startTime: 11, duration: 0.5, day: 2, reason: 'Lab Results', status: 'confirmed' },
];

const waitingRoom = [
  { id: 1, name: 'Michael Chen', time: '10:00 AM', status: 'Checked In', avatar: 'M' },
  { id: 2, name: 'Amanda Low', time: '10:30 AM', status: 'Arrived', avatar: 'A' },
];

const requests = [
  { id: 1, name: 'John Doe', type: 'Emergency Request', time: 'Just now', reason: 'Severe allergic reaction' },
];

const days = ['Mon 10', 'Tue 11', 'Wed 12', 'Thu 13', 'Fri 14'];
const timeSlots = Array.from({ length: 12 }, (_, i) => i + 8); // 8:00 to 19:00

// --- Components ---

export default function DoctorScheduler() {
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [selectedAppt, setSelectedAppt] = useState<Appointment | null>(null);

  // Helper to position cards
  const getPosition = (startTime: number, duration: number) => {
    const startOffset = (startTime - 8) * 60; // pixels from top (assuming 60px per hour)
    const height = duration * 60;
    return { top: startOffset, height };
  };

  const handleApptClick = (appt: Appointment) => {
    if (appt.type !== 'blocked') {
      setSelectedAppt(appt);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f4f6f8', overflow: 'hidden' }}>
      
      {/* Main Calendar Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%', borderRight: '1px solid #e0e0e0' }}>
        
        {/* Header */}
        <Paper elevation={0} sx={{ p: 2, borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h5" fontWeight={700} color="primary">February 2026</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton size="small"><ChevronLeftIcon /></IconButton>
              <IconButton size="small"><ChevronRightIcon /></IconButton>
            </Stack>
            <Button variant="outlined" size="small">Today</Button>
          </Stack>

          <Stack direction="row" spacing={2}>
            <ButtonGroup variant="outlined" size="small">
              <Button variant={view === 'day' ? 'contained' : 'outlined'} onClick={() => setView('day')}>Day</Button>
              <Button variant={view === 'week' ? 'contained' : 'outlined'} onClick={() => setView('week')}>Week</Button>
              <Button variant={view === 'month' ? 'contained' : 'outlined'} onClick={() => setView('month')}>Month</Button>
            </ButtonGroup>
            <Button variant="contained" color="secondary" startIcon={<BlockIcon />}>
              Block Time
            </Button>
          </Stack>
        </Paper>

        {/* Calendar Grid (Scrollable) */}
        <Box sx={{ flexGrow: 1, overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
          
          {/* Days Header */}
          <Box sx={{ display: 'flex', borderBottom: '1px solid #e0e0e0', minHeight: 50, bgcolor: '#fff', position: 'sticky', top: 0, zIndex: 1 }}>
            <Box sx={{ width: 60, flexShrink: 0, borderRight: '1px solid #e0e0e0' }} /> {/* Time column header spacer */}
            {days.map((day, index) => (
              <Box key={index} sx={{ flex: 1, borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="subtitle2" fontWeight={600} color={index === 0 ? 'primary' : 'text.primary'}>
                  {day}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Time Slots & Appointments */}
          <Box sx={{ display: 'flex', flexGrow: 1, position: 'relative' }}>
            
            {/* Time Labels Column */}
            <Box sx={{ width: 60, flexShrink: 0, borderRight: '1px solid #e0e0e0', bgcolor: '#fff' }}>
              {timeSlots.map((time) => (
                <Box key={time} sx={{ height: 60, borderBottom: '1px solid #f0f0f0', pr: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ transform: 'translateY(-8px)' }}>
                    {time}:00
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Days Columns */}
            {days.map((day, dayIndex) => (
              <Box key={dayIndex} sx={{ flex: 1, borderRight: '1px solid #e0e0e0', position: 'relative', bgcolor: '#fff' }}>
                {/* Grid Lines */}
                {timeSlots.map((time) => (
                  <Box key={time} sx={{ height: 60, borderBottom: '1px solid #f9f9f9' }} />
                ))}

                {/* Appointment Cards */}
                {appointments.filter(appt => appt.day === dayIndex).map((appt) => {
                  const pos = getPosition(appt.startTime, appt.duration);
                  const isVideo = appt.type === 'video';
                  const isBlocked = appt.type === 'blocked';
                  
                  return (
                    <Paper
                      key={appt.id}
                      onClick={() => handleApptClick(appt)}
                      elevation={selectedAppt?.id === appt.id ? 4 : 1}
                      sx={{
                        position: 'absolute',
                        top: pos.top,
                        height: pos.height - 2, // gap
                        left: 4,
                        right: 4,
                        bgcolor: isBlocked ? '#eeeeee' : isVideo ? '#e3f2fd' : '#e8f5e9',
                        borderLeft: `4px solid ${isBlocked ? '#9e9e9e' : isVideo ? '#1976d2' : '#2e7d32'}`,
                        p: 1,
                        cursor: isBlocked ? 'default' : 'pointer',
                        overflow: 'hidden',
                        transition: 'all 0.2s',
                        '&:hover': {
                          zIndex: 5,
                          boxShadow: 3,
                        }
                      }}
                    >
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        {isBlocked ? null : isVideo ? <VideoIcon fontSize="small" color="primary" sx={{ fontSize: 16 }} /> : <PersonIcon fontSize="small" color="success" sx={{ fontSize: 16 }} />}
                        <Typography variant="caption" fontWeight={700} noWrap>
                          {appt.patientName}
                        </Typography>
                      </Stack>
                      {!isBlocked && (
                        <Typography variant="caption" display="block" color="text.secondary" noWrap>
                          {appt.reason}
                        </Typography>
                      )}
                    </Paper>
                  );
                })}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Right Sidebar Widget */}
      <Box sx={{ width: 320, flexShrink: 0, bgcolor: '#fff', borderLeft: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column' }}>
        
        {/* Waiting Room */}
        <Box sx={{ p: 2, borderBottom: '1px solid #f0f0f0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" fontWeight={700}>Waiting Room</Typography>
            <Chip label="2 Waiting" color="primary" size="small" />
          </Box>
          <List disablePadding>
            {waitingRoom.map((patient) => (
              <Paper key={patient.id} variant="outlined" sx={{ mb: 1.5, p: 1 }}>
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.light', width: 36, height: 36 }}>{patient.avatar}</Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<Typography variant="subtitle2" fontWeight={600}>{patient.name}</Typography>}
                    secondary={
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <CheckCircleIcon color="success" sx={{ fontSize: 14 }} />
                        <Typography variant="caption">{patient.status} • {patient.time}</Typography>
                      </Stack>
                    }
                  />
                </ListItem>
                <Button fullWidth variant="contained" size="small" sx={{ mt: 1, bgcolor: 'success.main', '&:hover': { bgcolor: 'success.dark' } }}>
                  Call Patient
                </Button>
              </Paper>
            ))}
          </List>
        </Box>

        {/* Requests */}
        <Box sx={{ p: 2, flexGrow: 1, bgcolor: '#fff9f9' }}>
          <Typography variant="subtitle1" fontWeight={700} color="error" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmergencyIcon fontSize="small" /> Urgent Requests
          </Typography>
          {requests.map((req) => (
             <Paper key={req.id} sx={{ p: 2, borderLeft: '4px solid #d32f2f' }}>
               <Typography variant="subtitle2" fontWeight={700}>{req.name}</Typography>
               <Typography variant="body2" color="error.main" fontWeight={500}>{req.type}</Typography>
               <Typography variant="caption" display="block" sx={{ mb: 1, color: 'text.secondary' }}>Reason: {req.reason}</Typography>
               <Typography variant="caption" display="block" sx={{ mb: 2, color: 'text.secondary' }}>{req.time}</Typography>
               <Stack direction="row" spacing={1}>
                 <Button variant="contained" size="small" color="error" fullWidth>Accept</Button>
                 <Button variant="outlined" size="small" color="inherit" fullWidth>Decline</Button>
               </Stack>
             </Paper>
          ))}
        </Box>
      </Box>

      {/* Appointment Detail Modal */}
      <Dialog open={!!selectedAppt} onClose={() => setSelectedAppt(null)} maxWidth="sm" fullWidth>
        {selectedAppt && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {selectedAppt.type === 'video' ? <VideoIcon color="primary" /> : <PersonIcon color="success" />}
                <Typography variant="h6">{selectedAppt.type === 'video' ? 'Teleconsultation' : 'Physical Visit'}</Typography>
              </Box>
              <IconButton onClick={() => setSelectedAppt(null)} size="small"><CloseIcon /></IconButton>
            </DialogTitle>
            <DialogContent sx={{ pt: 3 }}>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', fontSize: 24 }}>
                  {selectedAppt.patientName.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h5" fontWeight={700}>{selectedAppt.patientName}</Typography>
                  <Typography variant="body2" color="text.secondary">34 Years Old • Male • Last Visit: Jan 15, 2026</Typography>
                </Box>
              </Box>

              <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: '#f8f9fa' }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>Consultation Context</Typography>
                <Typography variant="body1" fontWeight={500} gutterBottom>{selectedAppt.reason}</Typography>
                <Divider sx={{ my: 1 }} />
                <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EventIcon fontSize="small" color="action" />
                    <Typography variant="body2">Feb {10 + selectedAppt.day}, 2026</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TimeIcon fontSize="small" color="action" />
                    <Typography variant="body2">{Math.floor(selectedAppt.startTime)}:{(selectedAppt.startTime % 1) * 60 === 0 ? '00' : '30'} - {Math.floor(selectedAppt.startTime + selectedAppt.duration)}:{(selectedAppt.startTime + selectedAppt.duration) % 1 * 60 === 0 ? '00' : '30'}</Typography>
                  </Box>
                </Stack>
              </Paper>

              <Typography variant="caption" color="text.secondary">Patient Notes</Typography>
              <Typography variant="body2" paragraph>
                Patient reported recurring headaches over the last 3 days. Sensitive to light. No history of migraines.
              </Typography>

            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0, justifyContent: 'space-between' }}>
              <Button variant="outlined" color="error">Cancel Appointment</Button>
              <Box>
                <Button variant="outlined" sx={{ mr: 1 }}>Reschedule</Button>
                <Button variant="contained" startIcon={<StartIcon />} color="primary">Start Consultation</Button>
              </Box>
            </DialogActions>
          </>
        )}
      </Dialog>

    </Box>
  );
}
