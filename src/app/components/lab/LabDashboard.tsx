import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Badge,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Divider,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Logo } from '../Logo';

// --- Types & Mock Data ---

type TestStatus = 'Pending' | 'Processing' | 'Completed' | 'Critical';
type Urgency = 'Normal' | 'Urgent';

interface LabSample {
  id: string;
  patientName: string;
  age: number;
  gender: string;
  testType: string;
  status: TestStatus;
  urgency: Urgency;
  collectionDate: string;
}

const MOCK_SAMPLES: LabSample[] = [
  { id: '#LAB-8921', patientName: 'Sarah Jenkins', age: 34, gender: 'F', testType: 'Complete Blood Count (CBC)', status: 'Critical', urgency: 'Urgent', collectionDate: '2023-10-24 08:30' },
  { id: '#LAB-8922', patientName: 'Michael Chen', age: 52, gender: 'M', testType: 'Lipid Panel', status: 'Processing', urgency: 'Normal', collectionDate: '2023-10-24 09:15' },
  { id: '#LAB-8923', patientName: 'Emma Wilson', age: 28, gender: 'F', testType: 'PCR - Viral Load', status: 'Pending', urgency: 'Normal', collectionDate: '2023-10-24 09:45' },
  { id: '#LAB-8924', patientName: 'James Rodriguez', age: 45, gender: 'M', testType: 'Comprehensive Metabolic', status: 'Pending', urgency: 'Urgent', collectionDate: '2023-10-24 10:00' },
  { id: '#LAB-8925', patientName: 'Linda O\'Neil', age: 67, gender: 'F', testType: 'Thyroid Panel', status: 'Completed', urgency: 'Normal', collectionDate: '2023-10-23 14:20' },
  { id: '#LAB-8926', patientName: 'Robert Foster', age: 41, gender: 'M', testType: 'Hemoglobin A1c', status: 'Processing', urgency: 'Normal', collectionDate: '2023-10-24 10:30' },
];

// --- Styles ---

const DRAWER_WIDTH = 260;
const COLORS = {
  bg: '#F3F4F6', // Slightly darker grey for contrast with white cards
  primary: '#007AFF', // Bright Blue (Patient Portal Style)
  secondary: '#2E9CCA',
  text: '#111827', // Darker text
  textSecondary: '#6B7280',
  border: '#E5E7EB',
  success: '#DCFCE7',
  successText: '#166534',
  warning: '#FEF3C7',
  warningText: '#92400E',
  info: '#E0F2FE',
  infoText: '#075985',
  error: '#FEE2E2',
  errorText: '#991B1B',
};

// --- Components ---

const StatusBadge = ({ status }: { status: TestStatus }) => {
  let bg = COLORS.bg;
  let color = COLORS.text;

  switch (status) {
    case 'Pending':
      bg = COLORS.warning;
      color = COLORS.warningText;
      break;
    case 'Processing':
      bg = COLORS.info;
      color = COLORS.infoText;
      break;
    case 'Completed':
      bg = COLORS.success;
      color = COLORS.successText;
      break;
    case 'Critical':
      bg = COLORS.error;
      color = COLORS.errorText;
      break;
  }

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        bgcolor: bg,
        color: color,
        fontWeight: 600,
        borderRadius: '6px',
        fontSize: '0.75rem',
        border: '1px solid transparent',
      }}
    />
  );
};

// --- Sparkline SVGs ---
const SparklineUp = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
    <path d="M0 35 C20 35, 30 10, 50 25 C70 40, 80 5, 100 0" stroke="#10B981" strokeWidth="2" fill="none" />
    <path d="M0 35 C20 35, 30 10, 50 25 C70 40, 80 5, 100 0 V40 H0 Z" fill="url(#gradUp)" opacity="0.2" />
    <defs>
      <linearGradient id="gradUp" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const SparklineWave = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
    <path d="M0 20 C20 10, 40 30, 60 15 C80 5, 90 25, 100 20" stroke="#F59E0B" strokeWidth="2" fill="none" />
    <path d="M0 20 C20 10, 40 30, 60 15 C80 5, 90 25, 100 20 V40 H0 Z" fill="url(#gradWave)" opacity="0.2" />
    <defs>
      <linearGradient id="gradWave" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const SparklineDown = () => (
  <svg width="100%" height="40" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
    <path d="M0 10 C20 5, 40 25, 60 15 C80 5, 90 30, 100 35" stroke="#3B82F6" strokeWidth="2" fill="none" />
    <path d="M0 10 C20 5, 40 25, 60 15 C80 5, 90 30, 100 35 V40 H0 Z" fill="url(#gradDown)" opacity="0.2" />
    <defs>
      <linearGradient id="gradDown" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// --- Main Dashboard Component ---

export default function LabDashboard() {
  const [selectedSample, setSelectedSample] = useState<LabSample | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleOpenModal = (sample: LabSample) => {
    setSelectedSample(sample);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSample(null);
  };

  // Sidebar Items
  const navItems = [
    { id: 'dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    { id: 'queue', icon: <ScienceOutlined />, label: 'Sample Queue' },
    { id: 'input', icon: <KeyboardOutlined />, label: 'Input Results' },
    { id: 'verified', icon: <FactCheckOutlined />, label: 'Verified Reports' },
    { id: 'inventory', icon: <Inventory2Outlined />, label: 'Inventory' },
  ];

  return (
    <Box sx={{ display: 'flex', bgcolor: '#F9FAFB', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* Sidebar - "Patient Portal" Style */}
      <Drawer
        variant="permanent"
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            bgcolor: '#FFFFFF',
            borderRight: '1px solid rgba(0,0,0,0.05)',
            p: 2,
          },
        }}
      >
        <Box sx={{ mb: 4, px: 2, display: 'flex', alignItems: 'center', gap: 0 }}>
          <Logo size={32} />
        </Box>

        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                onClick={() => setActiveTab(item.id)}
                sx={{
                  borderRadius: 3, // Rounded Rectangle
                  py: 1.5,
                  bgcolor: activeTab === item.id ? '#007AFF' : 'transparent', // Bright Blue Active
                  color: activeTab === item.id ? '#FFFFFF' : '#4B5563', // White text Active, Dark Grey Inactive
                  '&:hover': {
                    bgcolor: activeTab === item.id ? '#0062CC' : '#F3F4F6',
                  },
                  transition: 'all 0.2s ease',
                }}
              >
                <ListItemIcon sx={{ 
                  color: activeTab === item.id ? '#FFFFFF' : '#6B7280',
                  minWidth: 40
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{ 
                    fontWeight: activeTab === item.id ? 600 : 500,
                    fontSize: '0.95rem'
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ mt: 'auto' }}>
           <Paper sx={{ p: 2, borderRadius: 3, display: 'flex', alignItems: 'center', gap: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <Avatar src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop" sx={{ width: 40, height: 40 }} />
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#111827' }}>Dr. Alex Ray</Typography>
                <Typography variant="caption" sx={{ color: '#6B7280' }}>Senior Tech</Typography>
              </Box>
           </Paper>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, px: 5, py: 4, overflowX: 'hidden' }}>
        
        {/* Top Search & Notifs */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4, gap: 2 }}>
          <Paper
            elevation={0}
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 300,
              bgcolor: 'white',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
              border: '1px solid #E5E7EB'
            }}
          >
            <IconButton sx={{ p: '10px', color: '#9CA3AF' }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, fontFamily: 'Inter, sans-serif' }}
              placeholder="Scan Barcode / Search ID"
            />
            <IconButton sx={{ p: '10px', color: COLORS.primary }}>
              <QrCodeScanner />
            </IconButton>
          </Paper>

          <IconButton sx={{ bgcolor: 'white', border: '1px solid #E5E7EB', borderRadius: 2 }}>
            <Badge badgeContent={3} color="error">
              <NotificationsNone color="action" />
            </Badge>
          </IconButton>
        </Box>

        {/* Hero Section & Metrics */}
        <Grid container spacing={4} sx={{ mb: 5 }}>
          
          {/* Blue Hero Card */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ 
              p: 4, 
              bgcolor: '#007AFF', // Solid Bright Blue
              color: 'white',
              borderRadius: 4, // 16px roughly
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 20px -5px rgba(0, 122, 255, 0.4)'
            }}>
               {/* Background Decor */}
               <Box sx={{ position: 'absolute', right: -20, top: -20, width: 200, height: 200, bgcolor: 'white', opacity: 0.1, borderRadius: '50%' }} />
               <Box sx={{ position: 'absolute', right: 50, bottom: -40, width: 150, height: 150, bgcolor: 'white', opacity: 0.1, borderRadius: '50%' }} />

               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                 <Box>
                    <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
                      Urgent Priority: Batch #B-902
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.9 }}>
                      Hematology Analysis - 12 Samples Pending
                    </Typography>
                 </Box>
                 {/* Pill Badge */}
                 <Box sx={{ 
                   bgcolor: 'rgba(255,255,255,0.2)', 
                   backdropFilter: 'blur(10px)',
                   px: 2, 
                   py: 0.5, 
                   borderRadius: 10,
                   display: 'flex',
                   alignItems: 'center',
                   gap: 1
                 }}>
                   <AccessTime sx={{ fontSize: 16 }} />
                   <Typography variant="caption" fontWeight={600}>Time Remaining: 45 mins</Typography>
                 </Box>
               </Box>

               <Button 
                 variant="contained" 
                 sx={{ 
                   bgcolor: 'white', 
                   color: '#007AFF', 
                   fontWeight: 700, 
                   alignSelf: 'flex-start',
                   px: 3,
                   py: 1,
                   borderRadius: 2,
                   textTransform: 'none',
                   '&:hover': { bgcolor: '#F0F9FF' }
                 }}
               >
                 Start Analysis
               </Button>
            </Paper>
          </Grid>

          {/* 3 Metric Cards */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={2} sx={{ height: '100%' }}>
              
              {/* Card 1: Green */}
              <Grid item xs={12} sm={6} md={12} sx={{ flex: 1 }}>
                 <Paper sx={{ p: 2, borderRadius: 3, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                          <Box sx={{ p: 0.5, bgcolor: '#DCFCE7', borderRadius: 1, color: '#166534' }}>
                             <CloudUploadOutlined fontSize="small" />
                          </Box>
                          <Typography variant="body2" color="text.secondary" fontWeight={600}>Samples Received</Typography>
                       </Box>
                       <Typography variant="h5" fontWeight={700} color="#111827">145</Typography>
                    </Box>
                    <Box sx={{ width: 100 }}>
                       <SparklineUp />
                    </Box>
                 </Paper>
              </Grid>

              {/* Card 2: Orange/Red */}
              <Grid item xs={12} sm={6} md={6}>
                 <Paper sx={{ p: 2, borderRadius: 3, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Box sx={{ p: 0.5, bgcolor: '#FEF3C7', borderRadius: 1, color: '#D97706' }}>
                         <WarningAmber fontSize="small" />
                      </Box>
                      <Typography variant="body2" color="text.secondary" fontWeight={600}>Pending Validation</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                      <Typography variant="h5" fontWeight={700} color="#111827">12</Typography>
                      <Box sx={{ width: 60, height: 30 }}>
                        <SparklineWave />
                      </Box>
                    </Box>
                 </Paper>
              </Grid>

              {/* Card 3: Blue */}
              <Grid item xs={12} sm={6} md={6}>
                 <Paper sx={{ p: 2, borderRadius: 3, boxShadow: '0 2px 10px rgba(0,0,0,0.05)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Box sx={{ p: 0.5, bgcolor: '#E0F2FE', borderRadius: 1, color: '#0284C7' }}>
                         <CheckCircleOutline fontSize="small" />
                      </Box>
                      <Typography variant="body2" color="text.secondary" fontWeight={600}>Completed Today</Typography>
                    </Box>
                     <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                      <Typography variant="h5" fontWeight={700} color="#111827">89</Typography>
                      <Box sx={{ width: 60, height: 30 }}>
                        <SparklineDown />
                      </Box>
                    </Box>
                 </Paper>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: '#111827' }}>
          Active Samples Queue
        </Typography>

        {/* Active Test Queue Table */}
        <TableContainer 
          component={Paper} 
          elevation={0} 
          sx={{ 
            borderRadius: 3, 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', 
            border: '1px solid #E5E7EB',
            overflow: 'hidden' 
          }}
        >
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ bgcolor: '#F8FAFC' }}>
              <TableRow>
                {['Status', 'Sample ID', 'Patient Name', 'Test Type', 'Urgency', 'Actions'].map((head) => (
                  <TableCell key={head} sx={{ fontWeight: 600, color: '#4B5563', borderBottom: '1px solid #E5E7EB' }}>
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {MOCK_SAMPLES.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    bgcolor: index % 2 === 0 ? '#FFFFFF' : '#F9FAFB', // Zebra striping
                    position: 'relative',
                    transition: 'background-color 0.2s',
                    '&:hover': { bgcolor: '#F1F5F9' }
                  }}
                >
                  <TableCell sx={{ 
                    borderLeft: row.urgency === 'Urgent' ? `4px solid ${COLORS.errorText}` : '4px solid transparent',
                    pl: row.urgency === 'Urgent' ? 1.5 : 2
                  }}>
                    <StatusBadge status={row.status} />
                  </TableCell>
                  <TableCell sx={{ fontFamily: 'Roboto Mono, monospace', fontWeight: 500, color: '#111827' }}>
                    {row.id}
                  </TableCell>
                  <TableCell sx={{ fontWeight: 500, color: '#1B365D' }}>
                    {row.patientName}
                    <Typography variant="caption" display="block" color="text.secondary">
                      {row.age}y / {row.gender}
                    </Typography>
                  </TableCell>
                  <TableCell>{row.testType}</TableCell>
                  <TableCell>
                    {row.urgency === 'Urgent' && (
                      <Chip 
                        label="URGENT" 
                        size="small" 
                        sx={{ bgcolor: '#FEE2E2', color: '#991B1B', fontWeight: 700, fontSize: '0.7rem', borderRadius: 1 }} 
                      />
                    )}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        size="small"
                        disableElevation
                        onClick={() => handleOpenModal(row)}
                        sx={{
                          bgcolor: COLORS.primary,
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 2,
                          '&:hover': { bgcolor: '#0062CC' }
                        }}
                      >
                        Input Results
                      </Button>
                      <Tooltip title="Print Label">
                        <IconButton size="small" sx={{ border: '1px solid #E5E7EB', borderRadius: 2 }}>
                          <Print fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Box>

      {/* Input Results Modal */}
      <InputResultsModal open={isModalOpen} onClose={handleCloseModal} sample={selectedSample} />

    </Box>
  );
}

// --- Input Results Modal Component ---

interface InputResultsModalProps {
  open: boolean;
  onClose: () => void;
  sample: LabSample | null;
}

function InputResultsModal({ open, onClose, sample }: InputResultsModalProps) {
  if (!sample) return null;

  // Mock form state for specific fields based on test type
  // For demo, we'll just show generic fields that validate range
  
  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="md" 
      fullWidth
      PaperProps={{
        sx: { borderRadius: 3, overflow: 'hidden' }
      }}
    >
      <DialogTitle sx={{ 
        bgcolor: '#F8FAFC', 
        borderBottom: `1px solid ${COLORS.border}`,
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        pb: 2
      }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.primary }}>Input Lab Results</Typography>
          <Typography variant="caption" sx={{ color: '#64748B', fontFamily: 'Roboto Mono' }}>ID: {sample.id}</Typography>
        </Box>
        <IconButton onClick={onClose} size="small"><Close /></IconButton>
      </DialogTitle>
      
      <DialogContent sx={{ p: 0 }}>
        <Grid container sx={{ height: 500 }}>
          {/* Left Side: Patient Info */}
          <Grid item xs={4} sx={{ bgcolor: '#F8FAFC', p: 3, borderRight: `1px solid ${COLORS.border}` }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="overline" sx={{ color: '#64748B', fontWeight: 700 }}>Patient Details</Typography>
              <Typography variant="h6" sx={{ color: COLORS.primary, fontWeight: 600 }}>{sample.patientName}</Typography>
              <Typography variant="body2" sx={{ color: COLORS.text }}>
                DOB: 12/04/1989 ({sample.age} yrs)<br/>
                Gender: {sample.gender === 'F' ? 'Female' : 'Male'}<br/>
                Blood Type: O+
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="overline" sx={{ color: '#64748B', fontWeight: 700 }}>Request Details</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{sample.testType}</Typography>
              <Typography variant="body2" color="text.secondary">Collected: {sample.collectionDate}</Typography>
              <Typography variant="body2" color="text.secondary">Provider: Dr. Smith</Typography>
            </Box>
            
            <Divider sx={{ my: 2 }} />
            
            <Box sx={{ p: 2, bgcolor: '#FEF9C3', borderRadius: 2, border: '1px solid #FDE047' }}>
              <Typography variant="caption" sx={{ color: '#854D0E', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                <WarningAmber fontSize="small" /> Note from Doctor
              </Typography>
              <Typography variant="caption" sx={{ color: '#854D0E', display: 'block', mt: 0.5 }}>
                Patient has history of anemia. Please double check hemoglobin levels.
              </Typography>
            </Box>
          </Grid>

          {/* Right Side: Input Fields */}
          <Grid item xs={8} sx={{ p: 4, bgcolor: '#FFFFFF' }}>
            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600, color: COLORS.primary }}>Test Values</Typography>
            
            {/* Example Field: Hemoglobin (with validation visual) */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" fontWeight={600}>Hemoglobin (Hb)</Typography>
                <Typography variant="caption" color="text.secondary">Ref Range: 12.0 - 15.5 g/dL</Typography>
              </Box>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter value..."
                defaultValue="10.2"
                InputProps={{
                   endAdornment: <Typography variant="caption" color="text.secondary">g/dL</Typography>
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#F97316' }, // Orange border for abnormal
                    '&:hover fieldset': { borderColor: '#EA580C' },
                  }
                }}
              />
              <Typography variant="caption" sx={{ color: '#C2410C', display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                <WarningAmber sx={{ fontSize: 14 }} /> Value lower than normal range
              </Typography>
            </Box>

            {/* Example Field: Glucose */}
            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2" fontWeight={600}>Glucose (Random)</Typography>
                <Typography variant="caption" color="text.secondary">Ref Range: 70 - 140 mg/dL</Typography>
              </Box>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter value..."
                defaultValue="98"
                InputProps={{
                   endAdornment: <Typography variant="caption" color="text.secondary">mg/dL</Typography>
                }}
              />
            </Box>
            
            {/* Upload Zone */}
            <Box 
              sx={{ 
                border: `2px dashed ${COLORS.infoText}`, 
                bgcolor: '#F0F9FF', 
                borderRadius: 2, 
                p: 3, 
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                '&:hover': { bgcolor: '#E0F2FE' }
              }}
            >
              <CloudUpload sx={{ color: COLORS.infoText, fontSize: 32, mb: 1 }} />
              <Typography variant="body2" sx={{ color: COLORS.infoText, fontWeight: 600 }}>
                Drag & Drop Machine Output
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Supports .pdf, .csv, .hl7
              </Typography>
            </Box>

          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions sx={{ p: 3, borderTop: `1px solid ${COLORS.border}`, bgcolor: '#F8FAFC' }}>
         <Button onClick={onClose} sx={{ color: '#64748B', fontWeight: 600 }}>Save Draft</Button>
         <Button 
           variant="contained" 
           sx={{ 
             bgcolor: COLORS.primary, 
             fontWeight: 600, 
             px: 3,
             '&:hover': { bgcolor: '#1e40af' }
           }}
           startIcon={<CheckCircleOutline />}
          >
           Save & Send to Doctor
         </Button>
      </DialogActions>
    </Dialog>
  );
}
