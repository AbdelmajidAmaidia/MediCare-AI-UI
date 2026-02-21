import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Slider,
  Stack,
  Tooltip,
  Divider,
  Chip,
  LinearProgress,
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  ZoomIn as ZoomIcon,
  Tune as ContrastIcon,
  Straighten as MeasureIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  RestartAlt as ResetIcon,
  Flag as FlagIcon,
  CheckCircle as ApproveIcon,
  Cancel as RejectIcon,
  Science as ScienceIcon,
  Article as ReportIcon,
  ArrowBack as BackIcon,
  InsertDriveFile as FileIcon,
} from '@mui/icons-material';

const mriImage = "https://images.unsplash.com/photo-1631563019676-dade0dbdb8fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNUkklMjBicmFpbiUyMHNjYW4lMjBtZWRpY2FsJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwxfHx8fDE3NzA1NDk3ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const patientHistory = [
  { id: 1, type: 'MRI Head', date: 'Oct 12, 2023', findings: 'Normal' },
  { id: 2, type: 'CT Chest', date: 'Mar 05, 2024', findings: 'Clear' },
  { id: 3, type: 'X-Ray Wrist', date: 'Jun 15, 2024', findings: 'Fracture' },
];

export default function RadiologyWorkstation() {
  const [showAiOverlay, setShowAiOverlay] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [contrast, setContrast] = useState(100);

  return (
    <Box sx={{ bgcolor: '#0a0a0a', color: '#e0e0e0', minHeight: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Bar */}
      <Box sx={{ px: 3, py: 1.5, borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#121212' }}>
        <Stack direction="row" spacing={2} alignItems="center">
           <IconButton sx={{ color: '#aaa' }}>
             <BackIcon />
           </IconButton>
           <Box>
             <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.2 }}>NeuroDetect v2.1</Typography>
             <Typography variant="caption" sx={{ color: '#888' }}>Diagnostic Workstation</Typography>
           </Box>
        </Stack>
        <Stack direction="row" spacing={3} alignItems="center">
           <Box sx={{ textAlign: 'right' }}>
             <Typography variant="body2" fontWeight={600}>Patient: Sarah Martinez</Typography>
             <Typography variant="caption" sx={{ color: '#888' }}>ID: #9928-11A • DOB: 12/04/1985</Typography>
           </Box>
           <Avatar sx={{ bgcolor: '#333', color: '#fff' }}>SM</Avatar>
        </Stack>
      </Box>

      {/* Main Workspace */}
      <Grid container sx={{ flexGrow: 1 }}>
        
        {/* Left Panel: Input & History */}
        <Grid item xs={12} md={2} sx={{ borderRight: '1px solid #333', bgcolor: '#121212', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 2, flexGrow: 1 }}>
            <Typography variant="subtitle2" sx={{ color: '#888', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>Input Source</Typography>
            
            <Paper 
              variant="outlined" 
              sx={{ 
                height: 140, 
                border: '2px dashed #444', 
                bgcolor: 'transparent', 
                borderRadius: 2,
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#666',
                cursor: 'pointer',
                mb: 4,
                '&:hover': { borderColor: '#1976d2', color: '#1976d2' }
              }}
            >
              <UploadIcon sx={{ fontSize: 40, mb: 1 }} />
              <Typography variant="caption" fontWeight={600}>Upload DICOM / MRI</Typography>
              <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>Drag & drop files here</Typography>
            </Paper>

            <Typography variant="subtitle2" sx={{ color: '#888', mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>History</Typography>
            <List>
              {patientHistory.map((scan) => (
                <ListItem 
                  key={scan.id} 
                  button 
                  sx={{ 
                    mb: 1, 
                    borderRadius: 1, 
                    bgcolor: '#1a1a1a', 
                    border: '1px solid #333',
                    '&:hover': { bgcolor: '#222', borderColor: '#555' }
                  }}
                >
                  <ListItemAvatar>
                    <Avatar variant="rounded" sx={{ bgcolor: '#333' }}>
                      <FileIcon sx={{ color: '#888' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText 
                    primary={<Typography variant="body2" fontWeight={600}>{scan.type}</Typography>}
                    secondary={<Typography variant="caption" sx={{ color: '#888' }}>{scan.date}</Typography>}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>

        {/* Center Panel: The Viewer */}
        <Grid item xs={12} md={7} sx={{ bgcolor: '#000', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          
          {/* Floating Toolbar */}
          <Paper 
            elevation={4}
            sx={{ 
              position: 'absolute', 
              top: 20, 
              left: '50%', 
              transform: 'translateX(-50%)', 
              zIndex: 10,
              bgcolor: 'rgba(30,30,30,0.9)',
              backdropFilter: 'blur(8px)',
              border: '1px solid #444',
              borderRadius: 4,
              px: 2,
              py: 1,
              display: 'flex',
              gap: 1
            }}
          >
            <Tooltip title="Zoom">
              <IconButton size="small" sx={{ color: '#fff' }} onClick={() => setZoom(prev => Math.min(prev + 10, 200))}>
                <ZoomIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Contrast">
              <IconButton size="small" sx={{ color: '#fff' }} onClick={() => setContrast(prev => prev === 100 ? 150 : 100)}>
                <ContrastIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Measure">
              <IconButton size="small" sx={{ color: '#fff' }}>
                <MeasureIcon />
              </IconButton>
            </Tooltip>
            <Divider orientation="vertical" flexItem sx={{ bgcolor: '#555' }} />
            <Tooltip title="Toggle AI Mask">
              <IconButton 
                size="small" 
                sx={{ color: showAiOverlay ? '#ff5252' : '#fff' }} 
                onClick={() => setShowAiOverlay(!showAiOverlay)}
              >
                {showAiOverlay ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Reset View">
              <IconButton size="small" sx={{ color: '#fff' }} onClick={() => { setZoom(100); setContrast(100); }}>
                <ResetIcon />
              </IconButton>
            </Tooltip>
          </Paper>

          {/* Image Canvas */}
          <Box 
            sx={{ 
              position: 'relative', 
              width: '80%', 
              height: '80%', 
              transition: 'all 0.3s ease',
              transform: `scale(${zoom / 100})`,
              filter: `contrast(${contrast}%)`
            }}
          >
            <img 
              src={mriImage} 
              alt="MRI Scan" 
              style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.9 }} 
            />
            
            {/* AI Heatmap Overlay */}
            {showAiOverlay && (
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: '40%',
                  left: '45%',
                  width: '15%',
                  height: '15%',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 61, 0, 0.6) 0%, rgba(255, 61, 0, 0.1) 70%, transparent 100%)',
                  boxShadow: '0 0 20px rgba(255, 61, 0, 0.4)',
                  animation: 'pulse 3s infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)', opacity: 0.7 },
                    '50%': { transform: 'scale(1.1)', opacity: 0.9 },
                    '100%': { transform: 'scale(1)', opacity: 0.7 },
                  }
                }}
              />
            )}
            
            {/* Metadata Overlay */}
            <Box sx={{ position: 'absolute', bottom: 10, left: 10, color: '#aaa', fontSize: 12, fontFamily: 'monospace' }}>
              <p>Series: 4A • Slice: 14/32</p>
              <p>TE: 92ms • TR: 4500ms</p>
              <p>Zoom: {zoom}% • WL: {contrast}</p>
            </Box>
          </Box>
        </Grid>

        {/* Right Panel: AI Findings */}
        <Grid item xs={12} md={3} sx={{ borderLeft: '1px solid #333', bgcolor: '#121212', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ p: 3, flexGrow: 1 }}>
            
            {/* Analysis Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, color: '#4caf50' }}>
              <ScienceIcon />
              <Typography variant="subtitle2" fontWeight={600}>AI ANALYSIS COMPLETE</Typography>
            </Box>

            {/* Top Prediction */}
            <Paper sx={{ p: 2, bgcolor: '#1e1e1e', mb: 4, border: '1px solid #333' }}>
              <Typography variant="caption" sx={{ color: '#888', mb: 1, display: 'block' }}>Primary Detection</Typography>
              <Typography variant="h4" fontWeight={700} color="error.light" gutterBottom>
                Glioblastoma
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Confidence</Typography>
                <Typography variant="body2" fontWeight={700}>94.2%</Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={94.2} 
                color="error" 
                sx={{ height: 8, borderRadius: 4, bgcolor: '#333' }} 
              />
            </Paper>

            {/* Secondary Findings */}
            <Typography variant="subtitle2" sx={{ color: '#888', mb: 2, textTransform: 'uppercase' }}>Additional Findings</Typography>
            <List dense sx={{ mb: 4 }}>
              {[
                { label: 'Peritumoral Edema', severity: 'High' },
                { label: 'Midline Shift: 3mm', severity: 'Medium' },
                { label: 'Mass Effect', severity: 'Medium' },
              ].map((item, index) => (
                <ListItem key={index} sx={{ px: 0, py: 1, borderBottom: '1px solid #222' }}>
                  <ListItemText primary={item.label} primaryTypographyProps={{ style: { color: '#ddd' } }} />
                  <Chip 
                    label={item.severity} 
                    size="small" 
                    sx={{ 
                      height: 20, 
                      fontSize: '0.65rem',
                      bgcolor: item.severity === 'High' ? 'rgba(211, 47, 47, 0.2)' : 'rgba(255, 152, 0, 0.2)',
                      color: item.severity === 'High' ? '#ef5350' : '#ff9800',
                    }} 
                  />
                </ListItem>
              ))}
            </List>

            {/* Action Buttons */}
            <Stack spacing={2} sx={{ mt: 'auto' }}>
              <Button 
                variant="contained" 
                color="primary" 
                startIcon={<ReportIcon />}
                fullWidth
                sx={{ py: 1.5, fontWeight: 600 }}
              >
                Add to Report
              </Button>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                  variant="outlined" 
                  color="warning" 
                  startIcon={<FlagIcon />}
                  fullWidth
                >
                  Flag
                </Button>
                <Button 
                  variant="outlined" 
                  color="error" 
                  startIcon={<RejectIcon />}
                  fullWidth
                >
                  Reject
                </Button>
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
