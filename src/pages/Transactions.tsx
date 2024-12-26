import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TransactionList from '../components/transactions/TransactionList';
import TransactionFilters from '../components/transactions/TransactionFilters';
import TransactionStats from '../components/transactions/TransactionStats';
import { Transaction } from '../types/stock';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    symbol: 'AAPL',
    type: 'buy',
    shares: 10,
    price: 173.50,
    date: '2024-03-15T10:30:00Z',
    total: 1735.00
  },
  {
    id: '2',
    symbol: 'MSFT',
    type: 'sell',
    shares: 5,
    price: 378.92,
    date: '2024-03-14T15:45:00Z',
    total: 1894.60
  }
];

const TransactionsPage = () => {
  const [dateRange, setDateRange] = useState<'week' | 'month' | 'year'>('month');
  const [transactionType, setTransactionType] = useState<'all' | 'buy' | 'sell'>('all');

  const filteredTransactions = mockTransactions.filter(transaction => {
    if (transactionType !== 'all' && transaction.type !== transactionType) {
      return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 lg:grid-cols-4 gap-6"
      >
        <div className="lg:col-span-3">
          <TransactionFilters
            dateRange={dateRange}
            transactionType={transactionType}
            onDateRangeChange={setDateRange}
            onTypeChange={setTransactionType}
          />
          <TransactionList transactions={filteredTransactions} />
        </div>
        <TransactionStats transactions={filteredTransactions} />
      </motion.div>
    </div>
  );
};

export default TransactionsPage;