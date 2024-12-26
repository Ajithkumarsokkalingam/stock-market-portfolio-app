import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard';
import PieChart from '../components/PieChart'; // Fixed import
import { Stock } from '../types/stock';

const mockStocks: Stock[] = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 173.50,
    change: 2.50,
    changePercent: 1.46,
    shares: 10,
    value: 1735.00,
    marketCap: 2800000000000,
    peRatio: 28.5,
    dividendYield: 0.5
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.92,
    change: -1.23,
    changePercent: -0.32,
    shares: 5,
    value: 1894.60,
    marketCap: 2500000000000,
    peRatio: 32.1,
    dividendYield: 0.8
  }
];

const Portfolio = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 space-y-4"
        >
          <h2 className="text-2xl font-bold">Your Holdings</h2>
          {mockStocks.map((stock) => (
            <PortfolioCard key={stock.symbol} stock={stock} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-800 rounded-xl p-6"
        >
          <h2 className="text-xl font-bold mb-4">Portfolio Allocation</h2>
          <PieChart data={mockStocks} />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;