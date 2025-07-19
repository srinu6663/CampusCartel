import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Package, 
  Heart, 
  MessageCircle, 
  Plus, 
  Edit, 
  Eye, 
  Trash2,
  Star,
  DollarSign,
  TrendingUp,
  Upload,
  X
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    category: '',
    condition: '',
    description: '',
    images: [] as string[]
  });

  const { user } = useAuth();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'listings', label: 'My Listings', icon: Package },
    { id: 'orders', label: 'Orders', icon: TrendingUp },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
  ];

  const mockStats = {
    totalListings: 12,
    totalSales: 8,
    totalEarnings: 420,
    averageRating: 4.8
  };

  const mockListings = [
    {
      id: 1,
      name: 'Calculus Textbook',
      price: 45,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      status: 'active',
      views: 124,
      likes: 23,
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Scientific Calculator',
      price: 25,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      status: 'sold',
      views: 89,
      likes: 15,
      date: '1 week ago'
    }
  ];

  const mockOrders = [
    {
      id: 1,
      product: 'Linear Algebra Notes',
      buyer: 'Sarah M.',
      price: 30,
      status: 'completed',
      date: '3 days ago'
    },
    {
      id: 2,
      product: 'Engineering Textbook',
      buyer: 'Mike R.',
      price: 55,
      status: 'pending',
      date: '1 day ago'
    }
  ];

  const mockWishlist = [
    {
      id: 1,
      name: 'MacBook Pro 2021',
      price: 1200,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      seller: 'John D.',
      campus: 'MIT'
    },
    {
      id: 2,
      name: 'Physics Study Guide',
      price: 20,
      image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      seller: 'Emma L.',
      campus: 'Harvard'
    }
  ];

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle product submission
    console.log('Product submitted:', productForm);
    setShowAddProduct(false);
    setProductForm({
      name: '',
      price: '',
      category: '',
      condition: '',
      description: '',
      images: []
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // In a real app, you would upload these files and get URLs
      const imageUrls = Array.from(files).map(file => URL.createObjectURL(file));
      setProductForm(prev => ({ ...prev, images: [...prev.images, ...imageUrls] }));
    }
  };

  const removeImage = (index: number) => {
    setProductForm(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 dark:text-blue-400">Total Listings</p>
              <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                {mockStats.totalListings}
              </p>
            </div>
            <Package className="text-blue-500" size={24} />
          </div>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 dark:text-green-400">Total Sales</p>
              <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                {mockStats.totalSales}
              </p>
            </div>
            <TrendingUp className="text-green-500" size={24} />
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 dark:text-purple-400">Total Earnings</p>
              <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                ${mockStats.totalEarnings}
              </p>
            </div>
            <DollarSign className="text-purple-500" size={24} />
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 dark:text-orange-400">Avg. Rating</p>
              <p className="text-2xl font-bold text-orange-900 dark:text-orange-100">
                {mockStats.averageRating}
              </p>
            </div>
            <Star className="text-orange-500" size={24} />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Your listing "Calculus Textbook" received 5 new views
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              New message from Sarah M. about "Linear Algebra Notes"
            </span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              Successfully sold "Engineering Textbook" for $55
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderListings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          My Listings ({mockListings.length})
        </h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddProduct(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          Add Product
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockListings.map((listing) => (
          <div key={listing.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <img
              src={listing.image}
              alt={listing.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {listing.name}
              </h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ${listing.price}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  listing.status === 'active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {listing.status}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Eye size={16} />
                  <span>{listing.views}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart size={16} />
                  <span>{listing.likes}</span>
                </div>
                <span>{listing.date}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-1">
                  <Edit size={14} />
                  Edit
                </button>
                <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Orders ({mockOrders.length})
      </h3>
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {order.product}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Buyer: {order.buyer} • {order.date}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-gray-900 dark:text-white">
                  ${order.price}
                </p>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  order.status === 'completed' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Wishlist ({mockWishlist.length})
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWishlist.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {item.name}
              </h4>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ${item.price}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  {item.campus}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                by {item.seller}
              </p>
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-lg hover:bg-blue-600 transition-colors">
                  View Product
                </button>
                <button className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <Heart size={16} className="fill-current" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        Messages
      </h3>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center">
        <MessageCircle className="mx-auto text-gray-400 mb-4" size={48} />
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          No messages yet
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          Your conversations with buyers and sellers will appear here
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back, {user?.name}!
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-1 py-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'listings' && renderListings()}
          {activeTab === 'orders' && renderOrders()}
          {activeTab === 'wishlist' && renderWishlist()}
          {activeTab === 'messages' && renderMessages()}
        </motion.div>
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add New Product
                </h3>
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      value={productForm.price}
                      onChange={(e) => setProductForm(prev => ({ ...prev, price: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="books">Books & Notes</option>
                      <option value="electronics">Electronics</option>
                      <option value="stationery">Stationery</option>
                      <option value="snacks">Snacks & Food</option>
                      <option value="clothing">Clothing</option>
                      <option value="furniture">Furniture</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Condition
                  </label>
                  <select
                    value={productForm.condition}
                    onChange={(e) => setProductForm(prev => ({ ...prev, condition: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="new">New</option>
                    <option value="like-new">Like New</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Images
                  </label>
                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <Upload className="text-gray-400" size={24} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Click to upload images
                      </span>
                    </label>
                    {productForm.images.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {productForm.images.map((image, index) => (
                          <div key={index} className="relative">
                            <img
                              src={image}
                              alt={`Product ${index + 1}`}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowAddProduct(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;