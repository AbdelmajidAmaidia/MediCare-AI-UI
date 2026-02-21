import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Button,
  Grid,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Download as DownloadIcon,
  LocalHospital as HospitalIcon,
  MedicalServices as MedicalIcon,
  Biotech as LabIcon,
  Description as DocumentIcon,
  CheckCircle as CheckIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function MedicalRecords() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  // Mock data
  const timeline = [
    {
      date: 'Feb 7, 2026',
      title: 'Annual Physical Examination',
      doctor: 'Dr. Sarah Mitchell',
      type: 'checkup',
      details: 'Complete health assessment - All vitals normal',
    },
    {
      date: 'Jan 15, 2026',
      title: 'Cardiology Consultation',
      doctor: 'Dr. Michael Kumar',
      type: 'consultation',
      details: 'Follow-up for heart health monitoring',
    },
    {
      date: 'Dec 20, 2025',
      title: 'Blood Pressure Monitoring',
      doctor: 'Dr. Sarah Mitchell',
      type: 'monitoring',
      details: 'BP: 120/80 mmHg - Within normal range',
    },
    {
      date: 'Nov 10, 2025',
      title: 'Flu Vaccination',
      doctor: 'Dr. James Chen',
      type: 'vaccination',
      details: 'Annual influenza vaccine administered',
    },
  ];

  const labResults = [
    {
      test: 'Complete Blood Count (CBC)',
      date: 'Feb 5, 2026',
      result: 'Normal',
      status: 'normal',
      value: 'WBC: 7.5, RBC: 5.2, Platelets: 250k',
    },
    {
      test: 'Lipid Panel',
      date: 'Feb 5, 2026',
      result: 'Borderline High',
      status: 'warning',
      value: 'Total Cholesterol: 210 mg/dL',
    },
    {
      test: 'Blood Glucose',
      date: 'Feb 5, 2026',
      result: 'Normal',
      status: 'normal',
      value: '95 mg/dL',
    },
    {
      test: 'Thyroid Function (TSH)',
      date: 'Jan 20, 2026',
      result: 'Normal',
      status: 'normal',
      value: '2.1 mIU/L',
    },
    {
      test: 'Vitamin D',
      date: 'Jan 20, 2026',
      result: 'Low',
      status: 'abnormal',
      value: '18 ng/mL (Normal: 30-100)',
    },
  ];

  const medications = [
    {
      name: 'Lisinopril',
      dosage: '10mg once daily',
      doctor: 'Dr. Sarah Mitchell',
      startDate: 'Jan 1, 2026',
      status: 'active',
      purpose: 'Blood pressure management',
    },
    {
      name: 'Vitamin D3',
      dosage: '2000 IU daily',
      doctor: 'Dr. Sarah Mitchell',
      startDate: 'Feb 1, 2026',
      status: 'active',
      purpose: 'Vitamin D deficiency',
    },
    {
      name: 'Aspirin',
      dosage: '81mg once daily',
      doctor: 'Dr. Michael Kumar',
      startDate: 'Dec 1, 2025',
      status: 'active',
      purpose: 'Cardiovascular protection',
    },
    {
      name: 'Amoxicillin',
      dosage: '500mg three times daily',
      doctor: 'Dr. James Chen',
      startDate: 'Nov 15, 2025',
      status: 'expired',
      purpose: 'Bacterial infection',
    },
  ];

  const documents = [
    { name: 'Annual Physical Report 2026', date: 'Feb 7, 2026', type: 'Medical Report', size: '1.2 MB' },
    { name: 'Cardiology Assessment', date: 'Jan 15, 2026', type: 'Specialist Report', size: '850 KB' },
    { name: 'Lab Results - Complete Panel', date: 'Feb 5, 2026', type: 'Lab Report', size: '450 KB' },
    { name: 'Prescription - Lisinopril', date: 'Jan 1, 2026', type: 'Prescription', size: '120 KB' },
    { name: 'Vaccination Record', date: 'Nov 10, 2025', type: 'Immunization', size: '200 KB' },
  ];

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
        Medical Records
      </Typography>

      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={currentTab} onChange={handleTabChange}>
            <Tab label="Overview" />
            <Tab label="Lab Results" />
            <Tab label="Medications" />
            <Tab label="Documents" />
          </Tabs>
        </Box>

        {/* Overview Tab */}
        <TabPanel value={currentTab} index={0}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
              Medical History Timeline
            </Typography>
            <Timeline position="right">
              {timeline.map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot
                      color={
                        event.type === 'checkup'
                          ? 'primary'
                          : event.type === 'consultation'
                          ? 'success'
                          : 'info'
                      }
                    >
                      <MedicalIcon sx={{ fontSize: 20 }} />
                    </TimelineDot>
                    {index < timeline.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Card
                      sx={{
                        mb: 2,
                        bgcolor: '#F8FAFC',
                        boxShadow: 'none',
                        border: '1px solid #E2E8F0',
                      }}
                    >
                      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                        <Typography variant="caption" color="text.secondary">
                          {event.date}
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 600, mt: 0.5, mb: 0.5 }}>
                          {event.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                          {event.doctor}
                        </Typography>
                        <Typography variant="body2">{event.details}</Typography>
                      </CardContent>
                    </Card>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </CardContent>
        </TabPanel>

        {/* Lab Results Tab */}
        <TabPanel value={currentTab} index={1}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#1E293B' }}>
                Laboratory Test Results
              </Typography>
              <Button startIcon={<DownloadIcon />} variant="outlined" size="small">
                Download All
              </Button>
            </Box>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Test Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Result</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Value</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {labResults.map((test, index) => (
                    <TableRow key={index} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LabIcon sx={{ color: '#007AFF', fontSize: 20 }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {test.test}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {test.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={test.result}
                          size="small"
                          icon={
                            test.status === 'normal' ? (
                              <CheckIcon />
                            ) : (
                              <WarningIcon />
                            )
                          }
                          color={
                            test.status === 'normal'
                              ? 'success'
                              : test.status === 'warning'
                              ? 'warning'
                              : 'error'
                          }
                        />
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              test.status === 'abnormal'
                                ? '#FF3B30'
                                : test.status === 'warning'
                                ? '#FF9500'
                                : 'text.primary',
                            fontWeight: test.status !== 'normal' ? 600 : 400,
                          }}
                        >
                          {test.value}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton size="small">
                          <DownloadIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </TabPanel>

        {/* Medications Tab */}
        <TabPanel value={currentTab} index={2}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
              Current & Past Medications
            </Typography>
            <Grid container spacing={2}>
              {medications.map((med, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    sx={{
                      bgcolor: med.status === 'active' ? '#F8FAFC' : '#FAFAFA',
                      border: '1px solid',
                      borderColor: med.status === 'active' ? '#007AFF30' : '#E2E8F0',
                    }}
                  >
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {med.name}
                        </Typography>
                        <Chip
                          label={med.status === 'active' ? 'Active' : 'Expired'}
                          size="small"
                          color={med.status === 'active' ? 'success' : 'default'}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ mb: 1, fontWeight: 600, color: 'primary.main' }}>
                        {med.dosage}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Purpose: {med.purpose}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        Prescribed by: {med.doctor}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Started: {med.startDate}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </TabPanel>

        {/* Documents Tab */}
        <TabPanel value={currentTab} index={3}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: '#1E293B' }}>
              Medical Documents
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Document Name</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Type</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Date</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Size</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documents.map((doc, index) => (
                    <TableRow key={index} hover>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <DocumentIcon sx={{ color: '#007AFF' }} />
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {doc.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip label={doc.type} size="small" />
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {doc.date}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2" color="text.secondary">
                          {doc.size}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Button startIcon={<DownloadIcon />} size="small" variant="outlined">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </TabPanel>
      </Card>
    </Box>
  );
}