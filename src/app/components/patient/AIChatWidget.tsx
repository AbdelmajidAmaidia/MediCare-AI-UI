import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  IconButton,
  Box,
  Avatar,
  Chip,
} from '@mui/material';
import { Send as SendIcon, SmartToy as AiIcon } from '@mui/icons-material';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm MediCare AI Assistant. How can I help you today? I can assist with symptom checking, medication information, or answering health questions.",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I understand your concern. Based on what you've described, I recommend scheduling a consultation with a healthcare provider for a proper evaluation. Would you like me to help you book an appointment?",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const quickActions = ['Check symptoms', 'Medication info', 'Book appointment'];

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
          <AiIcon sx={{ color: 'primary.main' }} />
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            MediCare AI Assistant
          </Typography>
        </Box>

        {/* Messages */}
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            maxHeight: 300,
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.id}
              sx={{
                display: 'flex',
                justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                gap: 1,
              }}
            >
              {message.sender === 'ai' && (
                <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                  <AiIcon sx={{ fontSize: 18 }} />
                </Avatar>
              )}
              <Box
                sx={{
                  maxWidth: '75%',
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: message.sender === 'user' ? 'primary.main' : 'background.default',
                  color: message.sender === 'user' ? 'white' : 'text.primary',
                }}
              >
                <Typography variant="body2">{message.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Quick Actions */}
        <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          {quickActions.map((action) => (
            <Chip
              key={action}
              label={action}
              size="small"
              onClick={() => setInputValue(action)}
              sx={{ cursor: 'pointer' }}
            />
          ))}
        </Box>

        {/* Input */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
            }}
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
