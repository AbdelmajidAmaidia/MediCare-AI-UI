import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

interface Message { role: 'user' | 'ai'; content: string; time: string; }

@Component({
  selector: 'app-ai-chat',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './ai-chat.component.html',
})
export class AiChatComponent implements AfterViewChecked {
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  inputMessage = '';
  messages: Message[] = [
    { role: 'ai', content: 'Hello! I\'m your MediCare AI health assistant. I can help you with health questions, symptom checks, medication information, and more. How can I help you today?', time: 'Now' },
  ];

  aiResponses = [
    'Based on the symptoms you\'ve described, this could be related to several conditions. I recommend consulting with a doctor for a proper diagnosis. Would you like me to help schedule an appointment?',
    'That\'s a common concern. The medication you mentioned is generally well-tolerated. However, if you\'re experiencing side effects, please consult your prescribing physician before making any changes.',
    'Your lab results show values within normal range for most parameters. The slightly elevated cholesterol could be monitored with dietary changes. Would you like information on heart-healthy foods?',
    'I understand you\'re not feeling well. Based on your description, staying hydrated, resting, and monitoring your temperature is advisable. If symptoms worsen or fever exceeds 103°F, seek immediate care.',
  ];
  responseIndex = 0;

  suggestions = ['Check my symptoms', 'Medication information', 'Interpret lab results', 'Find a specialist', 'Mental health support'];

  sendMessage() {
    if (!this.inputMessage.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.messages.push({ role: 'user', content: this.inputMessage, time: now });
    this.inputMessage = '';

    setTimeout(() => {
      this.messages.push({
        role: 'ai',
        content: this.aiResponses[this.responseIndex % this.aiResponses.length],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.responseIndex++;
    }, 800);
  }

  useSuggestion(s: string) { this.inputMessage = s; this.sendMessage(); }

  ngAfterViewChecked() {
    if (this.chatContainer) {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    }
  }
}
