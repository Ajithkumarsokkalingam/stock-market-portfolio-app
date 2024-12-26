import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Star, Bell } from 'lucide-react';
import { Stock } from '../types/stock';

interface WatchlistCardProps {
  stock: Stock;
}

const WatchlistCard: React.FC<WatchlistCardProps> = ({ stock }) => {
  const isPositive = stock.change >= 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{stock.symbol}</h3>
          <p className="text-gray-400 text-sm">{stock.name}</p>
        </div>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full transition-colors">
            <Star className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-2xl font-bold">${stock.price.toFixed(2)}</p>
            <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
              <span>{stock.changePercent.toFixed(2)}%</span>
            </div>
          </div>
          <button className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">
            Trade
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WatchlistCard;