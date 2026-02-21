import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  MedicalServices as ConsultationsIcon,
  People as DoctorsIcon,
  SupportAgent as SupportIcon,
  Star as StarIcon,
  ArrowBackIos as ArrowBackIcon,
  ArrowForwardIos as ArrowForwardIcon,
} from '@mui/icons-material';

const stats = [
  {
    icon: <ConsultationsIcon sx={{ fontSize: 48 }} />,
    value: '10,000+',
    label: 'Consultations',
    color: '#007AFF',
  },
  {
    icon: <DoctorsIcon sx={{ fontSize: 48 }} />,
    value: '500+',
    label: 'Active Doctors',
    color: '#00C853',
  },
  {
    icon: <SupportIcon sx={{ fontSize: 48 }} />,
    value: '24/7',
    label: 'Support',
    color: '#FF9500',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Patient',
    avatar: 'S',
    rating: 5,
    quote:
      'MediCare AI transformed my healthcare experience. The AI assistant helped me understand my symptoms and the teleconsultation was seamless!',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Patient',
    avatar: 'M',
    rating: 5,
    quote:
      'Booking appointments is so easy now. I love being able to consult with doctors from home. The platform is user-friendly and secure.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Patient',
    avatar: 'E',
    rating: 5,
    quote:
      'The AI diagnostic support gave me peace of mind before my doctor appointment. Highly recommend this platform to everyone!',
  },
  {
    id: 4,
    name: 'David Williams',
    role: 'Patient',
    avatar: 'D',
    rating: 5,
    quote:
      'Fast, reliable, and professional. Got my prescription delivered the same day. This is the future of healthcare!',
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Patient',
    avatar: 'L',
    rating: 5,
    quote:
      'Amazing experience! The doctors are professional and the AI assistant is incredibly helpful for quick health questions.',
  },
  {
    id: 6,
    name: 'James Martinez',
    role: 'Patient',
    avatar: 'J',
    rating: 5,
    quote:
      'I can access my medical records anytime, anywhere. The convenience and security of this platform are unmatched.',
  },
];

const partners = [
  'City General Hospital',
  'HealthFirst Insurance',
  'MediCare Plus',
  'United Health Group',
  'CarePlus Network',
  'WellnessCare',
];

export default function TrustCommunitySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visibleTestimonials = 3;
  const maxSlide = Math.ceil(testimonials.length / visibleTestimonials) - 1;

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1));
  };

  const renderStars = (rating: number) => {
    return (
      <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} sx={{ color: '#FFC107', fontSize: 20 }} />
        ))}
      </Box>
    );
  };

  return (
    <Box sx={{ bgcolor: '#F5F7FA', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
            }}
          >
            Trust & Community
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
            Join thousands of satisfied patients and healthcare professionals
          </Typography>
        </Box>

        {/* Live Stats Strip */}
        <Card
          sx={{
            mb: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            borderRadius: 3,
          }}
        >
          <CardContent sx={{ py: 4 }}>
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 3,
                      textAlign: { xs: 'center', md: 'left' },
                      flexDirection: { xs: 'column', sm: 'row' },
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: `${stat.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: stat.color,
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: stat.color,
                          fontSize: { xs: '2rem', md: '2.5rem' },
                        }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 500 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>

        {/* Testimonials Carousel */}
        <Box sx={{ mb: 8 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              What Our Patients Say
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                onClick={handlePrev}
                sx={{
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <IconButton
                onClick={handleNext}
                sx={{
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>

          <Grid container spacing={3}>
            {testimonials
              .slice(currentSlide * visibleTestimonials, (currentSlide + 1) * visibleTestimonials)
              .map((testimonial) => (
                <Grid item xs={12} md={4} key={testimonial.id}>
                  <Card
                    sx={{
                      height: '100%',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                        <Avatar
                          sx={{
                            bgcolor: 'primary.main',
                            width: 56,
                            height: 56,
                            fontSize: '1.5rem',
                            fontWeight: 600,
                          }}
                        >
                          {testimonial.avatar}
                        </Avatar>
                        <Box>
                          <Typography variant="body1" sx={{ fontWeight: 600 }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {testimonial.role}
                          </Typography>
                        </Box>
                      </Box>
                      {renderStars(testimonial.rating)}
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          fontStyle: 'italic',
                          lineHeight: 1.7,
                          position: 'relative',
                          '&::before': {
                            content: '"""',
                            fontSize: '3rem',
                            color: 'primary.main',
                            opacity: 0.2,
                            position: 'absolute',
                            left: -10,
                            top: -20,
                          },
                        }}
                      >
                        {testimonial.quote}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>

          {/* Carousel Indicators */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
            {[...Array(maxSlide + 1)].map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: currentSlide === index ? 24 : 8,
                  height: 8,
                  borderRadius: 1,
                  bgcolor: currentSlide === index ? 'primary.main' : '#D0D5DD',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Partners Banner */}
        <Box>
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              fontWeight: 500,
              mb: 4,
              textTransform: 'uppercase',
              letterSpacing: 1,
              fontSize: '0.875rem',
            }}
          >
            Trusted by leading hospitals and insurance companies
          </Typography>
          <Card
            sx={{
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ py: 4 }}>
              <Grid container spacing={4} alignItems="center" justifyContent="center">
                {partners.map((partner, index) => (
                  <Grid item xs={6} sm={4} md={2} key={index}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 60,
                        filter: 'grayscale(100%)',
                        opacity: 0.6,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          filter: 'grayscale(0%)',
                          opacity: 1,
                        },
                      }}
                    >
                      {/* Partner Logo Placeholder */}
                      <Box
                        sx={{
                          width: '100%',
                          textAlign: 'center',
                          px: 2,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: '#1E293B',
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            letterSpacing: 0.5,
                          }}
                        >
                          {partner}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
