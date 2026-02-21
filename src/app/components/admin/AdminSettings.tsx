import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Slider,
  Chip,
  Stack,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Grid,
  InputAdornment,
  Avatar,
  IconButton,
} from '@mui/material';
import {
  Settings as SettingsIcon,
  LocalHospital as MedicalIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  CloudUpload as UploadIcon,
  Add as AddIcon,
  Palette as PaletteIcon,
  Save as SaveIcon,
  Delete as DeleteIcon,
} from '@mui/icons-material';

// --- Types ---
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      sx={{ flexGrow: 1, width: '100%', ml: { md: 4 } }}
      {...other}
    >
      {value === index && <Box sx={{ py: 1 }}>{children}</Box>}
    </Box>
  );
}

// --- Mock Data ---
const initialSpecialties = ['Cardiology', 'Neurology', 'Pediatrics', 'Dermatology'];
const notificationEvents = [
  { id: 1, event: 'New Booking Created' },
  { id: 2, event: 'Appointment Cancelled' },
  { id: 3, event: 'Doctor Verification Pending' },
  { id: 4, event: 'Payout Ready' },
  { id: 5, event: 'New Message Received' },
];

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState(0);
  
  // Tab 1: Branding
  const [platformName, setPlatformName] = useState('MediCare AI');
  const [primaryColor, setPrimaryColor] = useState('#1976d2');
  
  // Tab 2: Medical
  const [specialties, setSpecialties] = useState<string[]>(initialSpecialties);
  const [newSpecialty, setNewSpecialty] = useState('');
  const [consultationDuration, setConsultationDuration] = useState<number>(30);
  
  // Tab 3: Security
  const [twoFactor, setTwoFactor] = useState(true);
  const [adminApproval, setAdminApproval] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('30');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleAddSpecialty = () => {
    if (newSpecialty && !specialties.includes(newSpecialty)) {
      setSpecialties([...specialties, newSpecialty]);
      setNewSpecialty('');
    }
  };

  const handleDeleteSpecialty = (chipToDelete: string) => {
    setSpecialties((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={700} sx={{ color: '#1a237e' }}>
          Platform Settings
        </Typography>
        <Button variant="contained" startIcon={<SaveIcon />} size="large" sx={{ px: 4, fontWeight: 600 }}>
          Save Changes
        </Button>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          p: 0, 
          minHeight: 600,
          border: '1px solid #e0e0e0',
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        {/* Vertical Tabs */}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeTab}
          onChange={handleTabChange}
          sx={{ 
            borderRight: 1, 
            borderColor: 'divider', 
            minWidth: 240,
            bgcolor: '#f8f9fa',
            pt: 2,
            '& .MuiTab-root': {
              alignItems: 'flex-start',
              textAlign: 'left',
              pl: 3,
              minHeight: 64,
              textTransform: 'none',
              fontSize: '0.95rem',
              fontWeight: 500,
            },
            '& .Mui-selected': {
              bgcolor: '#e3f2fd',
              color: 'primary.main',
              fontWeight: 700,
            }
          }}
        >
          <Tab icon={<SettingsIcon sx={{ mr: 1 }} />} iconPosition="start" label="General & Branding" />
          <Tab icon={<MedicalIcon sx={{ mr: 1 }} />} iconPosition="start" label="Medical Configuration" />
          <Tab icon={<SecurityIcon sx={{ mr: 1 }} />} iconPosition="start" label="Security & Access" />
          <Tab icon={<NotificationsIcon sx={{ mr: 1 }} />} iconPosition="start" label="Notifications" />
        </Tabs>

        {/* Content Area */}
        <Box sx={{ p: 4, flexGrow: 1, bgcolor: '#fff' }}>
          
          {/* TAB 1: General & Branding */}
          <TabPanel value={activeTab} index={0}>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Platform Identity</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={7}>
                <Stack spacing={3}>
                  <TextField 
                    fullWidth 
                    label="Platform Name" 
                    value={platformName} 
                    onChange={(e) => setPlatformName(e.target.value)} 
                    variant="outlined" 
                  />
                  <TextField 
                    fullWidth 
                    label="Support Email" 
                    defaultValue="support@medicare.ai" 
                    variant="outlined" 
                  />
                  <TextField 
                    fullWidth 
                    multiline 
                    rows={3} 
                    label="Platform Description (SEO)" 
                    defaultValue="The leading AI-powered healthcare management platform for doctors and patients." 
                    variant="outlined" 
                  />
                </Stack>
              </Grid>
              
              <Grid item xs={12} md={5}>
                <Typography variant="subtitle2" gutterBottom color="text.secondary">Platform Logo</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    height: 180, 
                    border: '2px dashed #e0e0e0', 
                    borderRadius: 2, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#fafafa',
                    cursor: 'pointer',
                    mb: 4,
                    '&:hover': { borderColor: 'primary.main', bgcolor: '#f0f7ff' }
                  }}
                >
                  <UploadIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 1 }} />
                  <Typography variant="body2" color="text.secondary" fontWeight={500}>Drag & drop logo here</Typography>
                  <Typography variant="caption" color="text.disabled">PNG, SVG (Max 2MB)</Typography>
                </Paper>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Whitelabel Theming</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>Primary Color</Typography>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Box 
                    sx={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: 1, 
                      bgcolor: primaryColor, 
                      border: '1px solid #e0e0e0',
                      boxShadow: 1 
                    }} 
                  />
                  <TextField 
                    size="small" 
                    value={primaryColor} 
                    onChange={(e) => setPrimaryColor(e.target.value)} 
                    sx={{ width: 120 }} 
                  />
                  <IconButton color="primary">
                    <PaletteIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </TabPanel>

          {/* TAB 2: Medical Configuration */}
          <TabPanel value={activeTab} index={1}>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Specialties Manager</Typography>
            <Paper variant="outlined" sx={{ p: 3, mb: 4, bgcolor: '#fafafa' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Manage the list of medical specialties available for doctor registration.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {specialties.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    onDelete={() => handleDeleteSpecialty(tag)}
                    color="primary"
                    variant="outlined"
                    sx={{ bgcolor: 'white' }}
                  />
                ))}
              </Box>
              <Box sx={{ display: 'flex', gap: 2, maxWidth: 400 }}>
                <TextField 
                  fullWidth 
                  size="small" 
                  placeholder="Add new specialty..." 
                  value={newSpecialty}
                  onChange={(e) => setNewSpecialty(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddSpecialty()}
                />
                <Button variant="contained" onClick={handleAddSpecialty} startIcon={<AddIcon />}>Add</Button>
              </Box>
            </Paper>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Financial Configuration</Typography>
            <Grid container spacing={3} sx={{ mb: 4 }}>
              <Grid item xs={12} md={6}>
                <TextField 
                  fullWidth 
                  label="Base Commission Rate" 
                  type="number" 
                  defaultValue={15}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                  }}
                  helperText="Platform fee taken from each consultation"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField 
                  fullWidth 
                  label="Fixed Transaction Fee" 
                  type="number" 
                  defaultValue={0.50}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">€</InputAdornment>,
                  }}
                  helperText="Fixed fee per transaction processing"
                />
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Appointment Rules</Typography>
            <Box sx={{ maxWidth: 600 }}>
              <Typography gutterBottom>Max Consultation Duration</Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="body2" color="text.secondary">15m</Typography>
                <Slider 
                  value={consultationDuration}
                  onChange={(_, val) => setConsultationDuration(val as number)}
                  step={15}
                  marks
                  min={15}
                  max={120}
                  valueLabelDisplay="on"
                  valueLabelFormat={(val) => `${val} mins`}
                />
                <Typography variant="body2" color="text.secondary">120m</Typography>
              </Stack>
              <Typography variant="caption" color="text.secondary">
                Limits the maximum time slot a doctor can configure for a single session.
              </Typography>
            </Box>
          </TabPanel>

          {/* TAB 3: Security & Access */}
          <TabPanel value={activeTab} index={2}>
            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Access Control</Typography>
            
            <Paper variant="outlined" sx={{ p: 0, overflow: 'hidden', mb: 4 }}>
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>Two-Factor Authentication (2FA)</Typography>
                  <Typography variant="body2" color="text.secondary">Enforce 2FA for all doctor and admin accounts.</Typography>
                </Box>
                <Switch checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} color="primary" />
              </Box>
              
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>Doctor & Lab Verification</Typography>
                  <Typography variant="body2" color="text.secondary">Require manual admin approval before new providers can accept bookings.</Typography>
                </Box>
                <Switch checked={adminApproval} onChange={(e) => setAdminApproval(e.target.checked)} color="primary" />
              </Box>
              
              <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                   <Typography variant="subtitle1" fontWeight={600}>Patient Registration</Typography>
                   <Typography variant="body2" color="text.secondary">Allow new patients to register without email verification (Not Recommended).</Typography>
                </Box>
                <Switch color="error" />
              </Box>
            </Paper>

            <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Session Settings</Typography>
            <FormControl sx={{ width: 300 }}>
              <InputLabel>Session Timeout</InputLabel>
              <Select
                value={sessionTimeout}
                label="Session Timeout"
                onChange={(e) => setSessionTimeout(e.target.value)}
              >
                <MenuItem value="15">15 Minutes</MenuItem>
                <MenuItem value="30">30 Minutes</MenuItem>
                <MenuItem value="60">1 Hour</MenuItem>
                <MenuItem value="240">4 Hours</MenuItem>
              </Select>
            </FormControl>
          </TabPanel>

          {/* TAB 4: Notifications */}
          <TabPanel value={activeTab} index={3}>
             <Typography variant="h6" fontWeight={700} gutterBottom sx={{ mb: 3 }}>Notification Channels</Typography>
             <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
               Configure which events trigger notifications across different channels.
             </Typography>

             <TableContainer component={Paper} variant="outlined">
               <Table>
                 <TableHead sx={{ bgcolor: '#f8f9fa' }}>
                   <TableRow>
                     <TableCell sx={{ fontWeight: 700 }}>Event Trigger</TableCell>
                     <TableCell align="center" sx={{ fontWeight: 700 }}>Email</TableCell>
                     <TableCell align="center" sx={{ fontWeight: 700 }}>SMS</TableCell>
                     <TableCell align="center" sx={{ fontWeight: 700 }}>Push Notification</TableCell>
                   </TableRow>
                 </TableHead>
                 <TableBody>
                   {notificationEvents.map((row) => (
                     <TableRow key={row.id} hover>
                       <TableCell component="th" scope="row" sx={{ fontWeight: 500 }}>
                         {row.event}
                       </TableCell>
                       <TableCell align="center">
                         <Checkbox defaultChecked color="primary" />
                       </TableCell>
                       <TableCell align="center">
                         <Checkbox defaultChecked={row.id < 3} color="primary" />
                       </TableCell>
                       <TableCell align="center">
                         <Checkbox defaultChecked={row.id !== 4} color="primary" />
                       </TableCell>
                     </TableRow>
                   ))}
                 </TableBody>
               </Table>
             </TableContainer>
          </TabPanel>

        </Box>
      </Paper>
    </Box>
  );
}
