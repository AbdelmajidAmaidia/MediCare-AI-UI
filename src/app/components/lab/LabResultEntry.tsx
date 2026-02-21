import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from '@mui/material';
import {
  Save as SaveIcon,
  Send as SendIcon,
  AttachFile as AttachFileIcon,
  Delete as DeleteIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';

interface ResultRow {
  id: string;
  parameter: string;
  value: string;
  unit: string;
  refRange: string;
  min: number;
  max: number;
}

const initialRows: ResultRow[] = [
  { id: '1', parameter: 'Hemoglobin', value: '', unit: 'g/dL', refRange: '13.5 - 17.5', min: 13.5, max: 17.5 },
  { id: '2', parameter: 'White Blood Cell (WBC)', value: '', unit: 'x10^9/L', refRange: '4.5 - 11.0', min: 4.5, max: 11.0 },
  { id: '3', parameter: 'Platelets', value: '', unit: 'x10^9/L', refRange: '150 - 450', min: 150, max: 450 },
  { id: '4', parameter: 'Hematocrit', value: '', unit: '%', refRange: '41 - 50', min: 41, max: 50 },
];

export default function LabResultEntry() {
  const [rows, setRows] = useState<ResultRow[]>(initialRows);

  const handleValueChange = (id: string, newValue: string) => {
    setRows(rows.map(row => row.id === id ? { ...row, value: newValue } : row));
  };

  const isOutOfRange = (value: string, min: number, max: number) => {
    if (!value) return false;
    const num = parseFloat(value);
    return !isNaN(num) && (num < min || num > max);
  };

  return (
    <Box sx={{ p: 3, maxWidth: 1200, mx: 'auto' }}>
      {/* Header / Patient Info */}
      <Card sx={{ mb: 4, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ opacity: 0.8 }}>Lab Request #RQ-9822</Typography>
              <Typography variant="h4" fontWeight={600}>Michael Chen</Typography>
              <Box sx={{ display: 'flex', gap: 3, mt: 1 }}>
                <Typography variant="body2">Age: 42</Typography>
                <Typography variant="body2">Sex: Male</Typography>
                <Typography variant="body2">Blood Type: A+</Typography>
              </Box>
            </Box>
            <Box sx={{ textAlign: 'right' }}>
              <Chip 
                icon={<ScienceIcon sx={{ color: 'primary.main !important' }} />} 
                label="Complete Blood Count (CBC)" 
                sx={{ bgcolor: 'white', color: 'primary.main', fontWeight: 600, mb: 1 }} 
              />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Ordered by Dr. Johnson • Feb 7, 2026
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {/* Main Form */}
      <Grid container spacing={4}>
        <Grid size={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Test Results
              </Typography>
              
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'background.default' }}>
                      <TableCell width="30%">Parameter</TableCell>
                      <TableCell width="20%">Value</TableCell>
                      <TableCell width="15%">Unit</TableCell>
                      <TableCell width="25%">Reference Range</TableCell>
                      <TableCell width="10%">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => {
                      const error = isOutOfRange(row.value, row.min, row.max);
                      return (
                        <TableRow key={row.id}>
                          <TableCell sx={{ fontWeight: 500 }}>{row.parameter}</TableCell>
                          <TableCell>
                            <TextField
                              size="small"
                              fullWidth
                              value={row.value}
                              onChange={(e) => handleValueChange(row.id, e.target.value)}
                              error={error}
                              placeholder="Enter value"
                              sx={{
                                '& .MuiOutlinedInput-root': {
                                  bgcolor: error ? '#fff5f5' : 'white'
                                }
                              }}
                            />
                          </TableCell>
                          <TableCell color="text.secondary">{row.unit}</TableCell>
                          <TableCell color="text.secondary">{row.refRange}</TableCell>
                          <TableCell>
                            {row.value && (
                              <Chip 
                                label={error ? 'High/Low' : 'Normal'} 
                                color={error ? 'error' : 'success'} 
                                size="small" 
                                variant="outlined"
                              />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Attachments Section */}
        <Grid size={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Attachments & Notes
              </Typography>
              <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Box 
                    sx={{ 
                      border: '2px dashed #e0e0e0', 
                      borderRadius: 2, 
                      p: 3, 
                      textAlign: 'center',
                      cursor: 'pointer',
                      bgcolor: 'background.default',
                      height: '100%'
                    }}
                  >
                    <AttachFileIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                    <Typography variant="body2" fontWeight={500}>
                      Upload Machine Logs or PDF Report
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Max file size: 10MB
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                   <TextField
                     fullWidth
                     multiline
                     rows={4}
                     label="Technician Notes"
                     placeholder="Add any internal comments or observations..."
                   />
                </Grid>
              </Grid>
              
              {/* Mock Uploaded File */}
              <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                <Paper variant="outlined" sx={{ p: 1, px: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body2">Sysmex_XN_Log_001.pdf</Typography>
                  <IconButton size="small" color="error">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Footer Actions */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button variant="outlined" color="inherit" size="large">
          Save as Draft
        </Button>
        <Button variant="contained" size="large" startIcon={<SendIcon />}>
          Finalize & Send to Doctor
        </Button>
      </Box>
    </Box>
  );
}
