import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Fab,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  Lock,
  CreditCard,
  Apple,
  Security,
  Close,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'motion/react';

export default function LabResultLocked() {
  const [showPayment, setShowPayment] = useState(true);

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 480, 
      mx: 'auto', 
      height: '100vh', 
      bgcolor: '#f2f2f7', // iOS grey
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* 1. Header */}
      <Box sx={{ 
        p: 2, 
        pt: 3, 
        bgcolor: 'rgba(255,255,255,0.9)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e5ea',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        zIndex: 10
      }}>
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ color: '#000' }}>
            Lab Results Available
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Today, 14:30
          </Typography>
        </Box>
        <IconButton size="small"><Close /></IconButton>
      </Box>

      {/* 2. The Locked Content Card */}
      <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <Box sx={{ position: 'relative', width: '100%', mb: 4 }}>
          {/* Blurred Document Representation */}
          <Paper 
            elevation={0}
            sx={{ 
              p: 3, 
              minHeight: 400, 
              bgcolor: 'white', 
              borderRadius: 3,
              filter: 'blur(8px)',
              opacity: 0.6,
              pointerEvents: 'none',
              overflow: 'hidden'
            }}
          >
             <Typography variant="h4" gutterBottom>Blood Analysis Report</Typography>
             <Divider sx={{ mb: 2 }} />
             <Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
             <Typography paragraph>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
             <Box sx={{ mt: 4 }}>
               <Typography variant="h6">Results</Typography>
               <Typography>Hemoglobin: 14.5 g/dL</Typography>
               <Typography>WBC: 6.5 x10^3/uL</Typography>
               <Typography>Platelets: 250 x10^3/uL</Typography>
             </Box>
          </Paper>

          {/* Lock Overlay */}
          <Box 
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              width: '100%',
              zIndex: 5
            }}
          >
            <Fab disabled sx={{ 
              width: 80, 
              height: 80, 
              mb: 2, 
              bgcolor: '#000 !important', 
              color: 'white !important',
              boxShadow: '0 8px 16px rgba(0,0,0,0.1)' 
            }}>
              <Lock sx={{ fontSize: 36 }} />
            </Fab>
            <Typography variant="h6" fontWeight={700} sx={{ color: '#1c1c1e', mb: 1 }}>
              Your analysis results are ready
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 280, mx: 'auto' }}>
              Please settle the outstanding balance to view full details and download the PDF.
            </Typography>
          </Box>
        </Box>

      </Box>

      {/* 3. Payment Action (Bottom Sheet) */}
      <AnimatePresence>
        {showPayment && (
          <Paper
            component={motion.div}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            elevation={10}
            sx={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0,
              borderTopLeftRadius: 24, 
              borderTopRightRadius: 24, 
              bgcolor: 'white',
              p: 3,
              pb: 4,
              zIndex: 20
            }}
          >
            <Box sx={{ width: 40, height: 5, bgcolor: '#e5e5ea', borderRadius: 3, mx: 'auto', mb: 3 }} />
            
            <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: 3 }}>
              <Typography variant="h5" fontWeight={800}>€45.00</Typography>
              <Typography variant="body2" color="text.secondary">Total Due</Typography>
            </Stack>

            <Stack spacing={1} sx={{ mb: 4 }}>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">Lab Fees</Typography>
                <Typography variant="body2" fontWeight={500}>€42.00</Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                <Typography variant="body2" color="text.secondary">Processing Fee</Typography>
                <Typography variant="body2" fontWeight={500}>€3.00</Typography>
              </Stack>
            </Stack>

            <Button 
              fullWidth 
              variant="contained" 
              size="large"
              startIcon={<Apple />}
              sx={{ 
                height: 56, 
                bgcolor: '#000', 
                color: 'white', 
                borderRadius: 3,
                textTransform: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                mb: 2,
                '&:hover': { bgcolor: '#333' }
              }}
            >
              Pay with Apple Pay
            </Button>
            
            <Button 
              fullWidth 
              variant="outlined" 
              size="large"
              startIcon={<CreditCard />}
              sx={{ 
                height: 56, 
                borderRadius: 3,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                borderColor: '#e5e5ea',
                color: '#000'
              }}
            >
              Pay with Credit Card
            </Button>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5} sx={{ mt: 3 }}>
              <Security sx={{ fontSize: 14, color: '#34C759' }} />
              <Typography variant="caption" color="text.secondary" fontWeight={500}>
                Secure SSL Payment via Stripe
              </Typography>
            </Stack>
          </Paper>
        )}
      </AnimatePresence>
    </Box>
  );
}
