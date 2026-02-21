import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  MenuItem,
  Menu,
  Checkbox,
  Button,
  Stack,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  MoreVert as MoreVertIcon,
  Edit as EditIcon,
  Block as BlockIcon,
  Login as LoginIcon,
  FilterList as FilterIcon,
  Email as EmailIcon,
  FileDownload as DownloadIcon,
  FiberManualRecord as DotIcon,
} from '@mui/icons-material';

const users = [
  { id: 1, name: 'Sarah Martinez', email: 'sarah.m@example.com', role: 'Patient', status: 'Active', joined: 'Feb 14, 2026', lastActive: '2 mins ago', avatar: 'S' },
  { id: 2, name: 'Dr. John Smith', email: 'dr.john@medicare.ai', role: 'Doctor', status: 'Active', joined: 'Dec 05, 2025', lastActive: '1 hour ago', avatar: 'J' },
  { id: 3, name: 'Mike Wilson', email: 'mike.w@example.com', role: 'Patient', status: 'Suspended', joined: 'Feb 01, 2026', lastActive: '3 days ago', avatar: 'M' },
  { id: 4, name: 'Dr. Emily Chen', email: 'dr.chen@medicare.ai', role: 'Doctor', status: 'Pending', joined: 'Feb 07, 2026', lastActive: 'Never', avatar: 'E' },
  { id: 5, name: 'Lab Tech A', email: 'lab.tech@medicare.ai', role: 'Staff', status: 'Active', joined: 'Nov 20, 2025', lastActive: '5 mins ago', avatar: 'L' },
];

export default function UserManagementTable() {
  const [selected, setSelected] = useState<number[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeRowId, setActiveRowId] = useState<number | null>(null);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(users.map((n) => n.id));
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, id: number) => {
    setAnchorEl(event.currentTarget);
    setActiveRowId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveRowId(null);
  };

  return (
    <Box sx={{ p: 3, bgcolor: '#f4f6f8', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight={700} sx={{ mb: 4, color: '#1a237e' }}>
        User Management
      </Typography>

      <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: 2, overflow: 'hidden' }}>
        {/* 1. Filter Bar */}
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e0e0e0', bgcolor: selected.length > 0 ? 'primary.light' : 'white' }}>
          {selected.length > 0 ? (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
              <Typography color="white" fontWeight={600}>{selected.length} selected</Typography>
              <Stack direction="row" spacing={1}>
                 <Button startIcon={<EmailIcon />} variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}>
                   Send Email
                 </Button>
                 <Button startIcon={<DownloadIcon />} variant="contained" sx={{ bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'grey.100' } }}>
                   Export CSV
                 </Button>
              </Stack>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', width: '100%', gap: 2 }}>
              <TextField select size="small" defaultValue="all" label="Role" sx={{ width: 150 }}>
                <MenuItem value="all">All Roles</MenuItem>
                <MenuItem value="doctor">Doctors</MenuItem>
                <MenuItem value="patient">Patients</MenuItem>
              </TextField>
              <TextField select size="small" defaultValue="all" label="Status" sx={{ width: 150 }}>
                <MenuItem value="all">All Status</MenuItem>
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="suspended">Suspended</MenuItem>
                <MenuItem value="pending">Pending</MenuItem>
              </TextField>
              <TextField 
                size="small" 
                placeholder="Search by email or ID..." 
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon color="action" /></InputAdornment>
                }}
                sx={{ width: 300, ml: 'auto' }}
              />
            </Box>
          )}
        </Box>

        {/* 2. The Data Table */}
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: 'grey.50' }}>
                <TableCell padding="checkbox">
                  <Checkbox 
                    indeterminate={selected.length > 0 && selected.length < users.length}
                    checked={users.length > 0 && selected.length === users.length}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>User Info</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Joined Date</TableCell>
                <TableCell>Last Active</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((row) => {
                const isSelected = selected.indexOf(row.id) !== -1;
                return (
                  <TableRow 
                    key={row.id} 
                    hover 
                    role="checkbox"
                    aria-checked={isSelected}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox 
                        checked={isSelected}
                        onClick={(event) => handleClick(row.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.light', color: 'primary.dark', fontWeight: 600 }}>{row.avatar}</Avatar>
                        <Box>
                          <Typography variant="body2" fontWeight={600}>{row.name}</Typography>
                          <Typography variant="caption" color="text.secondary">{row.email}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip 
                        label={row.role} 
                        size="small" 
                        color={row.role === 'Doctor' ? 'primary' : 'default'}
                        variant={row.role === 'Doctor' ? 'filled' : 'outlined'}
                        sx={{ fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>{row.joined}</TableCell>
                    <TableCell>{row.lastActive}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                         {row.status === 'Active' && <DotIcon color="success" sx={{ fontSize: 12 }} />}
                         {row.status === 'Suspended' && <DotIcon color="error" sx={{ fontSize: 12 }} />}
                         {row.status === 'Pending' && <DotIcon color="warning" sx={{ fontSize: 12 }} />}
                         <Typography variant="body2">{row.status}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" onClick={(e) => handleMenuOpen(e, row.id)}>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* 3. The Actions Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{ sx: { minWidth: 200, boxShadow: 3 } }}
      >
        <MenuItem onClick={handleMenuClose}>
          <EditIcon fontSize="small" sx={{ mr: 1.5, color: 'text.secondary' }} /> Edit Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <LoginIcon fontSize="small" sx={{ mr: 1.5, color: 'text.secondary' }} /> Login as User
        </MenuItem>
        <MenuItem onClick={handleMenuClose} sx={{ color: 'error.main' }}>
          <BlockIcon fontSize="small" sx={{ mr: 1.5 }} /> Ban User
        </MenuItem>
      </Menu>
    </Box>
  );
}
