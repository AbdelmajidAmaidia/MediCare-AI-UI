import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Grid,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Avatar,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Lock as LockIcon,
  CreditCard as CardIcon,
  Apple as AppleIcon,
  Google as GoogleIcon,
  Close as CloseIcon,
  CalendarToday as CalendarIcon,
  VideoCall as VideoIcon,
} from '@mui/icons-material';

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  amount: number;
}

export default function PaymentModal({ open, onClose, amount = 55 }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState('saved-card');

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3 }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LockIcon color="success" />
          <Typography variant="h6" fontWeight={600}>Secure Checkout</Typography>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ p: 0 }}>
        <Grid container>
          {/* Left Column: Order Summary */}
          <Grid item xs={12} md={5} sx={{ bgcolor: 'grey.50', p: 3, borderRight: '1px solid #eee' }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Consultation Summary
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 3, mt: 2 }}>
              <Avatar 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop" 
                sx={{ width: 56, height: 56 }} 
              />
              <Box>
                <Typography variant="body1" fontWeight={600}>Dr. Sarah Wilson</Typography>
                <Typography variant="body2" color="text.secondary">Cardiologist</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                  <VideoIcon fontSize="small" color="primary" />
                  <Typography variant="caption" color="primary">Video Consultation</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mb: 3, p: 1.5, bgcolor: 'white', borderRadius: 2, border: '1px solid #e0e0e0' }}>
              <CalendarIcon color="action" fontSize="small" />
              <Typography variant="body2">
                Mon, Feb 9, 2026 • 10:00 AM
              </Typography>
            </Box>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" color="text.secondary">Consultation Fee</Typography>
              <Typography variant="body2" fontWeight={500}>${(amount - 5).toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body2" color="text.secondary">Platform Fee</Typography>
              <Typography variant="body2" fontWeight={500}>$5.00</Typography>
            </Box>
            
            <Divider sx={{ mb: 2 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle1" fontWeight={700}>Total</Typography>
              <Typography variant="h5" fontWeight={700} color="primary.main">
                ${amount.toFixed(2)}
              </Typography>
            </Box>
          </Grid>

          {/* Right Column: Payment Details */}
          <Grid item xs={12} md={7} sx={{ p: 3 }}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>
              Payment Method
            </Typography>

            <RadioGroup
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <Box sx={{ mb: 3 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                  SAVED CARDS
                </Typography>
                <Box 
                  sx={{ 
                    border: paymentMethod === 'saved-card' ? '2px solid #2e7d32' : '1px solid #e0e0e0', 
                    borderRadius: 2, 
                    p: 2, 
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: paymentMethod === 'saved-card' ? '#f1f8e9' : 'transparent',
                    cursor: 'pointer'
                  }}
                  onClick={() => setPaymentMethod('saved-card')}
                >
                  <FormControlLabel 
                    value="saved-card" 
                    control={<Radio color="success" />} 
                    label=""
                    sx={{ mr: 1, m: 0 }}
                  />
                  <CardIcon sx={{ mr: 2, color: '#1a237e' }} />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" fontWeight={600}>Visa ending in 4242</Typography>
                    <Typography variant="caption" color="text.secondary">Expires 12/28</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
                  ADD NEW CARD
                </Typography>
                <Box 
                  sx={{ 
                    border: paymentMethod === 'new-card' ? '2px solid #2e7d32' : '1px solid #e0e0e0', 
                    borderRadius: 2, 
                    p: 2,
                    cursor: 'pointer',
                    bgcolor: paymentMethod === 'new-card' ? '#fff' : '#fafafa'
                  }}
                  onClick={() => setPaymentMethod('new-card')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: paymentMethod === 'new-card' ? 2 : 0 }}>
                    <FormControlLabel 
                      value="new-card" 
                      control={<Radio color="success" />} 
                      label="Credit or Debit Card" 
                      sx={{ m: 0, mr: 1 }}
                    />
                  </Box>
                  
                  {paymentMethod === 'new-card' && (
                    <Grid container spacing={2} sx={{ pl: 4 }}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          size="small"
                          placeholder="0000 0000 0000 0000"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CardIcon color="action" fontSize="small" />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField fullWidth size="small" placeholder="MM / YY" />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField fullWidth size="small" placeholder="CVC" />
                      </Grid>
                    </Grid>
                  )}
                </Box>
              </Box>
            </RadioGroup>

            <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
              OTHER METHODS
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<AppleIcon />}
                sx={{ color: 'black', borderColor: '#e0e0e0' }}
              >
                Pay
              </Button>
              <Button 
                variant="outlined" 
                fullWidth 
                startIcon={<GoogleIcon />}
                sx={{ color: 'black', borderColor: '#e0e0e0' }}
              >
                Pay
              </Button>
            </Box>

            <Button 
              variant="contained" 
              fullWidth 
              size="large"
              color="success"
              startIcon={<LockIcon />}
              sx={{ py: 1.5, fontWeight: 600, fontSize: '1.1rem' }}
              onClick={onClose}
            >
              Pay Securely ${amount.toFixed(2)}
            </Button>
            
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                <LockIcon sx={{ fontSize: 12 }} />
                Your payment information is encrypted and secure.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}
