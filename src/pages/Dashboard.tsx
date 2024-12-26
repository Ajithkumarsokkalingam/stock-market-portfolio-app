import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PerformanceChart from '../components/PerformanceChart';
import { DollarSign } from 'lucide-react';

const mockChartData = [
  { date: '2024-01', value: 50000 },
  { date: '2024-02', value: 55000 },
  { date: '2024-03', value: 53000 },
  { date: '2024-04', value: 58000 },
  { date: '2024-05', value: 62000 },
];

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState<'day' | 'week' | 'month' | 'year'>('month');

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700"
      >
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-emerald-500 rounded-full">
            <DollarSign className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Total Portfolio Value</h2>
            <p className="text-3xl font-bold text-emerald-500">$62,000.00</p>
          </div>
        </div>
      </motion.div>

      <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Performance</h2>
          <div className="flex space-x-2">
            {(['day', 'week', 'month', 'year'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  timeframe === t
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <PerformanceChart data={mockChartData} timeframe={timeframe} />
      </div>
    </div>
  );
};

export default Dashboard;