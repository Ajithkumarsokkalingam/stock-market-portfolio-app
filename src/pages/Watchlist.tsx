import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus } from 'lucide-react';
import WatchlistCard from '../components/WatchlistCard';
import SearchBar from '../components/SearchBar';
import { Stock } from '../types/stock';

const mockWatchlist: Stock[] = [
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 185.10,
    change: 5.30,
    changePercent: 2.95,
    shares: 0,
    value: 0,
    marketCap: 580000000000,
    peRatio: 45.2,
    dividendYield: 0
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 875.35,
    change: 15.75,
    changePercent: 1.83,
    shares: 0,
    value: 0,
    marketCap: 2160000000000,
    peRatio: 72.8,
    dividendYield: 0.02
  }
];

const Watchlist = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-2xl font-bold">Watchlist</h1>
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search stocks..."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {mockWatchlist.map((stock) => (
          <WatchlistCard key={stock.symbol} stock={stock} />
        ))}
      </motion.div>
    </div>
  );
};

export default Watchlist;