import React from 'react';
import { Box, Typography, Container, Grid, Avatar } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

const COLORS = {
  primary: '#1B365D',
  secondary: '#2E9CCA',
  background: '#FFFFFF',
  text: '#334155',
  textSecondary: '#64748b',
  heading: '#1B365D',
};

export default function BlogPostDetail() {
  return (
    <Box sx={{ bgcolor: COLORS.background, color: COLORS.text, minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. Article Header (Light & Clean) */}
      <Box sx={{ 
        height: '50vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#F9FAFB',
        borderBottom: `1px solid #E5E7EB`
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Box sx={{ mb: 3, display: 'inline-block', px: 2, py: 0.5, bgcolor: '#EFF6FF', borderRadius: 1, color: COLORS.primary, fontWeight: 600, fontSize: '0.8rem', letterSpacing: 1 }}>
            MEDICAL TECHNOLOGY
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, color: COLORS.heading, mb: 3, letterSpacing: '-0.02em' }}>
            How AI is assisting doctors in early diagnosis.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
             <Avatar src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=256&h=256&q=80" sx={{ width: 40, height: 40 }} />
             <Box sx={{ textAlign: 'left' }}>
                <Typography variant="subtitle2" sx={{ color: COLORS.text, fontWeight: 600 }}>
                  Dr. Sarah Connor
                </Typography>
                <Typography variant="caption" sx={{ color: COLORS.textSecondary }}>
                  Feb 14, 2026 • 5 min read
                </Typography>
             </Box>
          </Box>
        </Container>
      </Box>

      {/* 2. Content Area */}
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 4, color: COLORS.text }}>
          The integration of artificial intelligence into modern medicine isn't just a trend—it's a revolution. From predictive diagnostics to personalized treatment plans, AI is reshaping how we approach healthcare.
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 6, color: COLORS.text }}>
          By analyzing millions of data points in seconds, neural networks can identify patterns that even the most experienced human specialists might miss. This isn't about replacing doctors; it's about augmenting their capabilities.
        </Typography>

        {/* Pull Quote */}
        <Box sx={{ borderLeft: `4px solid ${COLORS.primary}`, pl: 4, my: 6, bgcolor: '#F9FAFB', py: 4, pr: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, fontStyle: 'italic', color: COLORS.primary }}>
            "We are not just treating symptoms anymore. We are predicting them before they even appear."
          </Typography>
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 700, color: COLORS.heading, mb: 3 }}>
          The Role of Big Data
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 4, color: COLORS.text }}>
          With the advent of wearable technology and real-time telemetry, the amount of health data available is staggering. Processing this information manually is impossible. That's where our proprietary algorithms come in, turning raw noise into actionable medical insights.
        </Typography>
      </Container>

      {/* 3. Related Articles */}
      <Box sx={{ py: 10, bgcolor: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight={700} sx={{ color: COLORS.text, mb: 6 }}>
            Read Next
          </Typography>
          
          <Grid container spacing={4}>
            {[
              { title: 'The Ethics of AI in Surgery', date: 'Feb 10, 2026' },
              { title: 'Secure Patient Data', date: 'Feb 08, 2026' },
              { title: 'Telemedicine Trends', date: 'Feb 01, 2026' },
            ].map((article, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box sx={{ 
                  p: 4, 
                  height: '100%',
                  bgcolor: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': { 
                    border: `1px solid ${COLORS.primary}`,
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    transform: 'translateY(-2px)'
                  }
                }}>
                  <Typography variant="caption" sx={{ color: COLORS.primary, fontWeight: 700, letterSpacing: 1 }}>ARTICLE</Typography>
                  <Typography variant="h5" fontWeight={700} sx={{ color: COLORS.text, mt: 2, mb: 2 }}>{article.title}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" sx={{ color: COLORS.textSecondary }}>{article.date}</Typography>
                    <ArrowForward sx={{ color: COLORS.primary }} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
}
