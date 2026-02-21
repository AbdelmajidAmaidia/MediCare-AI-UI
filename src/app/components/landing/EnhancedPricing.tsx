import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Switch,
  Stack,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from '@mui/material';
import {
  Check as CheckIcon,
  Close as CloseIcon,
  Security as SecurityIcon,
  VerifiedUser as GuaranteeIcon,
  Cancel as CancelIcon,
  FamilyRestroom as FamilyIcon,
  Star as StarIcon,
} from '@mui/icons-material';

export default function EnhancedPricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', pb: 8 }}>
      {/* Header Section */}
      <Box sx={{ pt: 8, pb: 6, textAlign: 'center', px: 2, background: 'linear-gradient(180deg, #fff 0%, #fafafa 100%)' }}>
        <Typography variant="h3" fontWeight={800} gutterBottom sx={{ maxWidth: 800, mx: 'auto', mb: 2 }}>
          Invest in your health for less than the price of a coffee
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Premium care, AI diagnostics, and family protection. Cancel anytime.
        </Typography>

        {/* The Switch */}
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ mb: 8 }}>
          <Typography 
            variant="body1" 
            fontWeight={!annual ? 700 : 500} 
            color={!annual ? 'text.primary' : 'text.secondary'}
          >
            Pay Monthly
          </Typography>
          <Switch
            checked={annual}
            onChange={(e) => setAnnual(e.target.checked)}
            color="primary"
            sx={{ transform: 'scale(1.2)' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography 
              variant="body1" 
              fontWeight={annual ? 700 : 500} 
              color={annual ? 'text.primary' : 'text.secondary'}
            >
              Pay Yearly
            </Typography>
            <Chip 
              label="Save 2 Months" 
              color="error" 
              size="small" 
              sx={{ fontWeight: 700, borderRadius: 1 }} 
            />
          </Box>
        </Stack>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 8 }}>
          {/* Starter Plan */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 4, border: '1px solid #e0e0e0', position: 'relative', top: 0 }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={700} gutterBottom>Starter</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Essential access</Typography>
                <Typography variant="h3" fontWeight={800} sx={{ mb: 1 }}>€0</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>Forever free</Typography>
                <Button variant="outlined" fullWidth size="large" sx={{ py: 1.5, fontWeight: 600 }}>
                  Current Plan
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Health+ (Hero) */}
          <Grid item xs={12} md={4}>
            <Card 
              elevation={8}
              sx={{ 
                height: '100%', 
                borderRadius: 4, 
                border: '2px solid #1976d2', 
                position: 'relative',
                transform: { md: 'scale(1.05)' },
                zIndex: 2,
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 20, 
                  right: -30, 
                  transform: 'rotate(45deg)', 
                  bgcolor: '#ff9800', 
                  color: 'white', 
                  px: 4, 
                  py: 0.5,
                  boxShadow: 2,
                  fontWeight: 700,
                  fontSize: '0.8rem'
                }}
              >
                First Month Free
              </Box>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Chip label="Most Popular" color="primary" size="small" sx={{ mb: 2, fontWeight: 700 }} />
                <Typography variant="h4" fontWeight={800} color="primary" gutterBottom>Health+</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Complete peace of mind</Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 1, mb: 1 }}>
                  {annual && <Typography variant="h5" color="text.secondary" sx={{ textDecoration: 'line-through', opacity: 0.6 }}>€120</Typography>}
                  <Typography variant="h3" fontWeight={800}>€{annual ? '99' : '9.99'}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  {annual ? '/ year' : '/ month'}
                </Typography>

                <Button 
                  variant="contained" 
                  fullWidth 
                  size="large" 
                  sx={{ py: 2, fontWeight: 700, fontSize: '1.1rem', boxShadow: '0 8px 16px rgba(25, 118, 210, 0.2)' }}
                >
                  Start Free Trial
                </Button>
                <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 2 }}>
                  7 days free, then €{annual ? '99/year' : '9.99/mo'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Family Plan */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 4, border: '1px solid #9c27b0' }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                   <FamilyIcon sx={{ color: '#9c27b0', fontSize: 40 }} />
                </Box>
                <Typography variant="h5" fontWeight={700} sx={{ color: '#9c27b0' }} gutterBottom>Family Care</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>For the whole household</Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: 1, mb: 1 }}>
                  {annual && <Typography variant="h5" color="text.secondary" sx={{ textDecoration: 'line-through', opacity: 0.6 }}>€240</Typography>}
                  <Typography variant="h3" fontWeight={800}>€{annual ? '199' : '19.99'}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  {annual ? '/ year' : '/ month'}
                </Typography>

                <Button 
                  variant="contained" 
                  color="secondary"
                  fullWidth 
                  size="large" 
                  sx={{ py: 1.5, fontWeight: 600, bgcolor: '#9c27b0', '&:hover': { bgcolor: '#7b1fa2' } }}
                >
                  Choose Family
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Feature Comparison Matrix */}
        <Typography variant="h5" fontWeight={700} align="center" sx={{ mb: 4 }}>
          Compare Features
        </Typography>
        <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, mb: 8 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell sx={{ width: '40%', fontWeight: 600 }}>Feature</TableCell>
                <TableCell align="center" sx={{ width: '20%', fontWeight: 600 }}>Starter</TableCell>
                <TableCell align="center" sx={{ width: '20%', fontWeight: 600, color: 'primary.main' }}>Health+</TableCell>
                <TableCell align="center" sx={{ width: '20%', fontWeight: 600, color: '#9c27b0' }}>Family Care</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                { name: 'Doctor Search & Booking', starter: true, health: true, family: true },
                { name: 'Digital Medical Record', starter: true, health: true, family: true },
                { name: 'Service Fees', starter: 'Standard', health: '0€ Fees', family: '0€ Fees' },
                { name: 'Priority Delivery', starter: false, health: true, family: true },
                { name: '24/7 AI Chat Support', starter: false, health: true, family: true },
                { name: 'Fast-track Appointments', starter: false, health: true, family: true },
                { name: 'Family Members', starter: '1', health: '1', family: 'Up to 5' },
                { name: 'Pediatric Priority', starter: false, health: false, family: true },
              ].map((row, index) => (
                <TableRow key={index} hover>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="center">
                    {typeof row.starter === 'boolean' ? (row.starter ? <CheckIcon fontSize="small" color="action" /> : <CloseIcon fontSize="small" color="disabled" />) : row.starter}
                  </TableCell>
                  <TableCell align="center" sx={{ bgcolor: '#e3f2fd20' }}>
                    {typeof row.health === 'boolean' ? (row.health ? <CheckIcon fontSize="small" color="primary" /> : <CloseIcon fontSize="small" color="disabled" />) : <Typography fontWeight={600} color="primary">{row.health}</Typography>}
                  </TableCell>
                  <TableCell align="center">
                    {typeof row.family === 'boolean' ? (row.family ? <CheckIcon fontSize="small" color="secondary" /> : <CloseIcon fontSize="small" color="disabled" />) : <Typography fontWeight={600} color="secondary">{row.family}</Typography>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Trust Signals */}
        <Grid container spacing={4} justifyContent="center" sx={{ textAlign: 'center', opacity: 0.8 }}>
          <Grid item xs={12} md={3}>
             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
               <SecurityIcon fontSize="large" color="action" />
               <Typography variant="subtitle2">Secure Payment</Typography>
               <Typography variant="caption" color="text.secondary">256-bit SSL Encryption</Typography>
             </Box>
          </Grid>
          <Grid item xs={12} md={3}>
             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
               <CancelIcon fontSize="large" color="action" />
               <Typography variant="subtitle2">Cancel Anytime</Typography>
               <Typography variant="caption" color="text.secondary">No hidden fees or contracts</Typography>
             </Box>
          </Grid>
          <Grid item xs={12} md={3}>
             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
               <GuaranteeIcon fontSize="large" color="action" />
               <Typography variant="subtitle2">Money-back Guarantee</Typography>
               <Typography variant="caption" color="text.secondary">30-day refund policy</Typography>
             </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
}
