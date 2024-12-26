import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import LiveTicker from './LiveTicker';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <LiveTicker />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">StockFolio</h3>
            <p className="text-gray-400">
              Real-time stock market data and portfolio management platform.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Market Data</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Stock Quotes</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Market News</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Analysis</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">IPO Calendar</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} StockFolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;