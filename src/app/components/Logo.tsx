import React from 'react';
import { Box, Typography } from '@mui/material';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number; // Size in px for the icon height
  color?: string; // Main color override (optional)
  textColor?: string;
}

export const Logo = ({ 
  showText = true, 
  size = 40, 
  color = '#1B365D', 
  textColor 
}: LogoProps) => {
  const primaryColor = color;
  const accentColor = '#2E9CCA'; // Vivid Pulse Blue
  const textMain = textColor || primaryColor;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, userSelect: 'none' }}>
      {/* Vector Icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ minWidth: size }}
      >
        {/* Soft Glow Filter */}
        <defs>
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="ecg-gradient" x1="10" y1="24" x2="38" y2="24" gradientUnits="userSpaceOnUse">
             <stop offset="0%" stopColor={accentColor} stopOpacity="0.6" />
             <stop offset="50%" stopColor={accentColor} />
             <stop offset="100%" stopColor={accentColor} stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Monitor Shape */}
        <rect 
          x="4" 
          y="6" 
          width="40" 
          height="30" 
          rx="6" 
          stroke={primaryColor} 
          strokeWidth="3" 
          fill="none" 
        />
        
        {/* Monitor Stand */}
        <path 
          d="M18 42H30M24 36V42" 
          stroke={primaryColor} 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />

        {/* Heartbeat ECG Line */}
        <path 
          d="M10 21H16L19 12L25 30L29 18L32 21H38" 
          stroke="url(#ecg-gradient)" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>

      {/* Typography */}
      {showText && (
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Montserrat", "Inter", sans-serif',
            fontWeight: 700,
            fontSize: `${size * 0.55}px`, // Responsive font size based on icon
            lineHeight: 1,
            color: textMain,
            letterSpacing: '-0.03em',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          MediCare
          <Box component="span" sx={{ color: accentColor }}>AI</Box>
        </Typography>
      )}
    </Box>
  );
};
