import { useState, useEffect } from 'react';

interface MarketData {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

const INITIAL_STOCKS = [
  'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'META', 'TSLA', 'NVDA', 'JPM'
].map(symbol => ({
  symbol,
  price: Math.random() * 1000,
  change: 0,
  changePercent: 0
}));

export const useLiveMarketData = () => {
  const [marketData, setMarketData] = useState<MarketData[]>(INITIAL_STOCKS);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setMarketData(prevData =>
        prevData.map(stock => {
          const priceChange = (Math.random() - 0.5) * 2;
          const newPrice = stock.price + priceChange;
          return {
            ...stock,
            price: newPrice,
            change: priceChange,
            changePercent: (priceChange / stock.price) * 100
          };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return { marketData };
};