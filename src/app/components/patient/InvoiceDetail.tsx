import React from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Divider,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
  Download as DownloadIcon,
  MedicalServices as LogoIcon,
} from '@mui/icons-material';

interface InvoiceDetailProps {
  open: boolean;
  onClose: () => void;
  invoiceId?: string;
}

export default function InvoiceDetail({ open, onClose, invoiceId = "INV-2026-099" }: InvoiceDetailProps) {
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { 
          borderRadius: 1,
          bgcolor: '#f5f5f5', // Contrast background for the dialog backdrop feel
          p: 2
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Actual Paper Invoice */}
      <Box 
        sx={{ 
          bgcolor: 'white', 
          p: 6, 
          borderRadius: 1, 
          boxShadow: 1, 
          mx: 'auto', 
          width: '100%',
          maxWidth: 800 
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LogoIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h5" fontWeight={700} color="primary.main">
              MediCare AI
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              INVOICE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              #{invoiceId}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Feb 8, 2026
            </Typography>
            <Chip 
              label="PAID" 
              color="success" 
              size="small" 
              sx={{ fontWeight: 700, borderRadius: 1 }}
            />
          </Box>
        </Box>

        {/* Bill To */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            BILL TO
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            Sarah Martinez
          </Typography>
          <Typography variant="body2" color="text.secondary">
            123 Wellness Blvd<br />
            San Francisco, CA 94105<br />
            United States
          </Typography>
        </Box>

        {/* Line Items */}
        <TableContainer sx={{ mb: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 600, pl: 0 }}>Description</TableCell>
                <TableCell align="right" sx={{ fontWeight: 600, pr: 0 }}>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{ pl: 0, py: 2 }}>
                  <Typography variant="body1" fontWeight={500}>
                    Teleconsultation - Cardiology
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Dr. Sarah Wilson • 30 mins
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ pr: 0, py: 2 }}>€30.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ pl: 0, py: 2 }}>
                  <Typography variant="body1" fontWeight={500}>
                    Platform Fee
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Secure Processing & Hosting
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ pr: 0, py: 2 }}>€2.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell sx={{ pl: 0, py: 2 }}>
                  <Typography variant="body1" fontWeight={500}>
                    Pharmacy Order #ORD-8821
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Amoxicillin 500mg + Delivery
                  </Typography>
                </TableCell>
                <TableCell align="right" sx={{ pr: 0, py: 2 }}>€15.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ mb: 4 }} />

        {/* Footer */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 6 }}>
          <Box>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              PAYMENT METHOD
            </Typography>
            <Typography variant="body2">
              Visa ending in 4242
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Processed on Feb 8, 2026
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Total Amount
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              €47.00
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<DownloadIcon />}
            sx={{ px: 4, py: 1.5, borderRadius: 2 }}
          >
            Download PDF
          </Button>
          <Typography variant="caption" display="block" color="text.secondary" sx={{ mt: 2 }}>
            Thank you for trusting MediCare AI with your health.
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}
