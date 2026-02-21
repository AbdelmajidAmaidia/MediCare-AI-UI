import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  IconButton,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  TextField,
} from '@mui/material';
import {
  PictureAsPdf as PdfIcon,
  Visibility as ViewIcon,
  Search as SearchIcon,
  FilterList as FilterIcon,
  CreditCard as PaymentIcon,
} from '@mui/icons-material';
import PaymentModal from './PaymentModal';
import InvoiceDetail from './InvoiceDetail';

interface Invoice {
  id: string;
  date: string;
  description: string;
  amount: number;
  status: 'Paid' | 'Pending';
  type: 'Consultation' | 'Pharmacy';
}

const mockInvoices: Invoice[] = [
  { id: 'INV-2026-001', date: 'Feb 8, 2026', description: 'Video Consultation - Dr. Wilson', amount: 55.00, status: 'Pending', type: 'Consultation' },
  { id: 'INV-2026-002', date: 'Feb 1, 2026', description: 'Pharmacy Order #ORD-2024-001', amount: 24.50, status: 'Paid', type: 'Pharmacy' },
  { id: 'INV-2025-089', date: 'Dec 15, 2025', description: 'Lab Test - Blood Panel', amount: 120.00, status: 'Paid', type: 'Consultation' },
  { id: 'INV-2025-054', date: 'Nov 22, 2025', description: 'Pharmacy Order #ORD-2023-054', amount: 12.00, status: 'Paid', type: 'Pharmacy' },
  { id: 'INV-2025-012', date: 'Oct 10, 2025', description: 'Physical Checkup - Dr. Johnson', amount: 75.00, status: 'Paid', type: 'Consultation' },
];

export default function BillingHistory() {
  const [filterYear, setFilterYear] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [invoiceDetailOpen, setInvoiceDetailOpen] = useState(false);
  const [selectedInvoiceAmount, setSelectedInvoiceAmount] = useState(55);

  const handlePayClick = (amount: number) => {
    setSelectedInvoiceAmount(amount);
    setPaymentModalOpen(true);
  };

  const handleViewClick = () => {
    setInvoiceDetailOpen(true);
  };

  const filteredInvoices = mockInvoices.filter(invoice => {
    const matchesYear = filterYear === 'All' || invoice.date.includes(filterYear);
    const matchesType = filterType === 'All' || invoice.type === filterType;
    const matchesSearch = invoice.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesYear && matchesType && matchesSearch;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Billing & Invoices
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<PaymentIcon />}
          onClick={() => handlePayClick(55)}
        >
          Pay Outstanding Balance ($55.00)
        </Button>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
            <Box sx={{ flexGrow: 1, minWidth: 200 }}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <FormControl size="small" sx={{ minWidth: 120 }}>
              <InputLabel>Year</InputLabel>
              <Select
                value={filterYear}
                label="Year"
                onChange={(e) => setFilterYear(e.target.value)}
              >
                <MenuItem value="All">All Years</MenuItem>
                <MenuItem value="2026">2026</MenuItem>
                <MenuItem value="2025">2025</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <InputLabel>Type</InputLabel>
              <Select
                value={filterType}
                label="Type"
                onChange={(e) => setFilterType(e.target.value)}
              >
                <MenuItem value="All">All Types</MenuItem>
                <MenuItem value="Consultation">Consultation</MenuItem>
                <MenuItem value="Pharmacy">Pharmacy</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.50' }}>
                  <TableCell>Invoice ID</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredInvoices.map((invoice) => (
                  <TableRow key={invoice.id} hover>
                    <TableCell sx={{ fontWeight: 500 }}>{invoice.id}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{invoice.description}</TableCell>
                    <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                    <TableCell>
                      <Chip 
                        label={invoice.status} 
                        color={invoice.status === 'Paid' ? 'success' : 'warning'} 
                        size="small" 
                        variant={invoice.status === 'Paid' ? 'outlined' : 'filled'}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton color="primary" size="small" title="Download PDF">
                        <PdfIcon />
                      </IconButton>
                      <IconButton size="small" title="View Details" onClick={handleViewClick}>
                        <ViewIcon />
                      </IconButton>
                      {invoice.status === 'Pending' && (
                        <Button 
                          size="small" 
                          variant="text" 
                          color="primary"
                          onClick={() => handlePayClick(invoice.amount)}
                        >
                          Pay
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
                {filteredInvoices.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 3 }}>
                      <Typography color="text.secondary">No invoices found matching your filters.</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      <PaymentModal 
        open={paymentModalOpen} 
        onClose={() => setPaymentModalOpen(false)} 
        amount={selectedInvoiceAmount}
      />
      
      <InvoiceDetail 
        open={invoiceDetailOpen} 
        onClose={() => setInvoiceDetailOpen(false)} 
      />
    </Box>
  );
}
