import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Chip,
  Button,
  TextField,
  Divider,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  Person as PersonIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  PictureAsPdf as PdfIcon,
  Image as ImageIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

const pendingDoctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', date: 'Feb 8, 2026', status: 'Pending Review' },
  { id: 2, name: 'Dr. Emily Chen', specialty: 'Pediatrician', date: 'Feb 7, 2026', status: 'Pending Review' },
  { id: 3, name: 'Dr. Alan Smith', specialty: 'Dermatologist', date: 'Feb 6, 2026', status: 'Pending Review' },
];

const documents = [
  { name: 'Medical License.pdf', type: 'pdf' },
  { name: 'National ID Card.jpg', type: 'image' },
  { name: 'Malpractice Insurance.pdf', type: 'pdf' },
  { name: 'Diploma.jpg', type: 'image' },
];

export default function DoctorVerification() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedDoctor = pendingDoctors.find(d => d.id === selectedId) || pendingDoctors[0];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleRejectClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex', height: 'calc(100vh - 100px)', bgcolor: '#f4f6f8', gap: 2, p: 2 }}>
      
      {/* Left List Panel */}
      <Paper elevation={0} sx={{ width: 320, flexShrink: 0, border: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
          <Typography variant="h6" fontWeight={600}>Pending Applications</Typography>
          <Typography variant="caption" color="text.secondary">3 waiting for review</Typography>
        </Box>
        <List sx={{ overflow: 'auto', flexGrow: 1 }}>
          {pendingDoctors.map((doc) => (
            <ListItem 
              key={doc.id} 
              button 
              selected={selectedId === doc.id}
              onClick={() => setSelectedId(doc.id)}
              sx={{ borderBottom: '1px solid #f0f0f0' }}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: selectedId === doc.id ? 'primary.main' : 'grey.300' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText 
                primary={<Typography fontWeight={600}>{doc.name}</Typography>}
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary">
                      {doc.specialty}
                    </Typography>
                    <br />
                    <Typography component="span" variant="caption" color="text.secondary">
                      Applied: {doc.date}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Right Detail Panel */}
      <Paper elevation={0} sx={{ flexGrow: 1, border: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Header */}
        <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.light' }}>
               <PersonIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h5" fontWeight={700}>{selectedDoctor.name}</Typography>
              <Typography variant="body1" color="text.secondary">{selectedDoctor.specialty} • 15 Years Experience</Typography>
            </Box>
          </Box>
          <Chip label={selectedDoctor.status} color="warning" sx={{ fontWeight: 600 }} />
        </Box>

        {/* Content Scrollable Area */}
        <Box sx={{ p: 3, flexGrow: 1, overflow: 'auto', pb: 10 }}>
          <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
            Submitted Documents
          </Typography>
          
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {documents.map((doc, idx) => (
              <Grid item xs={6} md={3} key={idx}>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    p: 2, 
                    textAlign: 'center', 
                    cursor: 'pointer',
                    '&:hover': { bgcolor: 'grey.50', borderColor: 'primary.main' }
                  }}
                >
                  <Box sx={{ mb: 1, height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'grey.100', borderRadius: 1 }}>
                    {doc.type === 'pdf' ? <PdfIcon color="error" fontSize="large" /> : <ImageIcon color="primary" fontSize="large" />}
                  </Box>
                  <Typography variant="body2" noWrap title={doc.name}>{doc.name}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
            Application Details
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Medical License Number" defaultValue="MD-99281-NY" InputProps={{ readOnly: true }} variant="filled" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField fullWidth label="Issuing Authority" defaultValue="State Medical Board" InputProps={{ readOnly: true }} variant="filled" />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} label="Professional Bio" defaultValue="Board certified cardiologist with extensive experience in interventional cardiology..." InputProps={{ readOnly: true }} variant="filled" />
            </Grid>
          </Grid>

          <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
            Admin Notes
          </Typography>
          <TextField 
            fullWidth 
            multiline 
            rows={3} 
            placeholder="Add internal notes about this applicant..." 
            variant="outlined" 
          />
        </Box>

        {/* Sticky Action Bar */}
        <Box 
          sx={{ 
            p: 2, 
            borderTop: '1px solid #e0e0e0', 
            bgcolor: 'white', 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            right: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            boxShadow: '0 -4px 10px rgba(0,0,0,0.05)'
          }}
        >
          <Button 
            variant="outlined" 
            color="error" 
            size="large" 
            startIcon={<CloseIcon />}
            onClick={handleRejectClick}
            sx={{ px: 4, fontWeight: 700 }}
          >
            Reject
          </Button>
          <Button 
            variant="contained" 
            color="success" 
            size="large" 
            startIcon={<CheckIcon />}
            sx={{ px: 4, fontWeight: 700 }}
          >
            Approve & Activate
          </Button>
        </Box>

        {/* Reject Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Missing Documents</MenuItem>
          <MenuItem onClick={handleClose}>License Expired</MenuItem>
          <MenuItem onClick={handleClose}>Identity Verification Failed</MenuItem>
          <MenuItem onClick={handleClose} sx={{ color: 'error.main' }}>Fraudulent Application</MenuItem>
        </Menu>
      </Paper>
    </Box>
  );
}
