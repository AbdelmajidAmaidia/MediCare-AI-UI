import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Button,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
} from '@mui/material';
import {
  Check,
  Close,
  FormatColorFill,
  TextFields,
  SmartButton,
  AccessibilityNew,
  LightMode,
  DarkMode,
  ContentCopy,
} from '@mui/icons-material';
import { Logo } from '../Logo';

const ColorSwatch = ({ name, hex, dark = false }: { name: string; hex: string; dark?: boolean }) => (
  <Paper
    elevation={0}
    sx={{
      p: 2,
      borderRadius: 3,
      border: '1px solid #E2E8F0',
      display: 'flex',
      flexDirection: 'column',
      gap: 1.5,
      transition: 'transform 0.2s',
      '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
    }}
  >
    <Box
      sx={{
        height: 100,
        borderRadius: 2,
        bgcolor: hex,
        border: hex === '#FFFFFF' ? '1px solid #E5E7EB' : 'none',
      }}
    />
    <Box>
      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1B365D' }}>
        {name}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="caption" sx={{ fontFamily: 'monospace', color: '#64748B', fontSize: '0.85rem' }}>
          {hex}
        </Typography>
        <ContentCopy sx={{ fontSize: 14, color: '#94A3B8', cursor: 'pointer' }} />
      </Box>
    </Box>
  </Paper>
);

const TypographySpec = ({ role, font, size, weight, sample }: any) => (
  <Box sx={{ mb: 4 }}>
    <Grid container alignItems="baseline" spacing={2}>
      <Grid item xs={12} md={3}>
        <Typography variant="caption" sx={{ color: '#64748B', fontWeight: 600, display: 'block', mb: 0.5 }}>
          {role}
        </Typography>
        <Typography variant="body2" sx={{ color: '#94A3B8' }}>
          {font} • {weight} • {size}
        </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography
          sx={{
            fontFamily: font.includes('Montserrat') ? '"Montserrat", sans-serif' : '"Lato", sans-serif',
            fontWeight: weight === 'Bold' ? 700 : weight === 'Semibold' ? 600 : 400,
            fontSize: size,
            color: '#1E293B',
            lineHeight: 1.4,
          }}
        >
          {sample}
        </Typography>
      </Grid>
    </Grid>
    <Divider sx={{ mt: 3, borderStyle: 'dashed' }} />
  </Box>
);

export default function BrandGuidelines() {
  return (
    <Box sx={{ bgcolor: '#F8FAFC', minHeight: '100vh', pb: 10 }}>
      {/* Hero Section */}
      <Box sx={{ bgcolor: '#1B365D', color: 'white', pt: 12, pb: 10, px: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
            <Box sx={{ flex: 1 }}>
              <Chip 
                label="Version 1.0" 
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.1)', 
                  color: '#2E9CCA', 
                  fontWeight: 600, 
                  mb: 3,
                  border: '1px solid rgba(46, 156, 202, 0.3)'
                }} 
              />
              <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontFamily: 'Montserrat, sans-serif' }}>
                Brand Guidelines
              </Typography>
              <Typography variant="h5" sx={{ color: '#94A3B8', fontWeight: 400, maxWidth: 600, lineHeight: 1.6 }}>
                The definitive guide to the visual identity, voice, and user experience of MediCare AI.
              </Typography>
            </Box>
            <Box 
              sx={{ 
                p: 6, 
                bgcolor: 'white', 
                borderRadius: 4, 
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: 300
              }}
            >
              <Logo size={80} showText={true} />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -6 }}>
        {/* 1. Vision & Values */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6, borderTop: '4px solid #2E9CCA' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <LightMode sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Vision & Values
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Our Mission
              </Typography>
              <Typography sx={{ color: '#475569', lineHeight: 1.8 }}>
                To revolutionize healthcare administration through intelligent automation, empowering medical professionals to focus on what matters most: patient care. We bridge the gap between complex medical data and actionable insights.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Core Values
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {['Trust & Security', 'Clinical Precision', 'Empathy', 'Innovation'].map((val) => (
                  <Chip key={val} label={val} sx={{ bgcolor: '#F1F5F9', color: '#334155', fontWeight: 600 }} />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* 2. Logo Usage */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <SmartButton sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Logo Usage
            </Typography>
          </Box>
          
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Primary Lockup</Typography>
              <Box sx={{ p: 4, border: '1px dashed #CBD5E1', borderRadius: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
                <Logo size={48} />
              </Box>
              <Typography variant="body2" sx={{ color: '#64748B' }}>
                Use on white or light grey backgrounds. Ensure 24px clear space on all sides.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Dark Mode / Inverted</Typography>
              <Box sx={{ p: 4, bgcolor: '#1B365D', borderRadius: 2, mb: 2, display: 'flex', justifyContent: 'center' }}>
                <Logo size={48} color="white" textColor="white" />
              </Box>
              <Typography variant="body2" sx={{ color: '#64748B' }}>
                Use on Deep Navy or dark image overlays. Text must be pure white.
              </Typography>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4 }}>
             <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Do's & Don'ts</Typography>
             <Grid container spacing={2}>
               <Grid item xs={12} md={4}>
                 <Alert severity="success" icon={<Check />}>Scale proportionally</Alert>
               </Grid>
               <Grid item xs={12} md={4}>
                 <Alert severity="error" icon={<Close />}>Do not change colors</Alert>
               </Grid>
               <Grid item xs={12} md={4}>
                 <Alert severity="error" icon={<Close />}>Do not rotate or distort</Alert>
               </Grid>
             </Grid>
          </Box>
        </Paper>

        {/* 3. Color Palette */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <FormatColorFill sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Color Palette
            </Typography>
          </Box>

          <Typography variant="h6" sx={{ mb: 3 }}>Primary Colors</Typography>
          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Deep Navy" hex="#1B365D" dark />
            </Grid>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Vivid Pulse Blue" hex="#2E9CCA" />
            </Grid>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Pure White" hex="#FFFFFF" />
            </Grid>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Slate Grey" hex="#64748B" />
            </Grid>
          </Grid>

          <Typography variant="h6" sx={{ mb: 3 }}>Semantic Colors (UI)</Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Success Green" hex="#10B981" />
            </Grid>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Warning Amber" hex="#F59E0B" />
            </Grid>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Error Red" hex="#EF4444" />
            </Grid>
            <Grid item xs={6} md={3}>
              <ColorSwatch name="Info Sky" hex="#0EA5E9" />
            </Grid>
          </Grid>
        </Paper>

        {/* 4. Typography */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <TextFields sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Typography
            </Typography>
          </Box>

          <TypographySpec 
            role="Display Heading" 
            font="Montserrat" 
            weight="Bold" 
            size="48px" 
            sample="Healthcare Reimagined" 
          />
          <TypographySpec 
            role="Section Heading" 
            font="Montserrat" 
            weight="Semibold" 
            size="32px" 
            sample="Patient Analytics & Insights" 
          />
          <TypographySpec 
            role="Body Text (Primary)" 
            font="Lato" 
            weight="Regular" 
            size="16px" 
            sample="Our AI algorithms analyze thousands of data points to provide accurate predictions. The interface is designed for clarity and speed." 
          />
           <TypographySpec 
            role="Data / Monospace" 
            font="Roboto Mono" 
            weight="Medium" 
            size="14px" 
            sample="ID: #LAB-9281 | BATCH: A-22" 
          />
        </Paper>

        {/* 5. Iconography */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <LightMode sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Iconography
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" sx={{ color: '#64748B', mb: 3 }}>
                We use the <strong>Material Icons (Rounded/Outlined)</strong> set. Icons should be clear, minimal, and geometric. Avoid filled icons unless indicating an active state.
              </Typography>
              <Box sx={{ display: 'flex', gap: 4, color: '#1B365D' }}>
                 <Box sx={{ textAlign: 'center' }}><Check sx={{ fontSize: 32 }} /><Typography variant="caption" display="block">Action</Typography></Box>
                 <Box sx={{ textAlign: 'center' }}><SmartButton sx={{ fontSize: 32 }} /><Typography variant="caption" display="block">Interface</Typography></Box>
                 <Box sx={{ textAlign: 'center' }}><AccessibilityNew sx={{ fontSize: 32 }} /><Typography variant="caption" display="block">Medical</Typography></Box>
                 <Box sx={{ textAlign: 'center' }}><ContentCopy sx={{ fontSize: 32 }} /><Typography variant="caption" display="block">Utility</Typography></Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>Style Rules</Typography>
              <Box sx={{ bgcolor: '#F1F5F9', p: 3, borderRadius: 2 }}>
                 <List dense>
                   <ListItem><ListItemIcon><Check color="success" fontSize="small"/></ListItemIcon><ListItemText primary="2px Stroke Width" /></ListItem>
                   <ListItem><ListItemIcon><Check color="success" fontSize="small"/></ListItemIcon><ListItemText primary="Rounded Corners" /></ListItem>
                   <ListItem><ListItemIcon><Check color="success" fontSize="small"/></ListItemIcon><ListItemText primary="Primary or Text Color" /></ListItem>
                 </List>
              </Box>
            </Grid>
          </Grid>
        </Paper>

        {/* 6. Spacing & Grid */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <Box sx={{ width: 32, height: 32, border: '2px dashed #2E9CCA', borderRadius: 1 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Spacing & Layout
            </Typography>
          </Box>
          <Grid container spacing={6}>
             <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>8pt Grid System</Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 3 }}>
                   All spacing and sizing should align to an 8px grid. For tighter spacing, use 4px.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end' }}>
                   {[8, 16, 24, 32, 48].map(size => (
                     <Box key={size} sx={{ textAlign: 'center' }}>
                       <Box sx={{ width: size, height: size, bgcolor: '#E0F2FE', border: '1px solid #0EA5E9', mb: 1, mx: 'auto' }} />
                       <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>{size}px</Typography>
                     </Box>
                   ))}
                </Box>
             </Grid>
             <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>Layout Containers</Typography>
                 <Box sx={{ border: '1px dashed #94A3B8', p: 2, borderRadius: 2, position: 'relative' }}>
                    <Typography variant="caption" sx={{ position: 'absolute', top: -10, left: 10, bgcolor: '#F8FAFC', px: 1 }}>Container (1200px max)</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                       <Box sx={{ flex: 1, height: 60, bgcolor: '#CBD5E1', borderRadius: 1 }} />
                       <Box sx={{ flex: 2, height: 60, bgcolor: '#CBD5E1', borderRadius: 1 }} />
                       <Box sx={{ flex: 1, height: 60, bgcolor: '#CBD5E1', borderRadius: 1 }} />
                    </Box>
                 </Box>
             </Grid>
          </Grid>
        </Paper>

        {/* 7. UI Components */}
        <Paper sx={{ p: 5, borderRadius: 4, mb: 6 }}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <SmartButton sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              UI Components
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2" sx={{ mb: 2, color: '#64748B' }}>Buttons</Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Button variant="contained" sx={{ bgcolor: '#2E9CCA', boxShadow: 'none' }}>Primary Action</Button>
                <Button variant="outlined" sx={{ color: '#1B365D', borderColor: '#1B365D' }}>Secondary</Button>
                <Button variant="text" sx={{ color: '#64748B' }}>Tertiary</Button>
              </Box>
              
              <Typography variant="subtitle2" sx={{ mb: 2, color: '#64748B' }}>Form Inputs</Typography>
              <Box sx={{ p: 3, bgcolor: '#F8FAFC', borderRadius: 2 }}>
                 <Box sx={{ mb: 2, p: 1.5, border: '1px solid #E2E8F0', bgcolor: 'white', borderRadius: 1, color: '#94A3B8' }}>
                   Placeholder text...
                 </Box>
                 <Box sx={{ p: 1.5, border: '1px solid #2E9CCA', bgcolor: 'white', borderRadius: 1, color: '#1E293B' }}>
                   Focused Input
                 </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
               <Typography variant="subtitle2" sx={{ mb: 2, color: '#64748B' }}>Cards & Elevation</Typography>
               <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>Standard Card</Typography>
                  <Typography variant="body2" color="text.secondary">Clean white background with subtle border and soft shadow.</Typography>
               </Paper>
                <Paper sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #1B365D 0%, #0F172A 100%)', color: 'white' }}>
                  <Typography variant="h6" sx={{ fontSize: '1rem', fontWeight: 600, mb: 1 }}>Premium/Dark Card</Typography>
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>Used for high-priority features or dashboard widgets.</Typography>
               </Paper>
            </Grid>
          </Grid>
        </Paper>

        {/* 8. Accessibility */}
        <Paper sx={{ p: 5, borderRadius: 4 }}>
           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
            <AccessibilityNew sx={{ color: '#2E9CCA', fontSize: 32 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1B365D', fontFamily: 'Montserrat' }}>
              Accessibility & Voice
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Tone of Voice</Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Professional yet Accessible" 
                    secondary="Avoid overly complex jargon where simple terms work. Speak with authority but empathy." 
                  />
                </ListItem>
                 <ListItem>
                  <ListItemText 
                    primary="Concise & Direct" 
                    secondary="Medical professionals are busy. Get to the point quickly." 
                  />
                </ListItem>
              </List>
            </Grid>
             <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Accessibility (WCAG AA)</Typography>
              <List>
                <ListItem>
                  <ListItemIcon><Check color="success" /></ListItemIcon>
                  <ListItemText primary="High Contrast Text (4.5:1 ratio)" />
                </ListItem>
                 <ListItem>
                  <ListItemIcon><Check color="success" /></ListItemIcon>
                  <ListItemText primary="Clear visual hierarchy" />
                </ListItem>
                 <ListItem>
                  <ListItemIcon><Check color="success" /></ListItemIcon>
                  <ListItemText primary="Focus states for all interactive elements" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </Box>
  );
}
