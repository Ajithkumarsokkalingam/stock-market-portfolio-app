import React from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';
import { Transaction } from '../../types/stock';
import { formatCurrency } from '../../utils/formatters';

interface TransactionStatsProps {
  transactions: Transaction[];
}

const TransactionStats: React.FC<TransactionStatsProps> = ({ transactions }) => {
  const totalBuys = transactions.filter(t => t.type === 'buy').reduce((acc, t) => acc + t.total, 0);
  const totalSells = transactions.filter(t => t.type === 'sell').reduce((acc, t) => acc + t.total, 0);
  const netPosition = totalSells - totalBuys;

  return (
    <div className="space-y-4">
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-4">Transaction Summary</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-green-500">
              <ArrowUpRight className="w-5 h-5 mr-2" />
              <span>Total Buys</span>
            </div>
            <span className="font-medium">{formatCurrency(totalBuys)}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-red-500">
              <ArrowDownRight className="w-5 h-5 mr-2" />
              <span>Total Sells</span>
            </div>
            <span className="font-medium">{formatCurrency(totalSells)}</span>
          </div>
          <div className="pt-4 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>Net Position</span>
              </div>
              <span className={`font-medium ${netPosition >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {formatCurrency(Math.abs(netPosition))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionStats;