import React from 'react';

interface TransactionFiltersProps {
  dateRange: 'week' | 'month' | 'year';
  transactionType: 'all' | 'buy' | 'sell';
  onDateRangeChange: (range: 'week' | 'month' | 'year') => void;
  onTypeChange: (type: 'all' | 'buy' | 'sell') => void;
}

const TransactionFilters: React.FC<TransactionFiltersProps> = ({
  dateRange,
  transactionType,
  onDateRangeChange,
  onTypeChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="flex space-x-2">
        {(['week', 'month', 'year'] as const).map((range) => (
          <button
            key={range}
            onClick={() => onDateRangeChange(range)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              dateRange === range
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {(['all', 'buy', 'sell'] as const).map((type) => (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              transactionType === type
                ? 'bg-emerald-500 text-white'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TransactionFilters;