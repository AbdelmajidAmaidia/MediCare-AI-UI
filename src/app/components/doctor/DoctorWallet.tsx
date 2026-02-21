import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tooltip,
  IconButton,
  Chip,
} from '@mui/material';
import {
  AccountBalanceWallet as WalletIcon,
  Info as InfoIcon,
  TrendingUp as TrendingUpIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const data = [
  { day: '1', revenue: 120 },
  { day: '5', revenue: 300 },
  { day: '10', revenue: 250 },
  { day: '15', revenue: 450 },
  { day: '20', revenue: 380 },
  { day: '25', revenue: 520 },
  { day: '30', revenue: 600 },
];

const transactions = [
  { id: 1, date: 'Feb 8, 2026', patient: 'Michael Chen', service: 'Teleconsultation - Cardiology', amount: 50.00, fee: 5.00, net: 45.00 },
  { id: 2, date: 'Feb 8, 2026', patient: 'Sarah Johnson', service: 'Follow-up Visit', amount: 30.00, fee: 3.00, net: 27.00 },
  { id: 3, date: 'Feb 7, 2026', patient: 'Emma Wilson', service: 'Prescription Renewal', amount: 20.00, fee: 2.00, net: 18.00 },
  { id: 4, date: 'Feb 6, 2026', patient: 'Robert Brown', service: 'Teleconsultation - General', amount: 50.00, fee: 5.00, net: 45.00 },
];

export default function DoctorWallet() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" fontWeight={600} sx={{ mb: 4 }}>
        Earnings & Wallet
      </Typography>

      {/* Top Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card 
            elevation={0} 
            sx={{ 
              bgcolor: 'primary.main', 
              color: 'primary.contrastText',
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box 
              sx={{ 
                position: 'absolute', 
                right: -20, 
                top: -20, 
                opacity: 0.1 
              }}
            >
              <WalletIcon sx={{ fontSize: 180 }} />
            </Box>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="subtitle1" sx={{ opacity: 0.8, mb: 1 }}>
                Available Balance
              </Typography>
              <Typography variant="h2" fontWeight={700} sx={{ mb: 3 }}>
                €2,450.00
              </Typography>
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'white', 
                  color: 'primary.main', 
                  fontWeight: 600,
                  '&:hover': { bgcolor: 'grey.100' }
                }}
              >
                Withdraw to Bank
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card elevation={0} variant="outlined" sx={{ borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1" color="text.secondary" fontWeight={500}>
                  Pending (Escrow)
                </Typography>
                <Tooltip title="Funds are held securely and released 24 hours after successful consultation completion.">
                  <IconButton size="small" sx={{ ml: 1 }}>
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
              <Typography variant="h3" fontWeight={700} color="text.secondary" sx={{ mb: 1 }}>
                €150.00
              </Typography>
              <Typography variant="body2" color="text.secondary">
                3 consultations pending completion
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Chart Section */}
        <Grid item xs={12} lg={8}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
                <Typography variant="h6" fontWeight={600}>
                  Revenue this Month
                </Typography>
                <Chip icon={<TrendingUpIcon />} label="+12.5% vs last month" color="success" size="small" variant="outlined" />
              </Box>
              <Box sx={{ height: 300, width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2e7d32" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#2e7d32" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9e9e9e'}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#9e9e9e'}} prefix="€" />
                    <RechartsTooltip 
                      contentStyle={{ borderRadius: 8, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      formatter={(value: number) => [`€${value}`, 'Revenue']}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#2e7d32" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        
        {/* Quick Stats or Actions */}
        <Grid item xs={12} lg={4}>
           <Card variant="outlined" sx={{ height: '100%', borderRadius: 2, bgcolor: 'grey.50' }}>
             <CardContent>
               <Typography variant="h6" fontWeight={600} gutterBottom>
                 Payment Methods
               </Typography>
               <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2, border: '1px solid #e0e0e0', mb: 2 }}>
                 <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <Box>
                     <Typography variant="subtitle2">IBAN ending in 8829</Typography>
                     <Typography variant="caption" color="text.secondary">BNP Paribas • Primary</Typography>
                   </Box>
                   <Chip label="Verified" color="success" size="small" />
                 </Box>
               </Box>
               <Button variant="outlined" fullWidth sx={{ mb: 4 }}>Manage Bank Accounts</Button>

               <Typography variant="h6" fontWeight={600} gutterBottom>
                 Tax Documents
               </Typography>
               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                 <Button startIcon={<DownloadIcon />} color="inherit" sx={{ justifyContent: 'flex-start' }}>
                   Monthly Statement (Jan 2026)
                 </Button>
                 <Button startIcon={<DownloadIcon />} color="inherit" sx={{ justifyContent: 'flex-start' }}>
                   Annual Report 2025
                 </Button>
               </Box>
             </CardContent>
           </Card>
        </Grid>

        {/* Transactions Table */}
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                Recent Transactions
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'grey.50' }}>
                      <TableCell>Date</TableCell>
                      <TableCell>Patient</TableCell>
                      <TableCell>Service</TableCell>
                      <TableCell align="right">Amount (Gross)</TableCell>
                      <TableCell align="right">Platform Fee (10%)</TableCell>
                      <TableCell align="right">Net Earnings</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell color="text.secondary">{row.date}</TableCell>
                        <TableCell fontWeight={500}>{row.patient}</TableCell>
                        <TableCell>{row.service}</TableCell>
                        <TableCell align="right" sx={{ color: 'text.secondary' }}>€{row.amount.toFixed(2)}</TableCell>
                        <TableCell align="right" sx={{ color: 'error.main' }}>- €{row.fee.toFixed(2)}</TableCell>
                        <TableCell align="right">
                          <Chip 
                            label={`€${row.net.toFixed(2)}`} 
                            color="success" 
                            variant="outlined" 
                            size="small"
                            sx={{ fontWeight: 700, bgcolor: '#f1f8e9', border: 'none' }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
