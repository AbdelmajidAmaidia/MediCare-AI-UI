import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Button,
  Avatar,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
} from '@mui/material';
import {
  LocalShipping as DeliveryIcon,
  Person as PersonIcon,
  CheckCircle as CheckIcon,
  Map as MapIcon,
  AssignmentInd as AssignIcon,
  MoreVert as MoreVertIcon,
  Phone as PhoneIcon,
  DirectionsBike as BikeIcon,
} from '@mui/icons-material';

interface DeliveryOrder {
  id: string;
  patientName: string;
  address: string;
  distance: string;
  driver: string | null;
  status: 'Pending' | 'In Transit' | 'Delivered';
}

interface Driver {
  id: string;
  name: string;
  status: 'Available' | 'Busy' | 'Offline';
  currentLocation: string;
}

const mockDeliveries: DeliveryOrder[] = [
  { id: 'DEL-101', patientName: 'John Smith', address: '123 Maple Ave, Downtown', distance: '2.5 km', driver: null, status: 'Pending' },
  { id: 'DEL-102', patientName: 'Emily Davis', address: '456 Oak Ln, Westside', distance: '5.1 km', driver: 'Mike Ross', status: 'In Transit' },
  { id: 'DEL-103', patientName: 'Sarah Wilson', address: '789 Pine St, North Hill', distance: '1.2 km', driver: null, status: 'Pending' },
  { id: 'DEL-104', patientName: 'Robert Brown', address: '321 Cedar Rd, East End', distance: '8.4 km', driver: 'Jessica Lee', status: 'Delivered' },
];

const mockDrivers: Driver[] = [
  { id: 'D1', name: 'Mike Ross', status: 'Busy', currentLocation: 'Westside' },
  { id: 'D2', name: 'Jessica Lee', status: 'Available', currentLocation: 'Central Hub' },
  { id: 'D3', name: 'Tom Hardy', status: 'Available', currentLocation: 'North Hill' },
];

export default function DeliveryManagement() {
  const [deliveries, setDeliveries] = useState<DeliveryOrder[]>(mockDeliveries);
  const [selectedOrder, setSelectedOrder] = useState<DeliveryOrder | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAssignClick = (order: DeliveryOrder) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleDriverSelect = (driver: Driver) => {
    if (selectedOrder) {
      setDeliveries(deliveries.map(d => 
        d.id === selectedOrder.id ? { ...d, driver: driver.name, status: 'In Transit' } : d
      ));
      setModalOpen(false);
      setSelectedOrder(null);
    }
  };

  const stats = [
    { label: 'Pending Deliveries', value: deliveries.filter(d => d.status === 'Pending').length, icon: <DeliveryIcon />, color: '#FF9800' },
    { label: 'Active Drivers', value: 2, icon: <BikeIcon />, color: '#2196F3' },
    { label: 'Completed Today', value: 14, icon: <CheckIcon />, color: '#4CAF50' },
  ];

  return (
    <Box sx={{ p: 3, height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" fontWeight={600}>
          Delivery Logistics
        </Typography>
        <Button variant="contained" startIcon={<MapIcon />}>
          Live Map View
        </Button>
      </Box>

      {/* Top Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat) => (
          <Grid size={{ xs: 12, md: 4 }} key={stat.label}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
                <Box 
                  sx={{ 
                    p: 2, 
                    borderRadius: 2, 
                    bgcolor: `${stat.color}20`, 
                    color: stat.color,
                    mr: 2
                  }}
                >
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={700}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        {/* Delivery List */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Delivery Queue
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order ID</TableCell>
                      <TableCell>Destination</TableCell>
                      <TableCell>Distance</TableCell>
                      <TableCell>Assigned Driver</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell align="right">Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {deliveries.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell fontWeight={600}>{row.id}</TableCell>
                        <TableCell>
                          <Box>
                            <Typography variant="body2" fontWeight={500}>{row.patientName}</Typography>
                            <Typography variant="caption" color="text.secondary">{row.address}</Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{row.distance}</TableCell>
                        <TableCell>
                          {row.driver ? (
                            <Chip 
                              avatar={<Avatar sx={{ width: 24, height: 24 }}>{row.driver.charAt(0)}</Avatar>} 
                              label={row.driver} 
                              size="small" 
                              variant="outlined" 
                            />
                          ) : (
                            <Typography variant="caption" color="text.secondary" fontStyle="italic">
                              Unassigned
                            </Typography>
                          )}
                        </TableCell>
                        <TableCell>
                          <Chip 
                            label={row.status} 
                            color={row.status === 'Pending' ? 'warning' : row.status === 'Delivered' ? 'success' : 'info'} 
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="right">
                          <IconButton size="small" onClick={() => handleAssignClick(row)} disabled={row.status === 'Delivered'}>
                            <AssignIcon fontSize="small" />
                          </IconButton>
                          <IconButton size="small">
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        {/* Map Placeholder */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                Live Tracking
              </Typography>
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  bgcolor: '#f5f5f5', 
                  borderRadius: 2, 
                  minHeight: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #eee',
                  backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}
              >
                <Box sx={{ textAlign: 'center', color: 'text.secondary' }}>
                  <MapIcon sx={{ fontSize: 48, mb: 1, opacity: 0.5 }} />
                  <Typography>Map View Placeholder</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Driver Assignment Modal */}
      <Dialog open={modalOpen} onClose={() => setModalOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Assign Driver</DialogTitle>
        <DialogContent dividers>
          <List>
            {mockDrivers.map((driver) => (
              <ListItem 
                key={driver.id} 
                button 
                onClick={() => handleDriverSelect(driver)}
                disabled={driver.status === 'Busy'}
              >
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    color={driver.status === 'Available' ? 'success' : 'error'}
                  >
                    <Avatar>{driver.name.charAt(0)}</Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText 
                  primary={driver.name} 
                  secondary={`Status: ${driver.status} • Near ${driver.currentLocation}`} 
                />
                <IconButton edge="end">
                  <PhoneIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
