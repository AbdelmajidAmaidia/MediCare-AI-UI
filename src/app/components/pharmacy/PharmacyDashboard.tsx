import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Avatar,
  Paper,
} from '@mui/material';
import {
  LocalPharmacy as PharmacyIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Close as CloseIcon,
  Inventory as InventoryIcon,
  LocalShipping as DeliveryIcon,
  ShoppingBag as PickupIcon,
  MoreVert as MoreVertIcon,
} from '@mui/icons-material';

interface Medication {
  name: string;
  dosage: string;
  quantity: number;
  inStock: boolean;
}

interface PharmacyOrder {
  id: string;
  patientName: string;
  items: Medication[];
  isUrgent: boolean;
  status: 'New Orders' | 'Preparing' | 'Ready' | 'Completed';
  type: 'Pickup' | 'Delivery';
}

const mockOrders: PharmacyOrder[] = [
  {
    id: 'RX-1001',
    patientName: 'John Smith',
    items: [
      { name: 'Lisinopril', dosage: '10mg', quantity: 30, inStock: true },
      { name: 'Atorvastatin', dosage: '20mg', quantity: 30, inStock: true },
    ],
    isUrgent: true,
    status: 'New Orders',
    type: 'Pickup',
  },
  {
    id: 'RX-1002',
    patientName: 'Emily Rodriguez',
    items: [
      { name: 'Amoxicillin', dosage: '500mg', quantity: 21, inStock: true },
    ],
    isUrgent: false,
    status: 'Preparing',
    type: 'Pickup',
  },
  {
    id: 'RX-1003',
    patientName: 'Michael Chen',
    items: [
      { name: 'Metformin', dosage: '500mg', quantity: 60, inStock: true },
      { name: 'Glipizide', dosage: '5mg', quantity: 60, inStock: true },
    ],
    isUrgent: false,
    status: 'New Orders',
    type: 'Delivery',
  },
  {
    id: 'RX-1004',
    patientName: 'Sarah Johnson',
    items: [
      { name: 'Levothyroxine', dosage: '50mcg', quantity: 90, inStock: true },
    ],
    isUrgent: true,
    status: 'Ready',
    type: 'Pickup',
  },
  {
    id: 'RX-1005',
    patientName: 'David Williams',
    items: [
      { name: 'Omeprazole', dosage: '20mg', quantity: 30, inStock: true },
    ],
    isUrgent: false,
    status: 'Completed',
    type: 'Pickup',
  },
];

const KanbanColumn = ({ 
  title, 
  count, 
  children, 
  color 
}: { 
  title: string; 
  count: number; 
  children: React.ReactNode; 
  color: string;
}) => (
  <Paper 
    sx={{ 
      height: '100%', 
      bgcolor: 'background.default', 
      borderTop: `4px solid ${color}`,
      display: 'flex',
      flexDirection: 'column'
    }}
  >
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
      <Typography variant="subtitle1" fontWeight={600}>
        {title}
      </Typography>
      <Chip label={count} size="small" sx={{ bgcolor: `${color}20`, color: color, fontWeight: 600 }} />
    </Box>
    <Box sx={{ p: 2, flexGrow: 1, overflowY: 'auto', minHeight: 400 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {children}
      </Box>
    </Box>
  </Paper>
);

export default function PharmacyDashboard() {
  const [orders, setOrders] = useState<PharmacyOrder[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<PharmacyOrder | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);

  const handleOpenDetail = (order: PharmacyOrder) => {
    setSelectedOrder(order);
    setDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setDetailOpen(false);
    setSelectedOrder(null);
  };

  const handleMoveStatus = (order: PharmacyOrder, newStatus: PharmacyOrder['status']) => {
    const updatedOrders = orders.map(o => 
      o.id === order.id ? { ...o, status: newStatus } : o
    );
    setOrders(updatedOrders);
    handleCloseDetail();
  };

  const getNextStatus = (currentStatus: PharmacyOrder['status']): PharmacyOrder['status'] | null => {
    switch (currentStatus) {
      case 'New Orders': return 'Preparing';
      case 'Preparing': return 'Ready';
      case 'Ready': return 'Completed';
      default: return null;
    }
  };

  const renderOrderCard = (order: PharmacyOrder) => (
    <Card 
      key={order.id} 
      onClick={() => handleOpenDetail(order)}
      sx={{ 
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 3
        },
        borderLeft: order.isUrgent ? '4px solid #d32f2f' : '4px solid transparent'
      }}
    >
      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle2" fontWeight={600}>
            {order.patientName}
          </Typography>
          {order.isUrgent && (
            <Chip label="URGENT" size="small" color="error" sx={{ height: 20, fontSize: '0.65rem' }} />
          )}
        </Box>
        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
          ID: {order.id}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip 
            icon={<PharmacyIcon sx={{ fontSize: '1rem !important' }} />} 
            label={`${order.items.length} Items`} 
            size="small" 
            variant="outlined"
          />
          {order.type === 'Delivery' ? (
            <DeliveryIcon color="action" fontSize="small" />
          ) : (
            <PickupIcon color="action" fontSize="small" />
          )}
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ height: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          Pharmacy Orders
        </Typography>
        <Button variant="contained" startIcon={<InventoryIcon />}>
          Inventory Check
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ flexGrow: 1, overflow: 'hidden' }}>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ height: '100%' }}>
          <KanbanColumn 
            title="New Orders" 
            count={orders.filter(o => o.status === 'New Orders').length}
            color="#2196F3"
          >
            {orders.filter(o => o.status === 'New Orders').map(renderOrderCard)}
          </KanbanColumn>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ height: '100%' }}>
          <KanbanColumn 
            title="Preparing" 
            count={orders.filter(o => o.status === 'Preparing').length}
            color="#FF9800"
          >
            {orders.filter(o => o.status === 'Preparing').map(renderOrderCard)}
          </KanbanColumn>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ height: '100%' }}>
          <KanbanColumn 
            title="Ready for Pickup" 
            count={orders.filter(o => o.status === 'Ready').length}
            color="#4CAF50"
          >
            {orders.filter(o => o.status === 'Ready').map(renderOrderCard)}
          </KanbanColumn>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 3 }} sx={{ height: '100%' }}>
          <KanbanColumn 
            title="Completed" 
            count={orders.filter(o => o.status === 'Completed').length}
            color="#9E9E9E"
          >
            {orders.filter(o => o.status === 'Completed').map(renderOrderCard)}
          </KanbanColumn>
        </Grid>
      </Grid>

      {/* Order Detail Modal */}
      <Dialog open={detailOpen} onClose={handleCloseDetail} maxWidth="sm" fullWidth>
        {selectedOrder && (
          <>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Order Details: {selectedOrder.id}
              <IconButton onClick={handleCloseDetail} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  {selectedOrder.patientName.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {selectedOrder.patientName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {selectedOrder.type} • Priority: {selectedOrder.isUrgent ? 'High' : 'Normal'}
                  </Typography>
                </Box>
              </Box>

              <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
                Prescription Items
              </Typography>
              <List sx={{ bgcolor: 'background.default', borderRadius: 1 }}>
                {selectedOrder.items.map((item, index) => (
                  <React.Fragment key={index}>
                    {index > 0 && <Divider component="li" />}
                    <ListItem>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" fontWeight={500}>{item.name}</Typography>
                            <Typography variant="body2" fontWeight={600}>x{item.quantity}</Typography>
                          </Box>
                        }
                        secondary={`${item.dosage} • Stock Status: Available`}
                      />
                      <ListItemIcon sx={{ minWidth: 'auto', ml: 2 }}>
                        {item.inStock ? (
                          <CheckCircleIcon color="success" />
                        ) : (
                          <WarningIcon color="error" />
                        )}
                      </ListItemIcon>
                    </ListItem>
                  </React.Fragment>
                ))}
              </List>
            </DialogContent>
            <DialogActions sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button onClick={handleCloseDetail} color="inherit">
                Close
              </Button>
              {selectedOrder.status !== 'Completed' && (
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={() => {
                    const next = getNextStatus(selectedOrder.status);
                    if (next) handleMoveStatus(selectedOrder, next);
                  }}
                  disabled={!getNextStatus(selectedOrder.status)}
                >
                  {selectedOrder.status === 'New Orders' && 'Start Preparing'}
                  {selectedOrder.status === 'Preparing' && 'Mark as Ready'}
                  {selectedOrder.status === 'Ready' && 'Complete Order'}
                </Button>
              )}
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
