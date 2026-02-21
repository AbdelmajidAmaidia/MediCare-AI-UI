import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import TrustCommunitySection from './TrustCommunitySection';
import Footer from './Footer';

interface LandingPageProps {
  onNavigate?: (page: string) => void;
  onBookAppointment?: () => void;
}

export default function LandingPage({ onNavigate, onBookAppointment }: LandingPageProps) {
  return (
    <Box>
      <Navbar onNavigate={onNavigate} />
      <HeroSection onBookAppointment={onBookAppointment} />
      <FeaturesSection />
      <TrustCommunitySection />
      <Footer />
    </Box>
  );
}