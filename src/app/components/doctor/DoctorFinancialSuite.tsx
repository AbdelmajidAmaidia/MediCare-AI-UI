import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  IconButton,
  Tooltip,
  Divider,
  Switch,
  Paper,
  Stack,
  Avatar,
} from '@mui/material';
import {
  AccountBalance as BankIcon,
  PieChart as ChartIcon,
  TrendingUp as TrendingUpIcon,
  HelpOutline as HelpIcon,
  Visibility as EyeIcon,
  ReceiptLong as TaxIcon,
  ArrowForward as ArrowForwardIcon,
} from '@mui/icons-material';

export default function DoctorFinancialSuite() {
  const [darkMode, setDarkMode] = React.useState(false);

  // Theme colors based on dark mode toggle
  const bgColor = darkMode ? '#121212' : '#f5f7fa';
  const cardBg = darkMode ? '#1e1e1e' : '#ffffff';
  const textColor = darkMode ? '#ffffff' : '#1a1a1a';
  const accentColor = '#D4AF37'; // Gold for premium feel

  return (
    <Box sx={{ p: 3, bgcolor: bgColor, minHeight: '100vh', color: textColor, transition: 'background-color 0.3s' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
        <Box>
          <Typography variant="overline" sx={{ color: accentColor, fontWeight: 700, letterSpacing: 2 }}>
            PREMIUM BANKING
          </Typography>
          <Typography variant="h4" fontWeight={700}>
            Financial Suite
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>Dark Mode</Typography>
          <Switch 
            checked={darkMode} 
            onChange={(e) => setDarkMode(e.target.checked)} 
            color="default" 
            sx={{ '& .MuiSwitch-thumb': { color: accentColor } }}
          />
        </Box>
      </Box>

      {/* Advanced Metrics */}
      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: cardBg, color: textColor, borderRadius: 2, height: '100%', border: darkMode ? '1px solid #333' : 'none', boxShadow: darkMode ? 'none' : 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>AVG REVENUE PER PATIENT (ARPU)</Typography>
                <ChartIcon sx={{ color: accentColor }} />
              </Box>
              <Typography variant="h3" fontWeight={700} sx={{ mb: 1 }}>€45.00</Typography>
              <Typography variant="body2" sx={{ color: '#4caf50', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <TrendingUpIcon fontSize="small" /> +5.2% vs last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ bgcolor: cardBg, color: textColor, borderRadius: 2, height: '100%', border: darkMode ? '1px solid #333' : 'none', boxShadow: darkMode ? 'none' : 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>CONSULTATION CONVERSION</Typography>
                <PieChartIconCustom color={accentColor} />
              </Box>
              <Typography variant="h3" fontWeight={700} sx={{ mb: 1 }}>92%</Typography>
              <Typography variant="body2" sx={{ opacity: 0.6 }}>
                Of appointments result in paid invoices
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Escrow Pipeline */}
      <Card sx={{ bgcolor: cardBg, color: textColor, borderRadius: 3, mb: 5, overflow: 'visible', border: darkMode ? '1px solid #333' : 'none', boxShadow: darkMode ? 'none' : 3 }}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 4 }}>
            Funds Pipeline
          </Typography>
          
          <Grid container spacing={0} alignItems="center">
            {/* Blocked */}
            <Grid item xs={12} md={3}>
              <Box sx={{ p: 2, borderLeft: `4px solid ${darkMode ? '#555' : '#e0e0e0'}` }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, opacity: 0.6 }}>Blocked (Escrow)</Typography>
                <Typography variant="h5" fontWeight={700} sx={{ my: 1 }}>€300.00</Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>Upcoming appointments</Typography>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowForwardIcon sx={{ color: accentColor, opacity: 0.5 }} />
            </Grid>

            {/* Clearing */}
            <Grid item xs={12} md={3}>
              <Box sx={{ p: 2, borderLeft: '4px solid #29b6f6' }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, opacity: 0.6 }}>Clearing</Typography>
                <Typography variant="h5" fontWeight={700} sx={{ my: 1 }}>€150.00</Typography>
                <Typography variant="caption" sx={{ opacity: 0.6 }}>Completed today, verifying</Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={1} sx={{ display: 'flex', justifyContent: 'center' }}>
              <ArrowForwardIcon sx={{ color: accentColor, opacity: 0.5 }} />
            </Grid>

            {/* Available */}
            <Grid item xs={12} md={4}>
              <Box sx={{ p: 3, bgcolor: darkMode ? '#2e2e2e' : '#e8f5e9', borderRadius: 2, border: `1px solid ${darkMode ? '#444' : '#c8e6c9'}` }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: 1, color: darkMode ? '#a5d6a7' : '#2e7d32', fontWeight: 700 }}>Available</Typography>
                  <BankIcon fontSize="small" sx={{ color: darkMode ? '#a5d6a7' : '#2e7d32' }} />
                </Box>
                <Typography variant="h4" fontWeight={700} sx={{ color: darkMode ? '#a5d6a7' : '#2e7d32', mb: 2 }}>€2,400.00</Typography>
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ 
                    bgcolor: darkMode ? '#a5d6a7' : '#2e7d32', 
                    color: darkMode ? '#000' : '#fff',
                    fontWeight: 700,
                    '&:hover': { bgcolor: darkMode ? '#81c784' : '#1b5e20' }
                  }}
                >
                  Withdraw Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Tax Assistant */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Card sx={{ bgcolor: darkMode ? '#2c2c2c' : '#263238', color: 'white', borderRadius: 3 }}>
            <CardContent sx={{ p: 3, position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', top: -20, right: -20, opacity: 0.1 }}>
                 <TaxIcon sx={{ fontSize: 150 }} />
              </Box>
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
                <Avatar sx={{ bgcolor: accentColor, color: 'black' }}>
                  <TaxIcon />
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight={600}>Tax Assistant</Typography>
                  <Typography variant="caption" sx={{ opacity: 0.7 }}>Smart Estimation</Typography>
                </Box>
              </Box>
              
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 3 }}>
                Based on your current revenue, we recommend setting aside funds for the upcoming tax season.
              </Typography>

              <Box sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 2, mb: 2 }}>
                 <Typography variant="caption" sx={{ textTransform: 'uppercase', opacity: 0.7 }}>Estimated Tax (20%)</Typography>
                 <Typography variant="h4" fontWeight={700}>€480.00</Typography>
              </Box>

              <Button variant="outlined" color="inherit" size="small" fullWidth>
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

// Simple placeholder icon component
function PieChartIconCustom({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 12A10 10 0 0 0 12 2V12H22Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
