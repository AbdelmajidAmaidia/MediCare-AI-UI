import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Chip,
  IconButton,
  TextField,
  MenuItem,
  Stack,
} from '@mui/material';
import {
  AttachMoney as MoneyIcon,
  AccountBalanceWallet as WalletIcon,
  FilterList as FilterIcon,
  Download as DownloadIcon,
  ArrowForward as ArrowIcon,
} from '@mui/icons-material';

const transactions = [
  { id: 'TXN-8821', date: 'Feb 8, 2026', type: 'Consultation', amount: 50.00, fee: 5.00, payout: 45.00, status: 'Cleared', user: 'Dr. Smith' },
  { id: 'TXN-8822', date: 'Feb 8, 2026', type: 'Subscription', amount: 19.99, fee: 19.99, payout: 0.00, status: 'Cleared', user: 'Patient Sarah' },
  { id: 'TXN-8823', date: 'Feb 7, 2026', type: 'Consultation', amount: 30.00, fee: 3.00, payout: 27.00, status: 'Held', user: 'Dr. Jones' },
  { id: 'TXN-8824', date: 'Feb 7, 2026', type: 'Refund', amount: -50.00, fee: -5.00, payout: -45.00, status: 'Processed', user: 'Patient Mike' },
];

const pendingWithdrawals = [
  { id: 1, doctor: 'Dr. John Smith', amount: 1250.00, method: 'Bank Transfer (IBAN...8821)' },
  { id: 2, doctor: 'Dr. Emily Chen', amount: 840.50, method: 'Bank Transfer (IBAN...9921)' },
];

export default function FinancialAdminPanel() {
  return (
    <Box sx={{ p: 3, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: '#1a237e' }}>
        Financial Overview
      </Typography>

      {/* Top Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card elevation={0} sx={{ bgcolor: '#1a237e', color: 'white', borderRadius: 2 }}>
            <CardContent sx={{ position: 'relative', overflow: 'hidden' }}>
              <Box sx={{ position: 'absolute', right: -20, top: -20, opacity: 0.1 }}>
                <MoneyIcon sx={{ fontSize: 180 }} />
              </Box>
              <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>Total Platform Revenue</Typography>
              <Typography variant="h3" fontWeight={700} sx={{ mb: 1 }}>€12,450.00</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>This Month</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
           <Card elevation={0} sx={{ bgcolor: 'white', border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WalletIcon color="action" sx={{ mr: 1 }} />
                <Typography variant="subtitle1" color="text.secondary">Payouts to Doctors</Typography>
              </Box>
              <Typography variant="h3" fontWeight={700} color="text.primary" sx={{ mb: 1 }}>€112,050.00</Typography>
              <Typography variant="body2" color="text.secondary">Total Disbursed (This Month)</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Main Transaction Log */}
        <Grid item xs={12} lg={8}>
          <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" fontWeight={600}>Transaction Log</Typography>
              <Stack direction="row" spacing={1}>
                <TextField select size="small" defaultValue="all" sx={{ width: 120 }}>
                   <MenuItem value="all">All Types</MenuItem>
                   <MenuItem value="consultation">Consultation</MenuItem>
                   <MenuItem value="subscription">Subscription</MenuItem>
                </TextField>
                <IconButton>
                  <FilterIcon />
                </IconButton>
                <IconButton>
                  <DownloadIcon />
                </IconButton>
              </Stack>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: 'grey.50' }}>
                    <TableCell>ID / Date</TableCell>
                    <TableCell>User / Type</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Fee (10%)</TableCell>
                    <TableCell align="right">Net Payout</TableCell>
                    <TableCell align="center">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((row) => (
                    <TableRow key={row.id} hover>
                      <TableCell>
                        <Typography variant="body2" fontWeight={600}>{row.id}</Typography>
                        <Typography variant="caption" color="text.secondary">{row.date}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{row.user}</Typography>
                        <Chip 
                          label={row.type} 
                          size="small" 
                          variant="outlined" 
                          color={row.type === 'Refund' ? 'error' : 'default'} 
                          sx={{ height: 20, fontSize: '0.65rem', mt: 0.5 }} 
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontWeight={600} color={row.amount < 0 ? 'error.main' : 'success.main'}>
                          {row.amount < 0 ? '-' : '+'}€{Math.abs(row.amount).toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right" sx={{ color: 'text.secondary' }}>
                        €{Math.abs(row.fee).toFixed(2)}
                      </TableCell>
                      <TableCell align="right" sx={{ fontWeight: 600 }}>
                         €{Math.abs(row.payout).toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <Chip 
                          label={row.status} 
                          size="small" 
                          color={row.status === 'Cleared' ? 'success' : row.status === 'Held' ? 'warning' : 'default'}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Payout Control */}
        <Grid item xs={12} lg={4}>
          <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}>
            <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
              <Typography variant="h6" fontWeight={600}>Pending Withdrawals</Typography>
            </Box>
            <Box sx={{ p: 2 }}>
              {pendingWithdrawals.map((item) => (
                <Paper key={item.id} variant="outlined" sx={{ p: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography fontWeight={600}>{item.doctor}</Typography>
                    <Typography fontWeight={700}>€{item.amount.toFixed(2)}</Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                    {item.method}
                  </Typography>
                  <Button variant="contained" fullWidth size="small" endIcon={<ArrowIcon />}>
                    Release Funds
                  </Button>
                </Paper>
              ))}
              <Button color="primary" fullWidth sx={{ mt: 1 }}>
                View All Payout Requests
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
