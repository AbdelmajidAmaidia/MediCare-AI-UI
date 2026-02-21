import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Card,
  CardContent,
  Button,
  Divider,
  Chip,
  Stack,
  TextField,
  InputAdornment,
  Grid,
  IconButton,
  Avatar,
  Tooltip
} from '@mui/material';
import {
  Inbox as InboxIcon,
  Autorenew as InProgressIcon,
  History as HistoryIcon,
  AttachMoney as BillingIcon,
  QrCode as QrCodeIcon,
  Science as ScienceIcon,
  CheckCircle as CheckCircleIcon,
  CloudUpload as UploadIcon,
  Lock as LockIcon,
  Description as FileIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  MoreVert as MoreVertIcon
} from '@mui/icons-material';

// --- Types ---
interface LabTask {
  id: string;
  patientName: string;
  doctorName: string;
  tests: string[];
  status: 'pending' | 'processing' | 'completed';
  timestamp: string;
}

// --- Mock Data ---
const initialTasks: LabTask[] = [
  { id: '1', patientName: 'Sophie Martin', doctorName: 'Dr. Smith', tests: ['Complete Blood Count (CBC)', 'Glucose'], status: 'pending', timestamp: '10:30 AM' },
  { id: '2', patientName: 'Jean Dupont', doctorName: 'Dr. House', tests: ['Lipid Panel'], status: 'pending', timestamp: '11:15 AM' },
  { id: '3', patientName: 'Alice Wonderland', doctorName: 'Dr. Strange', tests: ['Thyroid Panel', 'Vitamin D'], status: 'processing', timestamp: '09:00 AM' },
];

// --- Theme Color ---
const TEAL_MAIN = '#14B8A6';
const TEAL_LIGHT = '#F0FDFA'; // tailwind teal-50

export default function LabTechnicianPortal() {
  const [selectedTask, setSelectedTask] = useState<LabTask | null>(initialTasks[0]);
  const [tasks, setTasks] = useState<LabTask[]>(initialTasks);
  const [price, setPrice] = useState<string>('45.00');

  const handleConfirmCollection = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'processing' } : t));
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: '#f8fafc', overflow: 'hidden' }}>
      
      {/* 1. Left Sidebar (Navigation) */}
      <Paper 
        elevation={0} 
        sx={{ 
          width: 260, 
          flexShrink: 0, 
          borderRight: '1px solid #e2e8f0', 
          bgcolor: '#fff',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0' }}>
          <Typography variant="h6" fontWeight={700} sx={{ color: '#0F172A', display: 'flex', alignItems: 'center', gap: 1 }}>
            <ScienceIcon sx={{ color: TEAL_MAIN }} /> LabPortal
          </Typography>
          <Typography variant="caption" color="text.secondary">Technician Dashboard</Typography>
        </Box>
        
        <List sx={{ px: 2, pt: 2 }}>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton selected sx={{ borderRadius: 2, bgcolor: TEAL_LIGHT, color: TEAL_MAIN, '&.Mui-selected': { bgcolor: TEAL_LIGHT } }}>
              <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}><InboxIcon /></ListItemIcon>
              <ListItemText primary="Incoming Requests" primaryTypographyProps={{ fontWeight: 600 }} />
              <Badge badgeContent={3} color="primary" sx={{ '& .MuiBadge-badge': { bgcolor: TEAL_MAIN } }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: 'text.secondary', minWidth: 40 }}><InProgressIcon /></ListItemIcon>
              <ListItemText primary="In Progress" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: 'text.secondary', minWidth: 40 }}><HistoryIcon /></ListItemIcon>
              <ListItemText primary="Completed History" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ mb: 1 }}>
            <ListItemButton sx={{ borderRadius: 2 }}>
              <ListItemIcon sx={{ color: 'text.secondary', minWidth: 40 }}><BillingIcon /></ListItemIcon>
              <ListItemText primary="Billing" />
            </ListItemButton>
          </ListItem>
        </List>
      </Paper>

      {/* 2. Center Panel (Task List) */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', borderRight: '1px solid #e2e8f0', bgcolor: '#F1F5F9' }}>
        <Box sx={{ p: 3, bgcolor: '#fff', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h6" fontWeight={700} color="#0F172A">Pending Lab Orders</Typography>
            <Typography variant="body2" color="text.secondary">Today's queue • {tasks.filter(t => t.status === 'pending').length} remaining</Typography>
          </Box>
          <IconButton><SearchIcon color="action" /></IconButton>
        </Box>

        <Box sx={{ p: 3, overflowY: 'auto', flex: 1 }}>
          <Stack spacing={2}>
            {tasks.map((task) => (
              <Card 
                key={task.id}
                elevation={selectedTask?.id === task.id ? 4 : 0}
                onClick={() => setSelectedTask(task)}
                sx={{ 
                  cursor: 'pointer',
                  border: selectedTask?.id === task.id ? `2px solid ${TEAL_MAIN}` : '1px solid #e2e8f0',
                  transition: 'all 0.2s',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: 2 }
                }}
              >
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Avatar sx={{ bgcolor: TEAL_LIGHT, color: TEAL_MAIN, width: 32, height: 32 }}>
                        {task.patientName.charAt(0)}
                      </Avatar>
                      <Typography variant="subtitle2" fontWeight={700}>{task.patientName}</Typography>
                      <Tooltip title="Scan Patient QR">
                        <QrCodeIcon fontSize="small" color="action" sx={{ cursor: 'pointer' }} />
                      </Tooltip>
                    </Stack>
                    {task.status === 'pending' ? (
                      <Chip label="Ready for Sample" size="small" sx={{ bgcolor: '#FEF9C3', color: '#B45309', fontWeight: 600, height: 24 }} />
                    ) : (
                      <Chip label="Processing" size="small" sx={{ bgcolor: '#E0F2FE', color: '#0369A1', fontWeight: 600, height: 24 }} />
                    )}
                  </Box>
                  
                  <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 1 }}>
                    Prescribed by <strong>{task.doctorName}</strong>
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    {task.tests.map(test => (
                      <Chip key={test} label={test} size="small" variant="outlined" sx={{ mr: 0.5, mb: 0.5, fontSize: '0.75rem' }} />
                    ))}
                  </Box>

                  {task.status === 'pending' && (
                    <Button 
                      fullWidth 
                      variant="contained" 
                      onClick={(e) => { e.stopPropagation(); handleConfirmCollection(task.id); }}
                      sx={{ 
                        bgcolor: TEAL_MAIN, 
                        '&:hover': { bgcolor: '#0D9488' },
                        textTransform: 'none',
                        boxShadow: 'none'
                      }}
                    >
                      Confirm Sample Collection
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* 3. Right Panel (Action Area) */}
      <Box sx={{ width: 380, bgcolor: '#fff', display: 'flex', flexDirection: 'column' }}>
        {selectedTask ? (
          <>
            <Box sx={{ p: 3, borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle1" fontWeight={700}>Upload Results</Typography>
              <IconButton size="small"><MoreVertIcon /></IconButton>
            </Box>

            <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Avatar sx={{ width: 48, height: 48, bgcolor: TEAL_LIGHT, color: TEAL_MAIN }}>
                  {selectedTask.patientName.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>{selectedTask.patientName}</Typography>
                  <Typography variant="caption" color="text.secondary">ID: #LAB-{selectedTask.id}882</Typography>
                </Box>
              </Box>

              <Box 
                sx={{ 
                  border: '2px dashed #CBD5E1', 
                  borderRadius: 3, 
                  bgcolor: '#F8FAFC',
                  height: 200,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 4,
                  cursor: 'pointer',
                  '&:hover': { borderColor: TEAL_MAIN, bgcolor: TEAL_LIGHT }
                }}
              >
                <UploadIcon sx={{ fontSize: 48, color: '#94A3B8', mb: 2 }} />
                <Typography variant="body2" color="text.primary" fontWeight={600}>Drag & Drop PDF Analysis</Typography>
                <Typography variant="caption" color="text.secondary">or click to browse files</Typography>
              </Box>

              <Divider sx={{ mb: 4 }} />

              <Typography variant="subtitle2" fontWeight={600} gutterBottom>Billing Configuration</Typography>
              <Typography variant="caption" color="text.secondary" paragraph>
                Set the final cost for the patient to unlock these results.
              </Typography>

              <TextField
                fullWidth
                label="Total Cost"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
                sx={{ mb: 4 }}
              />

              <Box sx={{ mt: 'auto' }}>
                <Button 
                  fullWidth 
                  size="large"
                  variant="contained" 
                  startIcon={<LockIcon />}
                  sx={{ 
                    bgcolor: '#0F172A', 
                    color: '#fff',
                    py: 1.5,
                    '&:hover': { bgcolor: '#1E293B' }
                  }}
                >
                  Publish & Lock Results
                </Button>
                <Typography variant="caption" color="text.secondary" align="center" display="block" sx={{ mt: 1 }}>
                  Patient will be notified immediately via App & SMS.
                </Typography>
              </Box>
            </Box>
          </>
        ) : (
          <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.secondary' }}>
            Select a task to view details
          </Box>
        )}
      </Box>

    </Box>
  );
}
