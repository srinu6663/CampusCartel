import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Tag, 
  ArrowRight,
  CreditCard,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'student10') {
      setDiscount(getTotalPrice() * 0.1);
      setPromoApplied(true);
    } else {
      setDiscount(0);
      setPromoApplied(false);
    }
  };

  const subtotal = getTotalPrice();
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-gray-400 dark:text-gray-500 mb-4"
          >
            <ShoppingCart size={64} className="mx-auto" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Looks like you haven't added any items to your cart yet
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Start Shopping
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            {items.length} item{items.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full md:w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        Sold by {item.seller}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-l-lg"
                            >
                              <Minus size={16} />
                            </motion.button>
                            <span className="px-4 py-2 text-gray-900 dark:text-white min-w-[50px] text-center">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors rounded-r-lg"
                            >
                              <Plus size={16} />
                            </motion.button>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </motion.button>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-900 dark:text-white">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            ${item.price.toFixed(2)} each
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Clear Cart Button */}
            <div className="flex justify-between items-center pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clearCart}
                className="text-red-500 hover:text-red-600 font-medium transition-colors"
              >
                Clear Cart
              </motion.button>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Continue Shopping
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Promo Code
              </h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePromoCode}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
                >
                  <Tag size={16} />
                  Apply
                </motion.button>
              </div>
              {promoApplied && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                >
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Promo code applied! You saved ${discount.toFixed(2)}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Order Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Discount</span>
                    <span className="text-green-600 dark:text-green-400">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="text-gray-900 dark:text-white">Free</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-lg"
            >
              <CreditCard size={20} />
              Proceed to Checkout
              <ArrowRight size={20} />
            </motion.button>

            {/* Security Features */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Secure checkout
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={16} className="text-blue-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Free campus delivery
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight size={16} className="text-purple-500" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Easy returns
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;