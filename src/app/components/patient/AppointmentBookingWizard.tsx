import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Grid,
  Avatar,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Star as StarIcon,
  VideoCall as VideoIcon,
  LocalHospital as HospitalIcon,
  ArrowBack as BackIcon,
  ArrowForward as NextIcon,
} from '@mui/icons-material';

const steps = ['Search Doctor', 'Select Time', 'Confirm Booking'];

const mockDoctors = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 234,
    nextAvailable: 'Tomorrow, 10:00 AM',
    languages: ['English', 'Spanish'],
    gender: 'Female',
  },
  {
    id: 2,
    name: 'Dr. James Chen',
    specialty: 'General Physician',
    rating: 4.8,
    reviews: 189,
    nextAvailable: 'Today, 3:00 PM',
    languages: ['English', 'Mandarin'],
    gender: 'Male',
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    specialty: 'Dermatologist',
    rating: 4.7,
    reviews: 156,
    nextAvailable: 'Feb 12, 9:00 AM',
    languages: ['English', 'French'],
    gender: 'Female',
  },
];

const timeSlots = {
  morning: ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30'],
  afternoon: ['14:00', '14:30', '15:00', '15:30', '16:00', '16:30'],
  evening: ['17:00', '17:30', '18:00', '18:30'],
};

export default function AppointmentBookingWizard() {
  const [activeStep, setActiveStep] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [language, setLanguage] = useState('');
  const [gender, setGender] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState('Feb 10, 2026');
  const [selectedTime, setSelectedTime] = useState('');
  const [visitType, setVisitType] = useState<'physical' | 'teleconsultation'>('teleconsultation');

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleDoctorSelect = (doctor: any) => {
    setSelectedDoctor(doctor);
  };

  const handleConfirmBooking = () => {
    // Handle booking confirmation
    alert('Appointment booked successfully!');
  };

  // Step 1: Search & Filter
  const renderSearchStep = () => (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
        Find Your Doctor
      </Typography>

      {/* Search Bar */}
      <TextField
        fullWidth
        placeholder="Search by specialty or doctor name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
        }}
        sx={{ mb: 3 }}
      />

      {/* Filters */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Specialty</InputLabel>
            <Select value={specialty} onChange={(e) => setSpecialty(e.target.value)} label="Specialty">
              <MenuItem value="">All Specialties</MenuItem>
              <MenuItem value="cardiology">Cardiology</MenuItem>
              <MenuItem value="general">General Physician</MenuItem>
              <MenuItem value="dermatology">Dermatology</MenuItem>
              <MenuItem value="pediatrics">Pediatrics</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Language</InputLabel>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)} label="Language">
              <MenuItem value="">Any Language</MenuItem>
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="spanish">Spanish</MenuItem>
              <MenuItem value="french">French</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth size="small">
            <InputLabel>Gender</InputLabel>
            <Select value={gender} onChange={(e) => setGender(e.target.value)} label="Gender">
              <MenuItem value="">Any</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Doctor Results */}
      <Grid container spacing={2}>
        {mockDoctors.map((doctor) => (
          <Grid item xs={12} key={doctor.id}>
            <Card
              sx={{
                cursor: 'pointer',
                border: selectedDoctor?.id === doctor.id ? '2px solid' : '1px solid',
                borderColor: selectedDoctor?.id === doctor.id ? 'primary.main' : 'divider',
                transition: 'all 0.2s ease',
                '&:hover': {
                  boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                },
              }}
              onClick={() => handleDoctorSelect(doctor)}
            >
              <CardContent sx={{ p: 3 }}>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        bgcolor: 'primary.main',
                        fontSize: '2rem',
                        fontWeight: 700,
                      }}
                    >
                      {doctor.name.split(' ')[1][0]}
                    </Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {doctor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {doctor.specialty}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Rating value={doctor.rating} precision={0.1} size="small" readOnly />
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                          {doctor.rating}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ({doctor.reviews} reviews)
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {doctor.languages.map((lang) => (
                        <Chip key={lang} label={lang} size="small" />
                      ))}
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ textAlign: 'right' }}>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                        Next Available
                      </Typography>
                      <Chip
                        label={doctor.nextAvailable}
                        color="primary"
                        size="small"
                        sx={{ fontWeight: 600 }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Step 2: Time Selection
  const renderTimeStep = () => (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
        Select Date & Time
      </Typography>

      <Grid container spacing={4}>
        {/* Calendar (simplified) */}
        <Grid item xs={12} md={5}>
          <Card sx={{ bgcolor: '#F8FAFC', boxShadow: 'none' }}>
            <CardContent>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 2 }}>
                February 2026
              </Typography>
              <Grid container spacing={1}>
                {['8', '9', '10', '11', '12', '13', '14'].map((day) => (
                  <Grid item xs={12 / 7} key={day}>
                    <Button
                      variant={selectedDate === `Feb ${day}, 2026` ? 'contained' : 'outlined'}
                      fullWidth
                      sx={{
                        aspectRatio: '1',
                        minWidth: 0,
                        p: 0,
                        fontSize: '0.875rem',
                      }}
                      onClick={() => setSelectedDate(`Feb ${day}, 2026`)}
                    >
                      {day}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Time Slots */}
        <Grid item xs={12} md={7}>
          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>
              Morning
            </Typography>
            <Grid container spacing={1} sx={{ mb: 3 }}>
              {timeSlots.morning.map((time) => (
                <Grid item xs={4} sm={3} key={time}>
                  <Button
                    variant={selectedTime === time ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={() => setSelectedTime(time)}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>
              Afternoon
            </Typography>
            <Grid container spacing={1} sx={{ mb: 3 }}>
              {timeSlots.afternoon.map((time) => (
                <Grid item xs={4} sm={3} key={time}>
                  <Button
                    variant={selectedTime === time ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={() => setSelectedTime(time)}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>

            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2, color: 'text.secondary' }}>
              Evening
            </Typography>
            <Grid container spacing={1}>
              {timeSlots.evening.map((time) => (
                <Grid item xs={4} sm={3} key={time}>
                  <Button
                    variant={selectedTime === time ? 'contained' : 'outlined'}
                    fullWidth
                    onClick={() => setSelectedTime(time)}
                    sx={{ textTransform: 'none', fontWeight: 600 }}
                  >
                    {time}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );

  // Step 3: Confirmation
  const renderConfirmStep = () => (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
        Confirm Your Appointment
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Doctor
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>
                  {selectedDoctor?.name.split(' ')[1][0]}
                </Avatar>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {selectedDoctor?.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedDoctor?.specialty}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                Date & Time
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {selectedDate}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {selectedTime}
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
            Visit Type
          </Typography>
          <ToggleButtonGroup
            value={visitType}
            exclusive
            onChange={(e, value) => value && setVisitType(value)}
            fullWidth
          >
            <ToggleButton value="teleconsultation" sx={{ py: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <VideoIcon />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Teleconsultation
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Video call from home
                  </Typography>
                </Box>
              </Box>
            </ToggleButton>
            <ToggleButton value="physical" sx={{ py: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <HospitalIcon />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Physical Visit
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    In-person consultation
                  </Typography>
                </Box>
              </Box>
            </ToggleButton>
          </ToggleButtonGroup>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <Box>
      <Card sx={{ mb: 3 }}>
        <CardContent sx={{ p: 3 }}>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && renderSearchStep()}
          {activeStep === 1 && renderTimeStep()}
          {activeStep === 2 && renderConfirmStep()}
        </CardContent>
      </Card>

      {/* Sticky Footer */}
      <Card
        sx={{
          position: 'sticky',
          bottom: 0,
          zIndex: 10,
          boxShadow: '0 -4px 20px rgba(0,0,0,0.1)',
        }}
      >
        <CardContent sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
            <Button
              variant="outlined"
              startIcon={<BackIcon />}
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ textTransform: 'none', fontWeight: 600 }}
            >
              Back
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button
                variant="contained"
                endIcon={<NextIcon />}
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && !selectedDoctor) ||
                  (activeStep === 1 && !selectedTime)
                }
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Next
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleConfirmBooking}
                sx={{ textTransform: 'none', fontWeight: 600 }}
              >
                Confirm Booking
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
