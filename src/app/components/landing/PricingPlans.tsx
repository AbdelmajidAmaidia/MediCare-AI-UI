import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Paper,
  Stack,
} from '@mui/material';
import {
  Check as CheckIcon,
  Star as StarIcon,
  People as PeopleIcon,
} from '@mui/icons-material';

export default function PricingPlans() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      title: 'Starter',
      subtitle: 'Basic',
      price: 0,
      features: ['Doctor Search', 'Basic Medical Record', 'Pay-per-visit'],
      buttonText: 'Current Plan',
      buttonVariant: 'outlined' as const,
      highlight: false,
      color: 'grey',
    },
    {
      title: 'Health+',
      subtitle: 'Recommended',
      price: 9.99,
      features: ['0€ Service Fees', 'Free Priority Delivery', '24/7 AI Chat Support', 'Fast-track Appointments'],
      buttonText: 'Upgrade Now',
      buttonVariant: 'contained' as const,
      highlight: true,
      color: 'primary',
    },
    {
      title: 'Family Care',
      subtitle: 'Premium',
      price: 19.99,
      features: ['Up to 5 Family Members', 'Pediatric Priority', 'Family AI Prevention'],
      buttonText: 'Choose Family',
      buttonVariant: 'contained' as const,
      highlight: false,
      color: 'secondary', // Using secondary (often purple/pink in themes) or custom styling
    },
  ];

  return (
    <Box sx={{ py: 6, px: 2, maxWidth: 1200, mx: 'auto' }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Simple, Transparent Pricing
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Choose the plan that fits your health needs
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Typography variant="body1" color={!annual ? 'text.primary' : 'text.secondary'} fontWeight={!annual ? 600 : 400}>
            Monthly Billing
          </Typography>
          <Switch
            checked={annual}
            onChange={(e) => setAnnual(e.target.checked)}
            color="primary"
          />
          <Typography variant="body1" color={annual ? 'text.primary' : 'text.secondary'} fontWeight={annual ? 600 : 400}>
            Yearly Billing
          </Typography>
          <Chip label="-20%" color="success" size="small" sx={{ ml: 1, fontWeight: 700 }} />
        </Stack>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {plans.map((plan, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              elevation={plan.highlight ? 8 : 1}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                transform: plan.highlight ? 'scale(1.05)' : 'none',
                transition: 'transform 0.3s ease',
                border: plan.highlight ? '2px solid' : '1px solid',
                borderColor: plan.highlight ? 'primary.main' : 'divider',
                zIndex: plan.highlight ? 2 : 1,
              }}
            >
              {plan.highlight && (
                <Chip
                  label="Most Popular"
                  color="primary"
                  sx={{
                    position: 'absolute',
                    top: -16,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontWeight: 700,
                    px: 2,
                  }}
                />
              )}
              
              <CardContent sx={{ flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column' }}>
                <Typography variant="overline" color={plan.highlight ? 'primary' : 'text.secondary'} fontWeight={700} letterSpacing={1}>
                  {plan.subtitle.toUpperCase()}
                </Typography>
                <Typography variant="h4" component="div" fontWeight={700} gutterBottom sx={{ color: plan.title === 'Family Care' ? '#9c27b0' : 'inherit' }}>
                  {plan.title}
                </Typography>
                
                <Box sx={{ my: 2, display: 'flex', alignItems: 'baseline' }}>
                  <Typography variant="h3" fontWeight={800}>
                    €{annual ? (plan.price * 12 * 0.8 / 12).toFixed(2) : plan.price}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                    / month
                  </Typography>
                </Box>
                {annual && plan.price > 0 && (
                   <Typography variant="caption" color="success.main" sx={{ mb: 3, display: 'block' }}>
                     Billed €{(plan.price * 12 * 0.8).toFixed(2)} yearly
                   </Typography>
                )}

                <List sx={{ mb: 4, flexGrow: 1 }}>
                  {plan.features.map((feature, idx) => (
                    <ListItem key={idx} disableGutters sx={{ py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <CheckIcon color={plan.highlight ? 'primary' : 'success'} fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>

                <Button
                  fullWidth
                  variant={plan.buttonVariant}
                  size="large"
                  color={plan.title === 'Family Care' ? 'secondary' : 'primary'}
                  sx={{ 
                    py: 1.5, 
                    fontWeight: 700,
                    ...(plan.title === 'Family Care' && { bgcolor: '#9c27b0', '&:hover': { bgcolor: '#7b1fa2' } })
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
