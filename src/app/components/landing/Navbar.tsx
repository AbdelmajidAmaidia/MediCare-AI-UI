import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Logo } from '../Logo';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  darkMode?: boolean;
}

export default function Navbar({ onNavigate, darkMode = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Logo Identity Colors
  const COLORS = {
    primary: '#1B365D', // Deep Navy Blue
    secondary: '#2E9CCA', // Pulse Blue
    background: '#1B365D', // Navy Background for Navbar
    text: '#FFFFFF'
  };

  const navItems = ['Home', 'About', 'Services', 'Blog'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item: string) => {
    if (onNavigate) {
      onNavigate(item.toLowerCase());
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: COLORS.background, height: '100%', color: COLORS.text }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white', fontWeight: 700 }}>
        MediCare AI
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavClick(item)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleNavClick('login')}>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: COLORS.background,
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: { xs: 1, md: 0 } }}>
              <Logo size={40} showText={true} color="#FFFFFF" textColor="#FFFFFF" />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    fontWeight: 500,
                    fontFamily: 'Montserrat, sans-serif',
                    '&:hover': { color: COLORS.secondary, bgcolor: 'rgba(255,255,255,0.05)' }
                  }}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Desktop Login Button */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button 
                variant="contained" 
                onClick={() => handleNavClick('login')}
                sx={{ 
                  bgcolor: COLORS.secondary,
                  color: 'white',
                  fontWeight: 700,
                  borderRadius: 2, // 8px
                  boxShadow: 'none',
                  textTransform: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  '&:hover': { bgcolor: '#2488B0', boxShadow: 'none' }
                }}
              >
                Login
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' }, color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, bgcolor: darkMode ? '#0F172A' : 'white' },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
