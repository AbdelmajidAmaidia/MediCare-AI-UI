import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';

interface WalletTransaction { date: string; description: string; type: string; amount: number; balance: number; }

@Component({
  selector: 'app-pharmacy-wallet',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatChipsModule, MatTableModule],
  templateUrl: './pharmacy-wallet.component.html',
})
export class PharmacyWalletComponent {
  Math = Math;
  balance = 28450;
  pendingPayout = 6200;
  displayedColumns = ['date', 'description', 'type', 'amount', 'balance'];

  transactions: WalletTransaction[] = [
    { date: 'Dec 15', description: 'Order #ORD-038 Payment', type: 'Credit', amount: 156, balance: 28450 },
    { date: 'Dec 15', description: 'Order #ORD-037 Payment', type: 'Credit', amount: 89, balance: 28294 },
    { date: 'Dec 14', description: 'Weekly Payout Transfer', type: 'Debit', amount: -5200, balance: 28205 },
    { date: 'Dec 14', description: 'Order #ORD-036 Payment', type: 'Credit', amount: 220, balance: 33405 },
    { date: 'Dec 14', description: 'Drug Supplier Invoice', type: 'Debit', amount: -8500, balance: 33185 },
    { date: 'Dec 13', description: 'Order #ORD-035 Payment', type: 'Credit', amount: 345, balance: 41685 },
  ];
}
