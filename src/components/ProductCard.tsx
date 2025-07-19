import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Heart, Eye, MapPin, User, ShoppingCart } from 'lucide-react';
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

interface ProductCardProps {
  product: Product;
  viewMode: 'grid' | 'list';
  onQuickView: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode, onQuickView }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id.toString(),
      name: product.name,
      price: product.price,
      image: product.image,
      seller: product.seller
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView();
  };

  if (viewMode === 'list') {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
      >
        <Link to={`/products/${product.id}`}>
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-48 h-48 md:h-32 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                {product.originalPrice > 0 ? 
                  `-${Math.round((1 - product.price / product.originalPrice) * 100)}%` : 
                  'NEW'
                }
              </div>
              <button
                onClick={handleLike}
                className="absolute top-2 left-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <Heart
                  size={16}
                  className={isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}
                />
              </button>
            </div>
            <div className="flex-1 p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-1">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleQuickView}
                    className="p-1 text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    <Eye size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleAddToCart}
                    className="p-1 text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    <ShoppingCart size={16} />
                  </motion.button>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
                {product.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.campus}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <User size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.seller}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.views}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${product.price}
                  </span>
                  {product.originalPrice > 0 && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-sm text-gray-500 capitalize">
                  {product.condition}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            {product.originalPrice > 0 ? 
              `-${Math.round((1 - product.price / product.originalPrice) * 100)}%` : 
              'NEW'
            }
          </div>
          <button
            onClick={handleLike}
            className="absolute top-2 left-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
          >
            <Heart
              size={16}
              className={isLiked ? 'text-red-500 fill-current' : 'text-gray-600'}
            />
          </button>
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleQuickView}
              className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <Eye size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="p-2 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <ShoppingCart size={20} />
            </motion.button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3">
            {product.description}
          </p>
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
            <div className="flex items-center gap-1">
              <Eye size={16} className="text-gray-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {product.views}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              {product.originalPrice > 0 && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              by {product.seller}
            </span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500 capitalize">
              {product.condition}
            </span>
            <span className="text-sm text-gray-500">
              {product.postedAt}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;