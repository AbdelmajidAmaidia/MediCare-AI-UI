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
  Chip,
  Tooltip,
  Button,
  Switch,
  Divider,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  AccountBalance as BankIcon,
  Info as InfoIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const data = [
  { day: 'Mon', volume: 12, revenue: 450 },
  { day: 'Tue', volume: 19, revenue: 780 },
  { day: 'Wed', volume: 15, revenue: 600 },
  { day: 'Thu', volume: 22, revenue: 950 },
  { day: 'Fri', volume: 28, revenue: 1200 },
  { day: 'Sat', volume: 18, revenue: 720 },
  { day: 'Sun', volume: 10, revenue: 380 },
];

const transactions = [
  { id: 'ORD-8821', items: 'Amoxicillin 500mg, Paracetamol...', total: 20.00, fee: 2.00, net: 18.00, status: 'Completed' },
  { id: 'ORD-8822', items: 'Insulin Glargine, Needles', total: 150.00, fee: 15.00, net: 135.00, status: 'Completed' },
  { id: 'ORD-8823', items: 'Vitamin D3, Calcium', total: 45.00, fee: 4.50, net: 40.50, status: 'Pending' },
  { id: 'ORD-8824', items: 'Ibuprofen 400mg', total: 12.50, fee: 1.25, net: 11.25, status: 'Completed' },
];

export default function PharmacyWallet() {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" fontWeight={600}>
          Business Wallet
        </Typography>
        <Chip label="Store Open" color="success" variant="outlined" />
      </Box>

      {/* KPIs */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={0} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Today's Sales</Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                <Typography variant="h4" fontWeight={700}>€850.50</Typography>
                <Chip icon={<TrendingUpIcon />} label="+12%" color="success" size="small" sx={{ height: 24 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={0} variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Pending Payouts</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="h4" fontWeight={700}>€2,100.00</Typography>
                <Tooltip title="Funds from MediCare AI escrow ready to be transferred">
                  <InfoIcon color="action" fontSize="small" />
                </Tooltip>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={0} variant="outlined" sx={{ borderRadius: 2, bgcolor: '#f1f8e9', borderColor: '#c5e1a5' }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>Net Profit (Est.)</Typography>
              <Typography variant="h4" fontWeight={700} color="success.main">€640.00</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        {/* Main Chart */}
        <Grid item xs={12} lg={8}>
          <Card variant="outlined" sx={{ borderRadius: 2, height: '100%' }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>Performance Overview</Typography>
              <Box sx={{ flexGrow: 1, minHeight: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" axisLine={false} tickLine={false} prefix="€" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" axisLine={false} tickLine={false} />
                    <RechartsTooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ borderRadius: 8 }}
                    />
                    <Legend />
                    <Bar yAxisId="left" dataKey="revenue" name="Revenue (€)" fill="#1976d2" radius={[4, 4, 0, 0]} />
                    <Bar yAxisId="right" dataKey="volume" name="Orders" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Payout Settings */}
        <Grid item xs={12} lg={4}>
          <Card variant="outlined" sx={{ borderRadius: 2, height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>Payout Settings</Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>Linked Bank Account</Typography>
                <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <BankIcon color="primary" fontSize="large" />
                  <Box>
                    <Typography variant="body2" fontWeight={600}>BNP Paribas</Typography>
                    <Typography variant="caption" color="text.secondary">IBAN •••• 8899</Typography>
                  </Box>
                  <Button size="small" sx={{ ml: 'auto' }}>Edit</Button>
                </Box>
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="subtitle2" fontWeight={600}>Auto-Payout</Typography>
                  <Switch defaultChecked />
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', bgcolor: 'grey.50', p: 1.5, borderRadius: 1 }}>
                  <ScheduleIcon fontSize="small" />
                  <Typography variant="body2">Weekly (Every Monday)</Typography>
                </Box>
              </Box>

              <Button variant="contained" fullWidth size="large" sx={{ mt: 2 }}>
                Initiate Instant Payout
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Transactions Table */}
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>Recent Transactions</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'grey.50' }}>
                      <TableCell>Order ID</TableCell>
                      <TableCell>Medications</TableCell>
                      <TableCell align="right">Total Amount</TableCell>
                      <TableCell align="right">Platform Fee (10%)</TableCell>
                      <TableCell align="right">Net Earning</TableCell>
                      <TableCell align="center">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {transactions.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell fontWeight={500}>{row.id}</TableCell>
                        <TableCell sx={{ maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {row.items}
                        </TableCell>
                        <TableCell align="right">€{row.total.toFixed(2)}</TableCell>
                        <TableCell align="right" sx={{ color: 'text.secondary' }}>- €{row.fee.toFixed(2)}</TableCell>
                        <TableCell align="right">
                          <Tooltip title={`€${row.total.toFixed(2)} - €${row.fee.toFixed(2)} Fee = €${row.net.toFixed(2)}`}>
                            <Typography fontWeight={700} color="success.main" sx={{ cursor: 'help' }}>
                              €{row.net.toFixed(2)}
                            </Typography>
                          </Tooltip>
                        </TableCell>
                        <TableCell align="center">
                          <Chip 
                            label={row.status} 
                            color={row.status === 'Completed' ? 'success' : 'warning'} 
                            size="small" 
                            variant="outlined" 
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
