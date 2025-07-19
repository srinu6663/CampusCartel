import React from 'react';
import { motion } from 'framer-motion';
import { X, Star, MapPin, User, Heart, MessageCircle, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  seller: string;
  rating: number;
  campus: string;
  category: string;
  condition: string;
  description: string;
  views: number;
  likes: number;
  postedAt: string;
}

interface ProductQuickViewProps {
  product: Product;
  onClose: () => void;
}

const ProductQuickView: React.FC<ProductQuickViewProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      seller: product.seller
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {product.originalPrice > 0 ? 
                  `-${Math.round((1 - product.price / product.originalPrice) * 100)}%` : 
                  'NEW'
                }
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h2>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">•</span>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {product.campus}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-600 dark:text-gray-300 capitalize">
                    {product.condition}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                {product.originalPrice > 0 && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Seller Info */}
              <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <User size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {product.seller}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {product.campus} • Posted {product.postedAt}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </motion.button>
                
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Heart size={16} />
                    Save
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Message
                  </motion.button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="text-sm text-gray-500 space-y-1">
                <p>Category: {product.category}</p>
                <p>Views: {product.views}</p>
                <p>Likes: {product.likes}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductQuickView;