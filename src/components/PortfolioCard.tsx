import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Stock } from '../types/stock';

interface PortfolioCardProps {
  stock: Stock;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ stock }) => {
  const isPositive = stock.change >= 0;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold">{stock.symbol}</h3>
          <p className="text-gray-400 text-sm">{stock.name}</p>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          <span className="ml-1">{stock.changePercent.toFixed(2)}%</span>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-400 text-sm">Current Price</p>
          <p className="text-lg font-semibold">${stock.price.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Shares</p>
          <p className="text-lg font-semibold">{stock.shares}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Value</p>
          <p className="text-lg font-semibold">${stock.value.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Change</p>
          <p className={`text-lg font-semibold ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            ${Math.abs(stock.change).toFixed(2)}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;