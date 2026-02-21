import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button,
  Grid,
  Avatar,
  Chip,
  Switch,
  FormControlLabel,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon, VideoCall as VideoIcon, LocalHospital as HospitalIcon } from '@mui/icons-material';

export default function AppointmentBooking() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isTeleconsultation, setIsTeleconsultation] = useState(true);

  const steps = ['Select Doctor', 'Choose Date & Time', 'Consultation Type', 'Confirmation'];

  const doctors = [
    { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', rating: 4.9, experience: '15 years' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'General Physician', rating: 4.8, experience: '12 years' },
    { id: 3, name: 'Dr. Emily Davis', specialty: 'Dermatologist', rating: 4.9, experience: '10 years' },
    { id: 4, name: 'Dr. James Wilson', specialty: 'Orthopedic', rating: 4.7, experience: '18 years' },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  ];

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    alert('Appointment booked successfully!');
    setActiveStep(0);
    setSelectedDoctor(null);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Book Appointment
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Schedule your consultation in a few simple steps
      </Typography>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Step 1: Select Doctor */}
          {activeStep === 0 && (
            <Box>
              <TextField
                fullWidth
                placeholder="Search by doctor name or specialty..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 3 }}
              />
              <Grid container spacing={2}>
                {doctors.map((doctor) => (
                  <Grid item xs={12} sm={6} key={doctor.id}>
                    <Card
                      sx={{
                        cursor: 'pointer',
                        border: selectedDoctor === doctor.id ? '2px solid' : '1px solid',
                        borderColor: selectedDoctor === doctor.id ? 'primary.main' : 'divider',
                        '&:hover': { borderColor: 'primary.main' },
                      }}
                      onClick={() => setSelectedDoctor(doctor.id)}
                    >
                      <CardContent>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                            {doctor.name.split(' ')[1].charAt(0)}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {doctor.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              {doctor.specialty}
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                              <Chip label={`⭐ ${doctor.rating}`} size="small" />
                              <Chip label={doctor.experience} size="small" variant="outlined" />
                            </Box>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Step 2: Choose Date & Time */}
          {activeStep === 1 && (
            <Box>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Select Date
              </Typography>
              <TextField
                type="date"
                fullWidth
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 3 }}
              />

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Select Time Slot
              </Typography>
              <Grid container spacing={2}>
                {timeSlots.map((time) => (
                  <Grid item xs={6} sm={4} md={3} key={time}>
                    <Button
                      fullWidth
                      variant={selectedTime === time ? 'contained' : 'outlined'}
                      onClick={() => setSelectedTime(time)}
                      sx={{ py: 1.5 }}
                    >
                      {time}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Step 3: Consultation Type */}
          {activeStep === 2 && (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Choose Consultation Type
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={isTeleconsultation}
                    onChange={(e) => setIsTeleconsultation(e.target.checked)}
                    color="primary"
                  />
                }
                label={isTeleconsultation ? 'Teleconsultation (Video)' : 'Physical Visit'}
                sx={{ mb: 3 }}
              />

              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      p: 3,
                      border: isTeleconsultation ? '2px solid' : '1px solid',
                      borderColor: isTeleconsultation ? 'primary.main' : 'divider',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsTeleconsultation(true)}
                  >
                    <VideoIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Teleconsultation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Video consultation from the comfort of your home
                    </Typography>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Card
                    sx={{
                      p: 3,
                      border: !isTeleconsultation ? '2px solid' : '1px solid',
                      borderColor: !isTeleconsultation ? 'primary.main' : 'divider',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsTeleconsultation(false)}
                  >
                    <HospitalIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Physical Visit
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      In-person consultation at the clinic
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}

          {/* Step 4: Confirmation */}
          {activeStep === 3 && (
            <Box sx={{ py: 2 }}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
                Confirm Your Appointment
              </Typography>
              <Card sx={{ bgcolor: 'background.default', p: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Doctor
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {doctors.find((d) => d.id === selectedDoctor)?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Date
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedDate}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body2" color="text.secondary">
                      Time
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {selectedTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" color="text.secondary">
                      Type
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {isTeleconsultation ? 'Teleconsultation (Video)' : 'Physical Visit'}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            </Box>
          )}

          {/* Navigation Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
              sx={{ minWidth: 120 }}
            >
              Back
            </Button>
            <Button
              onClick={activeStep === steps.length - 1 ? handleConfirm : handleNext}
              variant="contained"
              disabled={
                (activeStep === 0 && !selectedDoctor) ||
                (activeStep === 1 && (!selectedDate || !selectedTime))
              }
              sx={{ minWidth: 120 }}
            >
              {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
