import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  MoreVert as MoreVertIcon,
  Visibility as VisibilityIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  condition: string;
  lastVisit: string;
  status: 'Stable' | 'Critical' | 'Recovering' | 'New';
  room?: string;
}

const mockPatients: Patient[] = [
  {
    id: 'P001',
    name: 'Emily Rodriguez',
    age: 34,
    gender: 'Female',
    condition: 'Hypertension',
    lastVisit: '2026-02-05',
    status: 'Stable',
  },
  {
    id: 'P002',
    name: 'John Smith',
    age: 45,
    gender: 'Male',
    condition: 'Type 2 Diabetes',
    lastVisit: '2026-02-01',
    status: 'Stable',
  },
  {
    id: 'P003',
    name: 'Michael Chen',
    age: 28,
    gender: 'Male',
    condition: 'Acute Bronchitis',
    lastVisit: '2026-02-06',
    status: 'Recovering',
  },
  {
    id: 'P004',
    name: 'Sarah Johnson',
    age: 52,
    gender: 'Female',
    condition: 'Post-op Recovery',
    lastVisit: '2026-02-07',
    status: 'Critical',
    room: '302',
  },
  {
    id: 'P005',
    name: 'David Williams',
    age: 61,
    gender: 'Male',
    condition: 'Arthritis',
    lastVisit: '2026-01-28',
    status: 'Stable',
  },
  {
    id: 'P006',
    name: 'Jessica Lee',
    age: 29,
    gender: 'Female',
    condition: 'Pregnancy - 3rd Trimester',
    lastVisit: '2026-02-03',
    status: 'New',
  },
];

export default function PatientList() {
  const [searchTerm, setSearchTerm] = useState('');

  const getStatusColor = (status: Patient['status']) => {
    switch (status) {
      case 'Stable':
        return 'success';
      case 'Critical':
        return 'error';
      case 'Recovering':
        return 'info';
      case 'New':
        return 'primary';
      default:
        return 'default';
    }
  };

  const filteredPatients = mockPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 600 }}>
          My Patients
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {mockPatients.length} active patients
        </Typography>
      </Box>

      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search patients by name or condition..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton sx={{ border: '1px solid #e0e0e0', borderRadius: 1 }}>
              <FilterIcon />
            </IconButton>
          </Box>

          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Patient</TableCell>
                  <TableCell>Age/Gender</TableCell>
                  <TableCell>Condition</TableCell>
                  <TableCell>Last Visit</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.main' }}>
                          {patient.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                            {patient.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            ID: {patient.id}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      {patient.age} / {patient.gender}
                    </TableCell>
                    <TableCell>{patient.condition}</TableCell>
                    <TableCell>{patient.lastVisit}</TableCell>
                    <TableCell>
                      <Chip
                        label={patient.status}
                        color={getStatusColor(patient.status)}
                        size="small"
                        variant={patient.status === 'Stable' ? 'outlined' : 'filled'}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                        <Tooltip title="View Profile">
                          <IconButton size="small">
                            <VisibilityIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton size="small">
                            <EditIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <IconButton size="small">
                          <MoreVertIcon fontSize="small" />
                        </IconButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
