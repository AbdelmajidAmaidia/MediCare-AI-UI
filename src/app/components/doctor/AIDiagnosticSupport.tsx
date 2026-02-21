import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  TextField,
  Chip,
  LinearProgress,
  Stack,
  IconButton,
  Paper,
} from '@mui/material';
import {
  CloudUpload as CloudUploadIcon,
  CheckCircle as CheckIcon,
  Cancel as CancelIcon,
  Psychology as BrainIcon,
  Warning as WarningIcon,
} from '@mui/icons-material';

const xrayImage = "https://images.unsplash.com/photo-1584555684040-bad07f46a21f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIweHJheSUyMGNoZXN0JTIwc2NhbnxlbnwxfHx8fDE3NzA0OTUxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function AIDiagnosticSupport() {
  const [symptoms, setSymptoms] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const handleScan = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setAnalyzed(true);
    }, 2000);
  };

  return (
    <Box sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <BrainIcon fontSize="large" color="primary" />
        <Box>
          <Typography variant="h4" fontWeight={600}>
            AI Diagnostic Support
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Advanced medical imaging analysis and symptom correlation
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={4} sx={{ height: 'calc(100% - 100px)' }}>
        {/* Left Column: Input */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%' }}>
          <Stack spacing={3} sx={{ height: '100%' }}>
            <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" gutterBottom>
                  Medical Imaging
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    border: '2px dashed',
                    borderColor: 'primary.main',
                    borderRadius: 2,
                    bgcolor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    mb: 2,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {analyzed ? (
                    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                      <img 
                        src={xrayImage} 
                        alt="X-Ray Scan" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} 
                      />
                      {/* Heatmap Overlay Simulation */}
                      <Box 
                        sx={{
                          position: 'absolute',
                          top: '30%',
                          right: '40%',
                          width: '100px',
                          height: '100px',
                          borderRadius: '50%',
                          background: 'radial-gradient(circle, rgba(255,0,0,0.6) 0%, rgba(255,0,0,0) 70%)',
                          border: '2px solid red',
                        }}
                      />
                      <Chip 
                        label="Region of Interest Detected" 
                        color="error" 
                        size="small" 
                        sx={{ position: 'absolute', top: 10, right: 10 }} 
                      />
                    </Box>
                  ) : (
                    <>
                      <CloudUploadIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
                      <Typography variant="body1" color="text.secondary" align="center">
                        Drag and drop X-Ray or MRI scans here
                      </Typography>
                      <Button variant="outlined" sx={{ mt: 2 }}>
                        Browse Files
                      </Button>
                    </>
                  )}
                </Box>
                <Button 
                  variant="contained" 
                  size="large" 
                  fullWidth 
                  onClick={handleScan}
                  disabled={analyzing || analyzed}
                >
                  {analyzing ? 'Analyzing...' : analyzed ? 'Scan Complete' : 'Scan Now'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Patient Symptoms
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Enter patient reported symptoms (e.g., persistent cough, chest pain, fever)..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                />
                <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                  <Chip label="Cough" onDelete={() => {}} />
                  <Chip label="Shortness of Breath" onDelete={() => {}} />
                  <Chip label="+ Add Symptom" variant="outlined" onClick={() => {}} />
                </Box>
              </CardContent>
            </Card>
          </Stack>
        </Grid>

        {/* Right Column: AI Output */}
        <Grid size={{ xs: 12, md: 6 }}>
          {analyzed ? (
            <Stack spacing={3}>
              <Card sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                <CardContent sx={{ textAlign: 'center', py: 4 }}>
                  <Typography variant="h6" sx={{ opacity: 0.9 }}>
                    AI Confidence Score
                  </Typography>
                  <Typography variant="h1" sx={{ fontWeight: 800, my: 1 }}>
                    94%
                  </Typography>
                  <Typography variant="body1">
                    High probability of pathology detected
                  </Typography>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Top Diagnostic Predictions
                  </Typography>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight={600}>Pneumonia</Typography>
                      <Typography variant="body1" fontWeight={600}>94%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={94} color="error" sx={{ height: 10, borderRadius: 5 }} />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight={500}>Bronchitis</Typography>
                      <Typography variant="body1" color="text.secondary">4%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={4} color="primary" sx={{ height: 8, borderRadius: 5, opacity: 0.5 }} />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body1" fontWeight={500}>Lung Nodule</Typography>
                      <Typography variant="body1" color="text.secondary">2%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={2} color="primary" sx={{ height: 8, borderRadius: 5, opacity: 0.3 }} />
                  </Box>

                  <Box sx={{ bgcolor: 'warning.light', p: 2, borderRadius: 1, display: 'flex', gap: 2, alignItems: 'start' }}>
                    <WarningIcon color="warning" />
                    <Typography variant="body2" color="text.primary">
                      <strong>Note:</strong> Opacity observed in the right upper lobe consistent with lobar pneumonia. Correlate with clinical findings.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Doctor Validation
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Please review the AI analysis and provide your feedback to improve the model.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="success" 
                      startIcon={<CheckIcon />}
                      fullWidth
                    >
                      Agree with Diagnosis
                    </Button>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      startIcon={<CancelIcon />}
                      fullWidth
                    >
                      Disagree
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          ) : (
            <Box 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'text.secondary',
                border: '2px dashed #e0e0e0',
                borderRadius: 4
              }}
            >
              <Typography variant="h6">
                Upload an image and run scan to see AI analysis
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
