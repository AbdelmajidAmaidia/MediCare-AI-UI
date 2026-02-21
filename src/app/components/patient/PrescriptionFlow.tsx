import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Stack,
  Fab,
  Drawer,
  Badge,
  Grid,
  Divider
} from '@mui/material';
import {
  ArrowBack,
  Search,
  LocalPharmacy,
  TwoWheeler,
  Storefront,
  Description,
  LocationOn,
  Star,
  CheckCircle,
  AccessTime,
  Medication,
  LocalHospital,
  ChevronRight,
  Home
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'motion/react';

// --- Assets ---
const MAP_IMAGE = "https://images.unsplash.com/photo-1593099623478-40e6cd012a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbWFwJTIwdG9wJTIwdmlldyUyMGxpZ2h0JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzA1NTIzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// --- Types & Data ---
type Step = 'received' | 'pharmacy-list' | 'address-confirm';

const pharmacies = [
  {
    id: 1,
    name: 'Pharmacie du Centre',
    distance: '0.3 km',
    rating: 4.8,
    status: 'Open • Stock Available',
    isBestMatch: true,
  },
  {
    id: 2,
    name: 'Pharmacie de la Gare',
    distance: '1.2 km',
    rating: 4.5,
    status: 'Open',
    isBestMatch: false,
  },
  {
    id: 3,
    name: 'Pharmacie Sud',
    distance: '2.5 km',
    rating: 4.2,
    status: 'Open',
    isBestMatch: false,
  },
];

// --- Components ---

export default function PrescriptionFlow() {
  const [step, setStep] = useState<Step>('received');
  const [selectedPharmacy, setSelectedPharmacy] = useState<number | null>(null);

  // --- Handlers ---
  const handleSelectDelivery = () => setStep('pharmacy-list');
  const handleSelectPharmacy = (id: number) => {
    setSelectedPharmacy(id);
    setStep('address-confirm');
  };
  const handleBack = () => {
    if (step === 'address-confirm') setStep('pharmacy-list');
    else if (step === 'pharmacy-list') setStep('received');
  };

  return (
    <Box sx={{ 
      width: '100%', 
      maxWidth: 480, 
      mx: 'auto', 
      height: '100vh', 
      bgcolor: '#f5f7fa', 
      position: 'relative', 
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* Dynamic Header */}
      <Box sx={{ 
        p: 2, 
        pt: 3, 
        bgcolor: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        boxShadow: '0px 1px 3px rgba(0,0,0,0.05)',
        zIndex: 10
      }}>
        {step !== 'received' && (
          <IconButton onClick={handleBack} sx={{ mr: 1 }}>
            <ArrowBack />
          </IconButton>
        )}
        <Typography variant="h6" fontWeight={700} sx={{ flexGrow: 1 }}>
          {step === 'received' ? 'Prescription' : step === 'pharmacy-list' ? 'Select Pharmacy' : 'Delivery Details'}
        </Typography>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', position: 'relative' }}>
        <AnimatePresence mode="wait">
          
          {/* STEP 1: Prescription Received */}
          {step === 'received' && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{ padding: 24, height: '100%' }}
            >
              <Typography variant="h5" fontWeight={800} gutterBottom sx={{ color: '#1a237e' }}>
                Dr. House sent you a prescription
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Today, {new Date().toLocaleDateString()}
              </Typography>

              {/* Medication Summary */}
              <Card variant="outlined" sx={{ mb: 4, borderRadius: 3, bgcolor: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <CardContent>
                  <Typography variant="subtitle2" color="primary" fontWeight={700} sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Medication fontSize="small" /> MEDICATION SUMMARY
                  </Typography>
                  <List disablePadding>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}>
                          <LocalHospital fontSize="small" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Amoxicillin 500mg" secondary="1 tablet, 3x per day • 7 days" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem sx={{ px: 0 }}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: '#e3f2fd', color: '#1976d2' }}>
                          <LocalHospital fontSize="small" />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Doliprane 1000mg" secondary="As needed for pain" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>

              {/* Action Split */}
              <Grid container spacing={2}>
                {/* Delivery Option */}
                <Grid item xs={6}>
                  <Paper
                    onClick={handleSelectDelivery}
                    elevation={0}
                    sx={{
                      p: 2,
                      height: '100%',
                      cursor: 'pointer',
                      border: '2px solid #1976d2',
                      bgcolor: '#f0f7ff',
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      position: 'relative',
                      transition: 'all 0.2s',
                      '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 }
                    }}
                  >
                    <Chip 
                      label="Recommended" 
                      color="primary" 
                      size="small" 
                      sx={{ position: 'absolute', top: -10, height: 20, fontSize: '0.65rem' }} 
                    />
                    <Avatar sx={{ width: 56, height: 56, bgcolor: 'white', color: '#1976d2', mb: 2, boxShadow: 1 }}>
                      <TwoWheeler fontSize="large" />
                    </Avatar>
                    <Typography variant="subtitle1" fontWeight={700}>Home Delivery</Typography>
                    <Typography variant="caption" color="primary.main" fontWeight={600} display="block" sx={{ mt: 0.5 }}>
                      In ~2 hours
                    </Typography>
                  </Paper>
                </Grid>

                {/* Pickup Option */}
                <Grid item xs={6}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      height: '100%',
                      cursor: 'pointer',
                      border: '1px solid #e0e0e0',
                      borderRadius: 3,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'white',
                      transition: 'all 0.2s',
                      '&:hover': { bgcolor: '#fafafa', borderColor: '#bdbdbd' }
                    }}
                  >
                    <Avatar sx={{ width: 56, height: 56, bgcolor: '#f5f5f5', color: '#757575', mb: 2 }}>
                      <Storefront fontSize="large" />
                    </Avatar>
                    <Typography variant="subtitle1" fontWeight={700}>Click & Collect</Typography>
                    <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 0.5 }}>
                      Go to Pharmacy
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              <Button 
                fullWidth 
                startIcon={<Description />} 
                sx={{ mt: 4, textTransform: 'none', color: 'text.secondary', textDecoration: 'underline' }}
              >
                View Full Prescription PDF
              </Button>
            </motion.div>
          )}

          {/* STEP 2: Select Pharmacy */}
          {step === 'pharmacy-list' && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{ padding: 16, height: '100%' }}
            >
              <TextField
                fullWidth
                placeholder="Search location..."
                defaultValue="Paris 75008"
                variant="outlined"
                size="small"
                sx={{ mb: 3, bgcolor: 'white' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <Stack spacing={2}>
                {pharmacies.map((pharmacy) => (
                  <Paper
                    key={pharmacy.id}
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      position: 'relative',
                      border: pharmacy.isBestMatch ? '2px solid #4caf50' : '1px solid #e0e0e0',
                      bgcolor: pharmacy.isBestMatch ? '#f1f8e9' : 'white',
                    }}
                  >
                    {pharmacy.isBestMatch && (
                      <Chip 
                        label="🏆 Nearest Partner" 
                        color="success" 
                        size="small" 
                        sx={{ position: 'absolute', top: -10, left: 16, height: 20, fontSize: '0.7rem' }} 
                      />
                    )}
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1, mt: pharmacy.isBestMatch ? 1 : 0 }}>
                      <Typography variant="subtitle1" fontWeight={700}>{pharmacy.name}</Typography>
                      <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Star fontSize="inherit" sx={{ color: '#ffb400', fontSize: 16 }} />
                        <Typography variant="body2" fontWeight={600}>{pharmacy.rating}</Typography>
                      </Stack>
                    </Box>

                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn fontSize="inherit" /> {pharmacy.distance}
                      </Typography>
                      <Typography variant="caption" color="success.main" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}>
                        <AccessTime fontSize="inherit" /> {pharmacy.status}
                      </Typography>
                    </Stack>

                    {pharmacy.isBestMatch ? (
                      <Button 
                        fullWidth 
                        variant="contained" 
                        color="success" 
                        onClick={() => handleSelectPharmacy(pharmacy.id)}
                        sx={{ textTransform: 'none', borderRadius: 2 }}
                      >
                        Select this Pharmacy
                      </Button>
                    ) : (
                      <Button 
                        fullWidth 
                        variant="outlined" 
                        color="inherit" 
                        onClick={() => handleSelectPharmacy(pharmacy.id)}
                        sx={{ textTransform: 'none', borderRadius: 2 }}
                      >
                        Select
                      </Button>
                    )}
                  </Paper>
                ))}
              </Stack>
            </motion.div>
          )}

          {/* STEP 3: Address Confirmation (Bottom Sheet View) */}
          {step === 'address-confirm' && (
             <motion.div
               key="step3"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               style={{ 
                 position: 'absolute', 
                 top: 0, left: 0, right: 0, bottom: 0, 
                 zIndex: 20,
                 display: 'flex',
                 flexDirection: 'column'
               }}
             >
               {/* Map Background */}
               <Box 
                 sx={{ 
                   flexGrow: 1, 
                   backgroundImage: `url(${MAP_IMAGE})`, 
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   position: 'relative'
                 }}
               >
                 {/* Back Button Overlay */}
                 <Fab 
                    size="small" 
                    sx={{ position: 'absolute', top: 16, left: 16, bgcolor: 'white' }}
                    onClick={handleBack}
                 >
                    <ArrowBack />
                 </Fab>
               </Box>

               {/* Bottom Sheet */}
               <Paper 
                 elevation={10} 
                 component={motion.div}
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 sx={{ 
                   p: 3, 
                   pb: 4, 
                   borderTopLeftRadius: 24, 
                   borderTopRightRadius: 24, 
                   bgcolor: 'white',
                   position: 'relative',
                   mt: -2 // Overlap map slightly
                 }}
               >
                 <Box sx={{ width: 40, height: 4, bgcolor: '#e0e0e0', borderRadius: 2, mx: 'auto', mb: 3 }} />
                 
                 <Typography variant="h6" fontWeight={700} gutterBottom>Confirm Delivery</Typography>
                 
                 <Stack spacing={2} sx={{ mb: 3 }}>
                    <TextField 
                      fullWidth 
                      label="Delivery Address" 
                      defaultValue="12 Avenue des Champs-Élysées" 
                      variant="filled"
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><Home color="action"/></InputAdornment>,
                      }}
                    />
                    <Stack direction="row" spacing={2}>
                      <TextField 
                        fullWidth 
                        label="Floor / Door Code" 
                        placeholder="e.g. 4th, Code 1234" 
                        variant="filled" 
                      />
                      <TextField 
                        fullWidth 
                        label="Phone" 
                        defaultValue="+33 6 12 34 56 78" 
                        variant="filled" 
                      />
                    </Stack>
                 </Stack>

                 <Paper variant="outlined" sx={{ p: 2, bgcolor: '#f5f7fa', mb: 3, borderRadius: 2 }}>
                   <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                     <Typography variant="body2" color="text.secondary">Pharmacy</Typography>
                     <Typography variant="body2" fontWeight={600}>Pharmacie du Centre</Typography>
                   </Stack>
                   <Stack direction="row" justifyContent="space-between">
                     <Typography variant="body2" color="text.secondary">Delivery Fee</Typography>
                     <Typography variant="body2" fontWeight={600}>€4.50</Typography>
                   </Stack>
                 </Paper>

                 <Button 
                   fullWidth 
                   variant="contained" 
                   size="large" 
                   sx={{ 
                     height: 56, 
                     fontWeight: 700, 
                     borderRadius: 3,
                     textTransform: 'none',
                     fontSize: '1rem',
                     boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)'
                   }}
                 >
                   Confirm & Send Order
                 </Button>

               </Paper>
             </motion.div>
          )}

        </AnimatePresence>
      </Box>
    </Box>
  );
}
