import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Google as GoogleIcon,
} from '@mui/icons-material';

import { Logo } from '../Logo';

interface AuthPageProps {
  onLogin?: () => void;
}

export default function AuthPage({ onLogin }: AuthPageProps) {
  const [tabValue, setTabValue] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('patient');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Side - Image/Pattern */}
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          overflow: 'hidden',
          bgcolor: '#0F172A', // Deep Navy Base
        }}
      >
        {/* Background Texture: Geometric Hexagon Network */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            opacity: 0.15, // Visible but subtle
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%2322d3ee' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)', // Fade out at bottom
            WebkitMaskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.2) 100%)',
          }}
        />

        {/* Lighting: Soft Glow behind Text */}
        <Box
          sx={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '120%',
            height: '80%',
            background: 'radial-gradient(circle at center, rgba(30, 58, 138, 0.4) 0%, rgba(15, 23, 42, 0) 70%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* Content Container */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 10,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: 8, // More padding for premium feel
            color: 'white',
          }}
        >
          {/* Top: Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Logo size={40} showText={true} color="#FFFFFF" textColor="#FFFFFF" />
          </Box>

          {/* Center: Headline */}
          <Box sx={{ maxWidth: 500, mt: 4 }}>
            <Typography variant="h2" sx={{ 
              fontWeight: 700, // Bold
              mb: 3, 
              fontFamily: '"Playfair Display", "Merriweather", serif', // Premium Serif
              lineHeight: 1.1,
              color: '#FFFFFF', // Pure White
              textShadow: '0 4px 30px rgba(0,0,0,0.5)', // Lift text off bg
              fontSize: { md: '3.5rem', lg: '4rem' }
            }}>
              Healthcare,<br/>Reimagined.
            </Typography>
            <Typography variant="h6" sx={{ 
              color: '#E2E8F0', // Light Grey (High Contrast)
              opacity: 1, // Ensure 100% legibility
              maxWidth: 420, 
              lineHeight: 1.8, 
              fontWeight: 400,
              fontFamily: 'Lato, sans-serif'
            }}>
              Experience the future of medical practice management. Secure, intelligent, and designed for professionals.
            </Typography>
          </Box>

          {/* Bottom: Enhanced Glass Card */}
          <Box
            sx={{
              mt: 'auto',
              p: 3,
              borderRadius: 4, // 16px
              background: 'rgba(255, 255, 255, 0.08)', // Slightly more opaque
              backdropFilter: 'blur(24px)', // Stronger blur
              border: '1px solid rgba(255, 255, 255, 0.3)', // Glowing border
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.1), 0 8px 32px 0 rgba(0, 0, 0, 0.3)', // Glow + Depth
              maxWidth: 400,
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              transition: 'all 0.4s ease',
              cursor: 'default',
              '&:hover': { 
                transform: 'translateY(-4px)',
                background: 'rgba(255, 255, 255, 0.12)',
                borderColor: 'rgba(255, 255, 255, 0.5)'
              }
            }}
          >
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1615177393114-bd2917a4f74a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBwcm9maWxlJTIwcGljdHVyZSUyMGhlYWRzaG90fGVufDF8fHx8MTc3MDU3MDg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              sx={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.8)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
              }}
            />
            <Box>
              <Box sx={{ display: 'flex', gap: 0.5, mb: 0.5 }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Box key={star} component="span" sx={{ 
                    color: '#FBBF24', // Gold/Yellow Pop
                    fontSize: 16,
                    filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.4))'
                  }}>★</Box>
                ))}
              </Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', letterSpacing: '0.5px' }}>
                Trusted by 10,000+ Practitioners
              </Typography>
              <Typography variant="caption" sx={{ color: '#E2E8F0', fontWeight: 500 }}>
                Rated 4.9/5 by medical professionals
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* Right Side - Form */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'white',
          p: 3,
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 450, p: 4 }}>
          {/* Tabs */}
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}
            variant="fullWidth"
          >
            <Tab label="Sign In" sx={{ fontWeight: 600, fontSize: '1rem' }} />
            <Tab label="Register" sx={{ fontWeight: 600, fontSize: '1rem' }} />
          </Tabs>

          {/* Sign In Form */}
          {tabValue === 0 && (
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Welcome Back
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Sign in to access your account
              </Typography>

              <TextField
                fullWidth
                label="Email Address"
                type="email"
                sx={{ mb: 3 }}
                placeholder="you@example.com"
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                sx={{ mb: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Login as</InputLabel>
                <Select value={role} onChange={(e) => setRole(e.target.value)} label="Login as">
                  <MenuItem value="patient">Patient</MenuItem>
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="pharmacist">Pharmacist</MenuItem>
                  <MenuItem value="staff">Lab Staff</MenuItem>
                  <MenuItem value="admin">Administrator</MenuItem>
                </Select>
              </FormControl>

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ py: 1.5, mb: 2, fontWeight: 600 }}
                onClick={handleLogin}
              >
                Login
              </Button>

              <Box sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Forgot password?{' '}
                  <Typography component="span" sx={{ color: 'primary.main', cursor: 'pointer' }}>
                    Reset here
                  </Typography>
                </Typography>
              </Box>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Or continue with
                </Typography>
              </Divider>

              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon />}
                sx={{ py: 1.5 }}
              >
                Continue with Google
              </Button>
            </Box>
          )}

          {/* Register Form */}
          {tabValue === 1 && (
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                Create Account
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Join MediCare AI today
              </Typography>

              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <TextField fullWidth label="First Name" placeholder="John" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Last Name" placeholder="Doe" />
                </Grid>
              </Grid>

              <TextField
                fullWidth
                label="Email Address"
                type="email"
                sx={{ mb: 3 }}
                placeholder="you@example.com"
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                sx={{ mb: 3 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Register as</InputLabel>
                <Select value={role} onChange={(e) => setRole(e.target.value)} label="Register as">
                  <MenuItem value="patient">Patient</MenuItem>
                  <MenuItem value="doctor">Doctor</MenuItem>
                  <MenuItem value="pharmacist">Pharmacist</MenuItem>
                  <MenuItem value="staff">Lab Staff</MenuItem>
                </Select>
              </FormControl>

              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ py: 1.5, mb: 2, fontWeight: 600 }}
              >
                Create Account
              </Button>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" color="text.secondary">
                  Or continue with
                </Typography>
              </Divider>

              <Button
                fullWidth
                variant="outlined"
                size="large"
                startIcon={<GoogleIcon />}
                sx={{ py: 1.5 }}
              >
                Continue with Google
              </Button>
            </Box>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
