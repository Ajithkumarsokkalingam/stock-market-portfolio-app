import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useLiveMarketData } from '../hooks/useLiveMarketData';

const LiveTicker = () => {
  const { marketData } = useLiveMarketData();

  return (
    <div className="bg-gray-800 border-t border-gray-700 overflow-hidden">
      <div className="flex animate-scroll">
        <AnimatePresence>
          {marketData.map((stock) => (
            <motion.div
              key={stock.symbol}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex items-center space-x-4 px-4 py-2 whitespace-nowrap"
            >
              <span className="font-medium">{stock.symbol}</span>
              <span className={`flex items-center ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.change >= 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                ${stock.price.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LiveTicker;