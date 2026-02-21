import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Chip,
  TextField,
  Stack,
  Avatar,
  IconButton,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  CheckCircle,
  Cancel,
  Description,
  Visibility,
  LocationOn,
  Badge as IdIcon,
  MedicalServices,
  VerifiedUser,
} from '@mui/icons-material';

export default function DoctorVerificationDetail() {
  const [rejectionReason, setRejectionReason] = useState('');

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#f8fafc' }}>
      
      {/* Header */}
      <Box sx={{ p: 2, bgcolor: 'white', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 2 }}>
        <IconButton sx={{ border: '1px solid #e2e8f0' }}>
          <ArrowBack fontSize="small" />
        </IconButton>
        <Typography variant="h6" fontWeight={700} color="#0f172a">
          Review Application #DOC-2026-884
        </Typography>
      </Box>

      <Grid container sx={{ flexGrow: 1, overflow: 'hidden' }}>
        
        {/* 1. Left Panel (Applicant Profile) */}
        <Grid item xs={12} md={4} sx={{ borderRight: '1px solid #e2e8f0', bgcolor: 'white', p: 4, overflowY: 'auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', mb: 4 }}>
            <Avatar 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" 
              sx={{ width: 120, height: 120, mb: 2, border: '4px solid #f1f5f9' }}
            />
            <Typography variant="h5" fontWeight={800} color="#0f172a" gutterBottom>
              Dr. Gregory House
            </Typography>
            <Chip 
              label="PENDING REVIEW" 
              sx={{ 
                bgcolor: '#ffedd5', 
                color: '#c2410c', 
                fontWeight: 700, 
                borderRadius: 1 
              }} 
            />
          </Box>

          <Stack spacing={3}>
            <Box>
              <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase" sx={{ mb: 1, display: 'block' }}>
                Professional Details
              </Typography>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#e0f2fe', color: '#0369a1' }}><MedicalServices fontSize="small" /></Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Specialty</Typography>
                      <Typography variant="body1" fontWeight={600}>Infectious Disease</Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#f0fdf4', color: '#15803d' }}><IdIcon fontSize="small" /></Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">License ID</Typography>
                      <Typography variant="body1" fontWeight={600} fontFamily="monospace">#88421</Typography>
                    </Box>
                  </Box>
                  <Divider />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ bgcolor: '#fef3c7', color: '#b45309' }}><LocationOn fontSize="small" /></Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Location</Typography>
                      <Typography variant="body1" fontWeight={600}>Princeton, NJ</Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Box>

            <Box>
               <Typography variant="caption" color="text.secondary" fontWeight={600} textTransform="uppercase" sx={{ mb: 1, display: 'block' }}>
                System Status
              </Typography>
              <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, bgcolor: '#f8fafc' }}>
                 <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                   <Typography variant="body2">Email Verified</Typography>
                   <CheckCircle fontSize="small" color="success" />
                 </Stack>
                 <Stack direction="row" justifyContent="space-between">
                   <Typography variant="body2">Phone Verified</Typography>
                   <CheckCircle fontSize="small" color="success" />
                 </Stack>
              </Paper>
            </Box>
          </Stack>
        </Grid>

        {/* 2. Right Panel (Document Evidence) */}
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          <Box sx={{ p: 4, flexGrow: 1, overflowY: 'auto' }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>Uploaded Credentials</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Please review all documents carefully before approving.
            </Typography>

            <Grid container spacing={3}>
              {[
                { name: 'Medical_Degree_Diploma.pdf', size: '2.4 MB', type: 'Diploma' },
                { name: 'Professional_Insurance.pdf', size: '1.1 MB', type: 'Insurance' },
                { name: 'Identity_Card_Front.jpg', size: '3.5 MB', type: 'ID' },
              ].map((doc, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      p: 2, 
                      borderRadius: 2, 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: 2,
                      transition: 'all 0.2s',
                      '&:hover': { borderColor: '#3b82f6', boxShadow: 1 }
                    }}
                  >
                    <Avatar variant="rounded" sx={{ bgcolor: '#eff6ff', color: '#3b82f6' }}>
                      <Description />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="subtitle2" fontWeight={600}>{doc.name}</Typography>
                      <Typography variant="caption" color="text.secondary">{doc.type} • {doc.size}</Typography>
                    </Box>
                    <Button startIcon={<Visibility />} size="small" sx={{ textTransform: 'none' }}>
                      View
                    </Button>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            
            <Box sx={{ mt: 4, p: 3, bgcolor: '#fff7ed', borderRadius: 2, border: '1px dashed #fdba74' }}>
              <Typography variant="subtitle2" fontWeight={700} color="#9a3412" gutterBottom>
                Verification Guidelines
              </Typography>
              <Typography variant="body2" color="#9a3412" paragraph>
                1. Ensure the name on the diploma matches the ID card.<br/>
                2. Verify the license number against the national medical registry.<br/>
                3. Check the expiration date on the professional insurance.
              </Typography>
            </Box>

          </Box>

          {/* 3. Action Footer (Sticky Bottom Bar) */}
          <Paper 
            elevation={10} 
            sx={{ 
              p: 3, 
              borderTop: '1px solid #e2e8f0', 
              zIndex: 10,
              bgcolor: 'white'
            }}
          >
            <Stack spacing={2}>
               <TextField
                 fullWidth
                 multiline
                 rows={2}
                 placeholder="Reason for rejection (Optional, visible to applicant)"
                 value={rejectionReason}
                 onChange={(e) => setRejectionReason(e.target.value)}
                 variant="outlined"
                 sx={{ mb: 1 }}
               />
               <Stack direction="row" spacing={2} justifyContent="flex-end">
                 <Button 
                   variant="outlined" 
                   color="error" 
                   size="large" 
                   startIcon={<Cancel />}
                   sx={{ 
                     fontWeight: 700, 
                     borderWidth: 2,
                     '&:hover': { borderWidth: 2 }
                   }}
                 >
                   Reject Application
                 </Button>
                 <Button 
                   variant="contained" 
                   color="success" 
                   size="large" 
                   startIcon={<VerifiedUser />}
                   sx={{ 
                     fontWeight: 700, 
                     bgcolor: '#16a34a',
                     '&:hover': { bgcolor: '#15803d' },
                     px: 4
                   }}
                 >
                   Approve & Activate Account
                 </Button>
               </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
