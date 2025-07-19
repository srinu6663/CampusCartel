import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  MapPin, 
  User, 
  Heart, 
  MessageCircle, 
  ShoppingCart, 
  ChevronLeft,
  ChevronRight,
  Shield,
  Truck,
  RefreshCw,
  Plus,
  Minus,
  Share2
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const { addToCart } = useCart();

  // Mock product data
  const product = {
    id: parseInt(id || '1'),
    name: 'Calculus Textbook - Early Transcendentals',
    price: 45,
    originalPrice: 120,
    images: [
      'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2',
      'https://images.pexels.com/photos/159810/book-page-paper-text-159810.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2'
    ],
    seller: {
      name: 'John D.',
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      campus: 'MIT',
      joinDate: 'Joined September 2023',
      totalSales: 23
    },
    rating: 4.8,
    reviewCount: 24,
    campus: 'MIT',
    category: 'Books & Notes',
    condition: 'Good',
    description: 'Well-maintained calculus textbook with minimal highlighting. Perfect for students taking Calculus I and II. All pages are intact and readable. Some minor wear on the cover but interior is in excellent condition.',
    features: [
      'ISBN: 978-1285741550',
      'Edition: 8th Edition',
      'Author: James Stewart',
      'Pages: 1344',
      'Language: English'
    ],
    views: 124,
    likes: 23,
    postedAt: '2 days ago',
    availability: 'In Stock',
    location: 'Cambridge, MA',
    shipping: 'Free pickup on campus'
  };

  const reviews = [
    {
      id: 1,
      user: 'Sarah M.',
      rating: 5,
      date: '1 week ago',
      comment: 'Excellent condition! Exactly as described. Quick pickup and very helpful seller.',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 2,
      user: 'Mike R.',
      rating: 4,
      date: '2 weeks ago',
      comment: 'Great textbook, saved me a lot of money. Minor highlighting but nothing major.',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      name: 'Linear Algebra Textbook',
      price: 35,
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Scientific Calculator',
      price: 25,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      rating: 4.7
    }
  ];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id.toString(),
        name: product.name,
        price: product.price,
        image: product.images[0],
        seller: product.seller.name
      });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600 dark:hover:text-blue-400">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {product.originalPrice > 0 ? 
                  `-${Math.round((1 - product.price / product.originalPrice) * 100)}%` : 
                  'NEW'
                }
              </div>
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex
                      ? 'border-blue-500'
                      : 'border-gray-300 dark:border-gray-600'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                <span className="text-sm text-gray-400">•</span>
                <div className="flex items-center gap-1">
                  <MapPin size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.campus}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                {product.originalPrice > 0 && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Save ${product.originalPrice - product.price}
                </span>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {product.seller.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-yellow-400 fill-current" />
                      <span>{product.seller.rating}</span>
                    </div>
                    <span>•</span>
                    <span>{product.seller.totalSales} sales</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                {product.seller.joinDate} • {product.seller.campus}
              </p>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                <MessageCircle size={16} />
                Chat with Seller
              </button>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-4">
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Heart size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Share2 size={20} />
                </motion.button>
              </div>
            </div>

            {/* Product Features */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                Product Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Verified Seller
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Campus Pickup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw size={16} className="text-purple-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Return Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {['description', 'reviews', 'details'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    selectedTab === tab
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6">
            {selectedTab === 'description' && (
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Additional Information
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Condition:</strong> {product.condition}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Location:</strong> {product.location}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Availability:</strong> {product.availability}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Category:</strong> {product.category}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Shipping:</strong> {product.shipping}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <strong>Posted:</strong> {product.postedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white">
                    {product.rating}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          className={i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Based on {product.reviewCount} reviews
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <img
                          src={review.avatar}
                          alt={review.user}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {review.user}
                          </p>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={12}
                                  className={i < review.rating 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300'
                                  }
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">
                              {review.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {selectedTab === 'details' && (
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Product Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Related Products
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/products/${relatedProduct.id}`}
                className="group"
              >
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {relatedProduct.name}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${relatedProduct.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {relatedProduct.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;