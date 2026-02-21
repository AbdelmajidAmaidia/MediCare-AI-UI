import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  TextField,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Tooltip,
} from '@mui/material';
import {
  VideoCall as VideoIcon,
  Mic as MicIcon,
  MicOff as MicOffIcon,
  Videocam as VideocamIcon,
  VideocamOff as VideocamOffIcon,
  SmartToy as AiIcon,
  MedicalServices as MedicalIcon,
  Description as NotesIcon,
  Science as ScienceIcon,
} from '@mui/icons-material';

export default function ConsultationInterface() {
  const [tabValue, setTabValue] = useState(0);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const patientInfo = {
    name: 'Emily Rodriguez',
    age: 34,
    gender: 'Female',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Sulfa drugs'],
    conditions: ['Type 2 Diabetes', 'Hypertension'],
  };

  const aiRecommendations = [
    {
      id: 1,
      type: 'Diagnosis',
      text: 'Based on reported symptoms (chest discomfort, shortness of breath), consider: ECG test, Cardiac enzyme markers',
      confidence: 'High',
    },
    {
      id: 2,
      type: 'Medication',
      text: 'Patient is on Metformin for diabetes. Current A1C levels suggest dosage is effective.',
      confidence: 'Medium',
    },
    {
      id: 3,
      type: 'Alert',
      text: 'Patient has documented allergy to Penicillin. Avoid prescribing related antibiotics.',
      confidence: 'High',
    },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 1, fontWeight: 600 }}>
        Consultation Mode
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Active consultation with {patientInfo.name}
      </Typography>

      <Grid container spacing={3}>
        {/* Left Panel - Video/Patient Info */}
        <Grid size={{ xs: 12, lg: 5 }}>
          {/* Video Call */}
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: 0 }}>
              <Box
                sx={{
                  position: 'relative',
                  bgcolor: '#1a1a1a',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                }}
              >
                <Avatar sx={{ width: 120, height: 120, bgcolor: 'primary.main', fontSize: 48 }}>
                  {patientInfo.name.charAt(0)}
                </Avatar>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: isMicOn ? 'rgba(255,255,255,0.2)' : 'error.main',
                      '&:hover': { bgcolor: isMicOn ? 'rgba(255,255,255,0.3)' : 'error.dark' },
                    }}
                    onClick={() => setIsMicOn(!isMicOn)}
                  >
                    {isMicOn ? <MicIcon /> : <MicOffIcon />}
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: isVideoOn ? 'rgba(255,255,255,0.2)' : 'error.main',
                      '&:hover': { bgcolor: isVideoOn ? 'rgba(255,255,255,0.3)' : 'error.dark' },
                    }}
                    onClick={() => setIsVideoOn(!isVideoOn)}
                  >
                    {isVideoOn ? <VideocamIcon /> : <VideocamOffIcon />}
                  </Button>
                  <Button variant="contained" color="error">
                    End Call
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Patient Info Card */}
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Patient Information
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Avatar sx={{ width: 56, height: 56, bgcolor: 'primary.main' }}>
                  {patientInfo.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {patientInfo.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {patientInfo.age} years • {patientInfo.gender} • {patientInfo.bloodType}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Allergies
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {patientInfo.allergies.map((allergy) => (
                    <Chip key={allergy} label={allergy} color="error" size="small" />
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Existing Conditions
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {patientInfo.conditions.map((condition) => (
                    <Chip key={condition} label={condition} variant="outlined" size="small" />
                  ))}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Panel - Tabbed Interface */}
        <Grid size={{ xs: 12, lg: 7 }}>
          <Card sx={{ height: '100%' }}>
            <Tabs 
              value={tabValue} 
              onChange={(e, v) => setTabValue(v)} 
              variant="scrollable"
              scrollButtons="auto"
              sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
              <Tab icon={<NotesIcon />} iconPosition="start" label="Clinical Notes" />
              <Tab icon={<MedicalIcon />} iconPosition="start" label="Prescriptions" />
              <Tab icon={<ScienceIcon />} iconPosition="start" label="Order Lab Tests" />
              <Tab icon={<AiIcon />} iconPosition="start" label="AI Diagnosis Helper" />
            </Tabs>

            <CardContent sx={{ height: 'calc(100% - 72px)', overflow: 'auto' }}>
              {/* Tab 0: Clinical Notes */}
              {tabValue === 0 && (
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Document consultation findings and recommendations
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Chief Complaint"
                    placeholder="Enter patient's main concern..."
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Clinical Assessment"
                    placeholder="Enter your assessment..."
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Treatment Plan"
                    placeholder="Enter treatment recommendations..."
                    sx={{ mb: 2 }}
                  />
                  <Button variant="contained" fullWidth>
                    Save Notes
                  </Button>
                </Box>
              )}

              {/* Tab 1: Prescription Writer */}
              {tabValue === 1 && (
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Create and manage prescriptions
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Medication Name"
                        placeholder="Search medication..."
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Dosage" placeholder="e.g., 500mg" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Frequency</InputLabel>
                        <Select defaultValue="" label="Frequency">
                          <MenuItem value="once">Once daily</MenuItem>
                          <MenuItem value="twice">Twice daily</MenuItem>
                          <MenuItem value="three">Three times daily</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Duration" placeholder="e.g., 7 days" />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField fullWidth label="Quantity" placeholder="e.g., 14 tablets" />
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        label="Special Instructions"
                        placeholder="e.g., Take with food"
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button variant="outlined" fullWidth>
                        Add Medication
                      </Button>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
                    Current Prescription
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Lisinopril 10mg"
                        secondary="Once daily • 30 days • Take in the morning"
                      />
                    </ListItem>
                  </List>

                  <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                    Send Prescription
                  </Button>
                </Box>
              )}

              {/* Tab 2: Order Exams */}
              {tabValue === 2 && (
                <Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Order diagnostic tests and imaging
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid size={12}>
                      <FormControl fullWidth>
                        <InputLabel>Test Type</InputLabel>
                        <Select defaultValue="" label="Test Type">
                          <MenuItem value="blood">Blood Test</MenuItem>
                          <MenuItem value="xray">X-Ray</MenuItem>
                          <MenuItem value="mri">MRI</MenuItem>
                          <MenuItem value="ct">CT Scan</MenuItem>
                          <MenuItem value="ultrasound">Ultrasound</MenuItem>
                          <MenuItem value="ecg">ECG</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        label="Specific Tests"
                        placeholder="e.g., Complete Blood Count, Lipid Panel"
                      />
                    </Grid>
                    <Grid size={12}>
                      <FormControl fullWidth>
                        <InputLabel>Priority</InputLabel>
                        <Select defaultValue="routine" label="Priority">
                          <MenuItem value="urgent">Urgent</MenuItem>
                          <MenuItem value="routine">Routine</MenuItem>
                          <MenuItem value="followup">Follow-up</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Clinical Indication"
                        placeholder="Reason for test..."
                      />
                    </Grid>
                    <Grid size={12}>
                      <Button variant="outlined" fullWidth>
                        Add Test Order
                      </Button>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  <Typography variant="body2" sx={{ mb: 2, fontWeight: 600 }}>
                    Ordered Tests
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Blood Test - Complete Blood Count"
                        secondary="Priority: Routine • Ordered today"
                      />
                    </ListItem>
                  </List>

                  <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                    Submit Orders
                  </Button>
                </Box>
              )}

              {/* Tab 3: AI Diagnosis Helper */}
              {tabValue === 3 && (
                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                    <AiIcon color="primary" fontSize="large" />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        AI Diagnostic Assistant
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Powered by MediCare AI • Analysis based on patient history and current symptoms
                      </Typography>
                    </Box>
                  </Box>

                  <Grid container spacing={2}>
                    {aiRecommendations.map((rec) => (
                      <Grid size={12} key={rec.id}>
                        <Card variant="outlined" sx={{ borderColor: rec.type === 'Alert' ? 'error.main' : 'primary.main', bgcolor: rec.type === 'Alert' ? '#fff5f5' : '#f0f7ff' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                              <Chip
                                label={rec.type}
                                size="small"
                                color={rec.type === 'Alert' ? 'error' : 'primary'}
                              />
                              <Chip
                                label={`${rec.confidence} Confidence`}
                                size="small"
                                variant="outlined"
                                sx={{ bgcolor: 'white' }}
                              />
                            </Box>
                            <Typography variant="body1" sx={{ mt: 1, fontWeight: 500 }}>
                              {rec.text}
                            </Typography>
                            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                              <Button size="small" variant="outlined" startIcon={<MedicalIcon />}>
                                Apply Recommendation
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ mt: 4, p: 2, bgcolor: 'background.paper', borderRadius: 2, border: '1px solid #e0e0e0' }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Ask AI Assistant
                    </Typography>
                    <TextField 
                      fullWidth 
                      placeholder="Ask a question about the patient's condition or drug interactions..."
                      InputProps={{
                        endAdornment: <Button variant="contained" size="small">Ask</Button>
                      }}
                    />
                  </Box>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
