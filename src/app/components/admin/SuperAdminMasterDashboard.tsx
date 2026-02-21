import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  Stack,
  IconButton,
  Avatar,
  Divider,
  LinearProgress
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  VerifiedUser as VerifiedIcon,
  Warning as WarningIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  Visibility as VisibilityIcon,
  Settings as SettingsIcon,
  Edit as EditIcon
} from '@mui/icons-material';

// --- Mock Data ---
const doctorsQueue = [
  { id: 1, name: 'Dr. Gregory House', license: '#99281', specialty: 'Diagnostician', doc: 'Diplomas.pdf' },
  { id: 2, name: 'Dr. Meredith Grey', license: '#33421', specialty: 'General Surgery', doc: 'Board_Cert.pdf' },
  { id: 3, name: 'Dr. John Dorian', license: '#11234', specialty: 'Internal Medicine', doc: 'License.pdf' },
  { id: 4, name: 'Dr. Strange', license: '#77777', specialty: 'Neurosurgeon', doc: 'Magic.pdf' },
  { id: 5, name: 'Dr. Who', license: '#00000', specialty: 'General Practice', doc: 'Tardis_Manual.pdf' },
];

export default function SuperAdminMasterDashboard() {
  return (
    <Box sx={{ p: 3, bgcolor: '#f1f5f9', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={800} color="#0f172a">
          Master Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Overview for {new Date().toLocaleDateString()}
        </Typography>
      </Box>

      {/* 1. Top Stats Row (KPIs) */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ border: '1px solid #e2e8f0', height: '100%' }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="overline" color="text.secondary" fontWeight={600}>Total Revenue</Typography>
                  <Typography variant="h4" fontWeight={700} color="#0f172a">€124,500</Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#dcfce7', color: '#16a34a' }}><TrendingUpIcon /></Avatar>
              </Box>
              <Stack direction="row" alignItems="center" spacing={1}>
                 <TrendingUpIcon fontSize="small" color="success" />
                 <Typography variant="caption" color="success.main" fontWeight={600}>+12% this month</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ border: '1px solid #e2e8f0', height: '100%' }}>
            <CardContent>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="overline" color="text.secondary" fontWeight={600}>Platform Fees (10%)</Typography>
                  <Typography variant="h4" fontWeight={700} color="#0f172a">€12,450</Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#e0f2fe', color: '#0284c7' }}><VerifiedIcon /></Avatar>
              </Box>
              <LinearProgress variant="determinate" value={70} sx={{ borderRadius: 2, height: 6, bgcolor: '#f1f5f9', '& .MuiLinearProgress-bar': { bgcolor: '#0ea5e9' } }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={0} sx={{ border: '1px solid #e2e8f0', height: '100%' }}>
            <CardContent>
               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Box>
                  <Typography variant="overline" color="text.secondary" fontWeight={600}>Pending Verifications</Typography>
                  <Typography variant="h4" fontWeight={700} color="#0f172a">5 Doctors</Typography>
                </Box>
                <Badge badgeContent={5} color="error">
                   <Avatar sx={{ bgcolor: '#fee2e2', color: '#dc2626' }}><PeopleIcon /></Avatar>
                </Badge>
              </Box>
              <Chip label="Requires Action" color="error" size="small" icon={<WarningIcon />} sx={{ fontWeight: 600 }} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* 2. Main Section: User Verification Queue */}
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={700}>User Verification Queue</Typography>
              <Button size="small" variant="outlined">View All</Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead sx={{ bgcolor: '#f8fafc' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>Doctor Name</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>License ID</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>Specialty</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: 'text.secondary' }}>Documents</TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: 'text.secondary' }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {doctorsQueue.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <Avatar sx={{ width: 32, height: 32, bgcolor: '#f1f5f9', color: '#64748b' }}>{row.name.charAt(4)}</Avatar>
                          <Typography variant="body2" fontWeight={600}>{row.name}</Typography>
                        </Stack>
                      </TableCell>
                      <TableCell><Typography variant="body2" fontFamily="monospace">{row.license}</Typography></TableCell>
                      <TableCell><Chip label={row.specialty} size="small" variant="outlined" /></TableCell>
                      <TableCell>
                        <Button 
                          startIcon={<VisibilityIcon />} 
                          size="small" 
                          sx={{ textTransform: 'none', color: 'text.secondary' }}
                        >
                          {row.doc}
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        <Stack direction="row" spacing={1} justifyContent="flex-end">
                          <IconButton color="success" size="small" sx={{ bgcolor: '#dcfce7', '&:hover': { bgcolor: '#bbf7d0' } }}>
                            <CheckIcon fontSize="small" />
                          </IconButton>
                          <IconButton color="error" size="small" sx={{ bgcolor: '#fee2e2', '&:hover': { bgcolor: '#fecaca' } }}>
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* 3. Secondary Section: Platform Settings */}
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} sx={{ border: '1px solid #e2e8f0', borderRadius: 2, p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <SettingsIcon color="action" />
              <Typography variant="h6" fontWeight={700}>Platform Settings</Typography>
            </Box>
            
            <Typography variant="subtitle2" fontWeight={600} gutterBottom>Subscription Pricing</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Manage the monthly tiers for patient accounts.
            </Typography>

            <Stack spacing={2}>
              {[
                { name: 'Starter', price: '€0', badge: 'Free' },
                { name: 'Health+', price: '€9.99', badge: 'Popular' },
                { name: 'Family', price: '€19.99', badge: 'Premium' },
              ].map((tier) => (
                <Box 
                  key={tier.name} 
                  sx={{ 
                    p: 2, 
                    border: '1px solid #e2e8f0', 
                    borderRadius: 2, 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    bgcolor: '#fff'
                  }}
                >
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>{tier.name}</Typography>
                    <Typography variant="caption" color="text.secondary">{tier.badge}</Typography>
                  </Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body1" fontWeight={600}>{tier.price}</Typography>
                    <IconButton size="small"><EditIcon fontSize="small" /></IconButton>
                  </Stack>
                </Box>
              ))}
            </Stack>

            <Button fullWidth variant="contained" sx={{ mt: 4, bgcolor: '#0f172a' }}>
              Update Global Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
