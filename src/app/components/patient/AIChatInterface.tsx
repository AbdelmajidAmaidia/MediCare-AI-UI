import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Card,
  TextField,
  IconButton,
  Avatar,
  Typography,
  Alert,
  Chip,
  Button,
  Paper,
} from '@mui/material';
import {
  Send as SendIcon,
  AttachFile as AttachIcon,
  Mic as MicIcon,
  Psychology as AIIcon,
  Emergency as EmergencyIcon,
  CheckCircle as CheckIcon,
} from '@mui/icons-material';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  suggestions?: string[];
}

export default function AIChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: 'Hello! I\'m your MediCare AI Assistant. Describe your symptoms, and I\'ll help you prepare for your doctor visit. Remember, I provide guidance but not medical diagnosis.',
      timestamp: new Date(),
      suggestions: ['Headache', 'Fever', 'Cough', 'Stomach pain'],
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: generateAIResponse(inputText),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('headache')) {
      return 'I understand you\'re experiencing headaches. Let me ask a few questions:\n\n• How long have you had this headache?\n• On a scale of 1-10, how severe is the pain?\n• Is it accompanied by any other symptoms like nausea or sensitivity to light?\n\nBased on your answers, I can help identify possible causes and recommend if you should see a doctor.';
    } else if (input.includes('fever')) {
      return 'Fever can be a sign of infection. Important questions:\n\n• What is your current temperature?\n• When did the fever start?\n• Do you have any other symptoms (cough, body aches, chills)?\n\nIf your fever is above 103°F (39.4°C) or lasts more than 3 days, I recommend consulting a doctor.';
    } else if (input.includes('cough')) {
      return 'Let\'s assess your cough:\n\n• Is it a dry cough or are you bringing up mucus?\n• How long have you had this cough?\n• Is it worse at night or during the day?\n• Any difficulty breathing?\n\nThis information will help determine if you need immediate medical attention.';
    } else {
      return 'Thank you for sharing. To provide better guidance, could you describe:\n\n• When did the symptoms start?\n• How severe are they (mild, moderate, severe)?\n• Are there any other symptoms?\n\nThis will help me give you more accurate recommendations.';
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputText(suggestion);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Card sx={{ mb: 2, bgcolor: '#007AFF', color: 'white' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ bgcolor: 'white', color: '#007AFF' }}>
            <AIIcon />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              AI Health Assistant
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#00C853',
                  animation: 'pulse 2s infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 },
                  },
                }}
              />
              <Typography variant="caption">Online • Ready to help</Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* Disclaimer Banner */}
      <Alert
        severity="warning"
        icon={<EmergencyIcon />}
        sx={{ mb: 2 }}
      >
        <Typography variant="body2" sx={{ fontWeight: 600 }}>
          AI guidance is not a medical diagnosis. In emergencies, call 911 or your local emergency number.
        </Typography>
      </Alert>

      {/* Messages Area */}
      <Card sx={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Box
          sx={{
            flex: 1,
            overflowY: 'auto',
            p: 3,
            bgcolor: '#F8FAFC',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {messages.map((message) => (
            <Box key={message.id}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  mb: 1,
                }}
              >
                {message.sender === 'ai' && (
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: '#007AFF',
                      mr: 1,
                    }}
                  >
                    <AIIcon sx={{ fontSize: 18 }} />
                  </Avatar>
                )}
                <Paper
                  elevation={0}
                  sx={{
                    maxWidth: '75%',
                    p: 2,
                    bgcolor: message.sender === 'user' ? '#007AFF' : 'white',
                    color: message.sender === 'user' ? 'white' : 'text.primary',
                    borderRadius: 2,
                    border: message.sender === 'ai' ? '1px solid #E2E8F0' : 'none',
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      whiteSpace: 'pre-wrap',
                      wordBreak: 'break-word',
                    }}
                  >
                    {message.text}
                  </Typography>
                </Paper>
              </Box>

              {/* Suggestions */}
              {message.suggestions && (
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', ml: 5, mt: 1 }}>
                  {message.suggestions.map((suggestion, index) => (
                    <Chip
                      key={index}
                      label={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      sx={{
                        cursor: 'pointer',
                        '&:hover': { bgcolor: 'primary.main', color: 'white' },
                      }}
                    />
                  ))}
                </Box>
              )}

              <Typography
                variant="caption"
                color="text.secondary"
                sx={{
                  display: 'block',
                  mt: 0.5,
                  ml: message.sender === 'ai' ? 5 : 0,
                  textAlign: message.sender === 'user' ? 'right' : 'left',
                }}
              >
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Typography>
            </Box>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar sx={{ width: 32, height: 32, bgcolor: '#007AFF' }}>
                <AIIcon sx={{ fontSize: 18 }} />
              </Avatar>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  bgcolor: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: 2,
                }}
              >
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#64748B',
                      animation: 'bounce 1.4s infinite ease-in-out',
                      '@keyframes bounce': {
                        '0%, 80%, 100%': { transform: 'scale(0)' },
                        '40%': { transform: 'scale(1)' },
                      },
                    }}
                  />
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#64748B',
                      animation: 'bounce 1.4s infinite ease-in-out',
                      animationDelay: '0.2s',
                    }}
                  />
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      bgcolor: '#64748B',
                      animation: 'bounce 1.4s infinite ease-in-out',
                      animationDelay: '0.4s',
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </Box>

        {/* Input Area */}
        <Box
          sx={{
            p: 2,
            borderTop: '1px solid #E2E8F0',
            bgcolor: 'white',
          }}
        >
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
            <IconButton size="small" color="primary">
              <AttachIcon />
            </IconButton>
            <IconButton size="small" color="primary">
              <MicIcon />
            </IconButton>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              placeholder="Describe your symptoms..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              sx={{
                bgcolor: 'primary.main',
                color: 'white',
                '&:hover': {
                  bgcolor: 'primary.dark',
                },
                '&:disabled': {
                  bgcolor: '#E2E8F0',
                  color: '#94A3B8',
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 1, ml: 7 }}>
            Press Enter to send • Shift + Enter for new line
          </Typography>
        </Box>
      </Card>

      {/* Quick Actions */}
      <Box sx={{ display: 'flex', gap: 2, mt: 2, flexWrap: 'wrap' }}>
        <Button
          variant="outlined"
          size="small"
          startIcon={<CheckIcon />}
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Book Doctor Appointment
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          View Similar Cases
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{ textTransform: 'none', fontWeight: 600 }}
        >
          Health Tips
        </Button>
      </Box>
    </Box>
  );
}
