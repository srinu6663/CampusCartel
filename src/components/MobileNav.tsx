import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Search, ShoppingCart, User, Calendar } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const MobileNav: React.FC = () => {
  const location = useLocation();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/products', icon: Search, label: 'Browse' },
    { path: '/events', icon: Calendar, label: 'Events' },
    { path: '/cart', icon: ShoppingCart, label: 'Cart' },
    { path: '/dashboard', icon: User, label: 'Profile' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link key={item.path} to={item.path} className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`relative p-2 rounded-lg transition-colors ${
                  isActive 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                <Icon size={20} />
                {item.label === 'Cart' && itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </motion.div>
              <span className={`text-xs mt-1 ${
                isActive 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;