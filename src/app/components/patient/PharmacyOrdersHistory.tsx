import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Divider,
} from '@mui/material';
import {
  LocalShipping as DeliveryIcon,
  Receipt as InvoiceIcon,
  Replay as ReorderIcon,
  Medication as PillIcon,
} from '@mui/icons-material';

interface OrderItem {
  name: string;
  dosage: string;
}

interface ActiveOrder {
  id: string;
  date: string;
  status: number; // 0: Ordered, 1: Preparing, 2: Out for Delivery, 3: Delivered
  items: OrderItem[];
}

interface PastOrder {
  id: string;
  date: string;
  items: string;
  total: string;
  status: 'Delivered' | 'Cancelled';
}

const activeOrders: ActiveOrder[] = [
  {
    id: 'ORD-2024-001',
    date: 'Feb 6, 2026',
    status: 1, // Preparing
    items: [
      { name: 'Amoxicillin', dosage: '500mg' },
      { name: 'Paracetamol', dosage: '500mg' },
    ],
  },
  {
    id: 'ORD-2024-003',
    date: 'Feb 7, 2026',
    status: 0, // Ordered
    items: [
      { name: 'Lisinopril', dosage: '10mg' },
    ],
  },
];

const pastOrders: PastOrder[] = [
  { id: 'ORD-2023-089', date: 'Jan 15, 2026', items: 'Ibuprofen, Vitamin D', total: '$24.50', status: 'Delivered' },
  { id: 'ORD-2023-054', date: 'Dec 22, 2025', items: 'Metformin', total: '$12.00', status: 'Delivered' },
];

const steps = ['Ordered', 'Preparing', 'Out for Delivery', 'Delivered'];

export default function PharmacyOrdersHistory() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: 600, color: 'primary.main' }}>
        My Prescriptions
      </Typography>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Active Orders
      </Typography>
      
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 5 }}>
        {activeOrders.map((order) => (
          <Card key={order.id} variant="outlined" sx={{ boxShadow: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={700}>
                    Order #{order.id}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Placed on {order.date}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" startIcon={<InvoiceIcon />} size="small">
                    View Invoice
                  </Button>
                  <Button variant="contained" startIcon={<DeliveryIcon />} size="small">
                    Track Delivery
                  </Button>
                </Box>
              </Box>

              <Box sx={{ width: '100%', mb: 4 }}>
                <Stepper activeStep={order.status} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Typography variant="subtitle2" sx={{ mb: 1 }}>
                Items in this order:
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {order.items.map((item, index) => (
                  <Chip
                    key={index}
                    icon={<PillIcon />}
                    label={`${item.name} ${item.dosage}`}
                    variant="outlined"
                    size="small"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Order History
      </Typography>
      
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'grey.50' }}>
              <TableCell>Order ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pastOrders.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell font-weight="medium">{row.id}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.items}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  <Chip label={row.status} color="success" size="small" variant="outlined" />
                </TableCell>
                <TableCell align="right">
                  <Button startIcon={<ReorderIcon />} size="small">
                    Re-order
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
