import { useState, useEffect } from 'react';
import { Stock } from '../types/stock';

// Simulated WebSocket for real-time updates
const mockWebSocket = {
  onmessage: null as ((event: { data: string }) => void) | null,
  send: () => {},
  close: () => {},
};

export const useStockData = (symbol: string) => {
  const [stock, setStock] = useState<Stock | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate initial data fetch
    const fetchData = async () => {
      try {
        // Simulate API call
        const mockStock: Stock = {
          symbol,
          name: 'Mock Company',
          price: Math.random() * 1000,
          change: Math.random() * 10 - 5,
          changePercent: Math.random() * 5 - 2.5,
          shares: Math.floor(Math.random() * 100),
          value: 0,
          marketCap: Math.random() * 1000000000000,
          peRatio: Math.random() * 50,
          dividendYield: Math.random() * 5
        };
        mockStock.value = mockStock.price * mockStock.shares;
        setStock(mockStock);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stock data');
        setLoading(false);
      }
    };

    fetchData();

    // Simulate real-time updates
    const interval = setInterval(() => {
      if (stock) {
        const priceChange = (Math.random() - 0.5) * 2;
        const newPrice = stock.price + priceChange;
        setStock(prev => {
          if (!prev) return null;
          return {
            ...prev,
            price: newPrice,
            change: priceChange,
            changePercent: (priceChange / prev.price) * 100,
            value: newPrice * prev.shares
          };
        });
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [symbol]);

  return { stock, loading, error };
};

export const useStockList = (symbols: string[]) => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const mockStocks = symbols.map(symbol => ({
          symbol,
          name: `${symbol} Company`,
          price: Math.random() * 1000,
          change: Math.random() * 10 - 5,
          changePercent: Math.random() * 5 - 2.5,
          shares: Math.floor(Math.random() * 100),
          value: 0,
          marketCap: Math.random() * 1000000000000,
          peRatio: Math.random() * 50,
          dividendYield: Math.random() * 5
        }));
        mockStocks.forEach(stock => {
          stock.value = stock.price * stock.shares;
        });
        setStocks(mockStocks);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch stocks');
        setLoading(false);
      }
    };

    fetchStocks();

    // Simulate real-time updates for all stocks
    const interval = setInterval(() => {
      setStocks(prevStocks =>
        prevStocks.map(stock => {
          const priceChange = (Math.random() - 0.5) * 2;
          const newPrice = stock.price + priceChange;
          return {
            ...stock,
            price: newPrice,
            change: priceChange,
            changePercent: (priceChange / stock.price) * 100,
            value: newPrice * stock.shares
          };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [symbols]);

  return { stocks, loading, error };
};