import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  MapPin,
  Heart,
  Eye,
  X,
  SlidersHorizontal
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';

const ProductListingPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCampus, setSelectedCampus] = useState('all');
  const [selectedCondition, setSelectedCondition] = useState('all');

  const { addToCart } = useCart();

  const categories = [
    'all',
    'books & notes',
    'electronics',
    'snacks & food',
    'stationery',
    'clothing',
    'furniture',
    'sports & fitness'
  ];

  const campuses = [
    'all',
    'MIT',
    'Harvard',
    'Stanford',
    'Berkeley',
    'Columbia',
    'NYU',
    'UCLA'
  ];

  const conditions = [
    'all',
    'new',
    'like new',
    'good',
    'fair',
    'poor'
  ];

  const mockProducts = [
    {
      id: 1,
      name: 'Calculus Textbook - Early Transcendentals',
      price: 45,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'John D.',
      rating: 4.8,
      campus: 'MIT',
      category: 'books & notes',
      condition: 'good',
      description: 'Well-maintained calculus textbook with minimal highlighting.',
      views: 124,
      likes: 23,
      postedAt: '2 days ago'
    },
    {
      id: 2,
      name: 'MacBook Pro 2021 - M1 Chip',
      price: 1200,
      originalPrice: 1800,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'Sarah M.',
      rating: 4.9,
      campus: 'Harvard',
      category: 'electronics',
      condition: 'like new',
      description: 'Excellent condition MacBook Pro with original box and charger.',
      views: 456,
      likes: 78,
      postedAt: '1 day ago'
    },
    {
      id: 3,
      name: 'Scientific Calculator TI-84 Plus',
      price: 25,
      originalPrice: 60,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'Mike R.',
      rating: 4.7,
      campus: 'Stanford',
      category: 'electronics',
      condition: 'good',
      description: 'Reliable calculator perfect for math and science courses.',
      views: 89,
      likes: 15,
      postedAt: '3 days ago'
    },
    {
      id: 4,
      name: 'Complete Engineering Notes Set',
      price: 30,
      originalPrice: 0,
      image: 'https://images.pexels.com/photos/159810/book-page-paper-text-159810.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'Emma L.',
      rating: 4.6,
      campus: 'MIT',
      category: 'books & notes',
      condition: 'new',
      description: 'Comprehensive handwritten notes for all engineering courses.',
      views: 203,
      likes: 45,
      postedAt: '1 week ago'
    },
    {
      id: 5,
      name: 'Organic Chemistry Study Guide',
      price: 20,
      originalPrice: 45,
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'Alex K.',
      rating: 4.5,
      campus: 'Berkeley',
      category: 'books & notes',
      condition: 'good',
      description: 'Detailed study guide with practice problems and solutions.',
      views: 156,
      likes: 28,
      postedAt: '4 days ago'
    },
    {
      id: 6,
      name: 'Wireless Noise-Cancelling Headphones',
      price: 150,
      originalPrice: 300,
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'David P.',
      rating: 4.8,
      campus: 'Columbia',
      category: 'electronics',
      condition: 'like new',
      description: 'Premium headphones perfect for studying and music.',
      views: 234,
      likes: 67,
      postedAt: '2 days ago'
    },
    {
      id: 7,
      name: 'Healthy Snack Box Bundle',
      price: 15,
      originalPrice: 0,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'Lisa J.',
      rating: 4.4,
      campus: 'NYU',
      category: 'snacks & food',
      condition: 'new',
      description: 'Assorted healthy snacks perfect for study sessions.',
      views: 78,
      likes: 12,
      postedAt: '1 day ago'
    },
    {
      id: 8,
      name: 'Art Supply Set - Complete Kit',
      price: 40,
      originalPrice: 80,
      image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
      seller: 'Maria S.',
      rating: 4.7,
      campus: 'UCLA',
      category: 'stationery',
      condition: 'good',
      description: 'Complete art supply kit with brushes, paints, and canvas.',
      views: 167,
      likes: 34,
      postedAt: '5 days ago'
    },
  ];

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesCampus = selectedCampus === 'all' || product.campus === selectedCampus;
    const matchesCondition = selectedCondition === 'all' || product.condition === selectedCondition;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesCampus && matchesCondition && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (searchQuery) {
        newParams.set('search', searchQuery);
      } else {
        newParams.delete('search');
      }
      return newParams;
    });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedCampus('all');
    setSelectedCondition('all');
    setPriceRange([0, 1000]);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Products
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Discover amazing deals from students in your campus community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </form>

            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Filter Toggle */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              <SlidersHorizontal size={20} />
              <span>Filters</span>
            </motion.button>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>

            <button
              onClick={clearFilters}
              className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <AnimatePresence>
            {(isFilterOpen || window.innerWidth >= 1024) && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full lg:w-64 bg-white dark:bg-gray-800 rounded-lg p-6 h-fit lg:sticky lg:top-24"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Filters</h3>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="lg:hidden p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Campus Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Campus
                  </label>
                  <select
                    value={selectedCampus}
                    onChange={(e) => setSelectedCampus(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    {campuses.map(campus => (
                      <option key={campus} value={campus}>
                        {campus === 'all' ? 'All Campuses' : campus}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Condition Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Condition
                  </label>
                  <select
                    value={selectedCondition}
                    onChange={(e) => setSelectedCondition(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    {conditions.map(condition => (
                      <option key={condition} value={condition}>
                        {condition === 'all' ? 'All Conditions' : condition.charAt(0).toUpperCase() + condition.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Price Range: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                      className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-gray-600 dark:text-gray-300">
                {sortedProducts.length} products found
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <ProductCard
                    product={product}
                    viewMode={viewMode}
                    onQuickView={() => setSelectedProduct(product)}
                  />
                </motion.div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 dark:text-gray-500 mb-4">
                  <Search size={48} className="mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductQuickView
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductListingPage;