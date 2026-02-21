import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  Chip,
} from '@mui/material';
import {
  AccountBalanceWallet as WalletIcon,
  Description as FileIcon,
  Download as DownloadIcon,
  TrendingUp as TrendingUpIcon,
  CheckCircle as CheckCircleIcon,
  Lock as LockIcon,
} from '@mui/icons-material';

export default function LabPayroll() {
  const performance = {
    current: 145,
    goal: 150,
    percentage: (145 / 150) * 100,
  };

  const payslips = [
    { month: 'January 2026', date: 'Jan 31, 2026', status: 'Processed' },
    { month: 'December 2025', date: 'Dec 31, 2025', status: 'Processed' },
    { month: 'November 2025', date: 'Nov 30, 2025', status: 'Processed' },
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 4 }}>
        My Payroll & Performance
      </Typography>

      <Grid container spacing={4}>
        {/* Header Card: Monthly Salary Summary */}
        <Grid item xs={12}>
          <Card 
            sx={{ 
              background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)', 
              color: 'white',
              borderRadius: 3,
              boxShadow: 4 
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Grid container alignItems="center" spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography variant="subtitle1" sx={{ opacity: 0.8, mb: 1 }}>
                    Estimated Payout (Feb 2026)
                  </Typography>
                  <Typography variant="h2" fontWeight={700} sx={{ mb: 2 }}>
                    €3,450.00
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 3 }}>
                    <Box>
                      <Typography variant="caption" sx={{ opacity: 0.7 }}>Base Salary</Typography>
                      <Typography variant="h6">€3,000.00</Typography>
                    </Box>
                    <Box sx={{ borderLeft: '1px solid rgba(255,255,255,0.3)', pl: 3 }}>
                      <Typography variant="caption" sx={{ opacity: 0.7 }}>Performance Bonus</Typography>
                      <Typography variant="h6" color="lightgreen">+ €450.00</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
                   <Button 
                     variant="contained" 
                     sx={{ 
                       bgcolor: 'white', 
                       color: '#1565c0', 
                       fontWeight: 700,
                       '&:hover': { bgcolor: 'grey.100' }
                     }}
                     startIcon={<WalletIcon />}
                   >
                     View Details
                   </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Performance Tracker */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: 'warning.light', color: 'warning.dark', mr: 2 }}>
                  <TrendingUpIcon />
                </Avatar>
                <Typography variant="h6" fontWeight={600}>
                  Monthly Performance
                </Typography>
              </Box>

              <Box sx={{ textAlign: 'center', my: 4 }}>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                  <Box sx={{ position: 'relative' }}>
                    {/* Background Circle */}
                    <Box 
                      sx={{ 
                        width: 160, 
                        height: 160, 
                        borderRadius: '50%', 
                        border: '10px solid #f5f5f5',
                      }} 
                    />
                     {/* Circular Progress would normally use a library or SVG, simulating with CSS/Box here for simplicity or using Linear if easier, but user asked for Circular. 
                         I'll use a simple SVG implementation for the circular progress.
                     */}
                    <svg style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }} width="160" height="160">
                       <circle
                         cx="80"
                         cy="80"
                         r="70"
                         stroke="#e0e0e0"
                         strokeWidth="10"
                         fill="none"
                       />
                       <circle
                         cx="80"
                         cy="80"
                         r="70"
                         stroke="#2e7d32"
                         strokeWidth="10"
                         fill="none"
                         strokeDasharray={440}
                         strokeDashoffset={440 - (440 * performance.percentage) / 100}
                         strokeLinecap="round"
                       />
                    </svg>
                  </Box>
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <Typography variant="h4" fontWeight={700} color="text.primary">
                      {performance.current}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      of {performance.goal} tests
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ bgcolor: 'grey.50', p: 2, borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                 {performance.current >= 150 ? <CheckCircleIcon color="success" /> : <LockIcon color="action" />}
                 <Box>
                   <Typography variant="subtitle2" fontWeight={600}>
                     €150 Bonus
                   </Typography>
                   <Typography variant="caption" color="text.secondary">
                     {performance.current >= 150 ? 'Unlocked!' : 'Unlocks at 150 completed tests'}
                   </Typography>
                 </Box>
                 {performance.current < 150 && (
                   <Chip size="small" label={`${150 - performance.current} to go`} color="primary" variant="outlined" sx={{ ml: 'auto' }} />
                 )}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Payslip History */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%', borderRadius: 2 }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main', mr: 2 }}>
                  <FileIcon />
                </Avatar>
                <Typography variant="h6" fontWeight={600}>
                  Payslip History
                </Typography>
              </Box>

              <List>
                {payslips.map((slip, index) => (
                  <React.Fragment key={index}>
                    <ListItem 
                      secondaryAction={
                        <Button startIcon={<DownloadIcon />} size="small">
                          PDF
                        </Button>
                      }
                      sx={{ px: 0 }}
                    >
                      <ListItemText 
                        primary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Typography fontWeight={500}>{slip.month}</Typography>
                            <Chip 
                              label={slip.status} 
                              size="small" 
                              color={slip.status === 'Processed' ? 'success' : 'warning'} 
                              variant={slip.status === 'Processed' ? 'filled' : 'outlined'}
                              sx={{ height: 20, fontSize: '0.7rem' }}
                            />
                          </Box>
                        }
                        secondary={`Issued: ${slip.date}`}
                      />
                    </ListItem>
                    {index < payslips.length - 1 && <Divider />}
                  </React.Fragment>
                ))}
              </List>
              
              <Button fullWidth variant="outlined" sx={{ mt: 2 }}>
                View All Documents
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
