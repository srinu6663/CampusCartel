import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Laptop,
  Coffee,
  PenTool,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Shield,
  Calendar,
  Clock,
  MapPin
} from 'lucide-react';
import Process from './Process';

const HomePage: React.FC = () => {
  const categories = [
    { id: 1, name: 'Books & Notes', icon: BookOpen, color: 'bg-blue-500', count: '500+' },
    { id: 2, name: 'Electronics', icon: Laptop, color: 'bg-purple-500', count: '200+' },
    { id: 3, name: 'Snacks & Food', icon: Coffee, color: 'bg-green-500', count: '150+' },
    { id: 4, name: 'Stationery', icon: PenTool, color: 'bg-orange-500', count: '300+' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Calculus Textbook',
      price: 45,
      originalPrice: 120,
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      seller: 'John D.',
      rating: 4.8,
      campus: 'MIT'
    },
    {
      id: 2,
      name: 'MacBook Pro 2021',
      price: 1200,
      originalPrice: 1800,
      image: 'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      seller: 'Sarah M.',
      rating: 4.9,
      campus: 'Harvard'
    },
    {
      id: 3,
      name: 'Scientific Calculator',
      price: 25,
      originalPrice: 60,
      image: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      seller: 'Mike R.',
      rating: 4.7,
      campus: 'Stanford'
    },
    {
      id: 4,
      name: 'Engineering Notes Set',
      price: 30,
      originalPrice: 0,
      image: 'https://images.pexels.com/photos/159810/book-page-paper-text-159810.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      seller: 'Emma L.',
      rating: 4.6,
      campus: 'MIT'
    },
  ];

  const featuredEvents = [
    {
      id: 1,
      name: 'AI & ML Hackathon',
      date: '2024-02-15',
      time: '09:00',
      venue: 'MIT Innovation Lab',
      campus: 'MIT',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 150,
      category: 'hackathon'
    },
    {
      id: 2,
      name: 'Spring Cultural Fest',
      date: '2024-03-20',
      time: '18:00',
      venue: 'Harvard Yard',
      campus: 'Harvard',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 500,
      category: 'cultural'
    },
    {
      id: 3,
      name: 'Startup Pitch Competition',
      date: '2024-02-28',
      time: '14:00',
      venue: 'Stanford Entrepreneurship Center',
      campus: 'Stanford',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 75,
      category: 'competition'
    }
  ];

  const stats = [
    { label: 'Active Students', value: '10,000+', icon: Users },
    { label: 'Products Listed', value: '25,000+', icon: TrendingUp },
    { label: 'Successful Deals', value: '15,000+', icon: Star },
    { label: 'Campus Partners', value: '50+', icon: Shield },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Your Campus
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              >
                Marketplace
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Buy, sell, and donate student essentials with your campus community
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                >
                  Start Shopping
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Join Community
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Find exactly what you need for your studies and campus life
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/products?category=${category.name.toLowerCase()}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                    <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {category.count} items
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Great deals from students in your area
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/products/${product.id}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {product.rating}
                          </span>
                        </div>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {product.campus}
                        </span>
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
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                View All Products
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Don't miss out on exciting campus events and opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={`/events/${event.id}`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm capitalize">
                        {event.category}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                        {event.attendees} attending
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                        {event.name}
                      </h3>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <Clock size={14} className="ml-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} />
                          <span>{event.venue}</span>
                        </div>
                        <div className="text-blue-600 dark:text-blue-400 font-medium">
                          {event.campus}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
              >
                <Calendar size={20} />
                View All Events
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={32} className="text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <Process />



      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Join thousands of students already saving money and connecting with their campus community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  Sign Up Now
                </motion.button>
              </Link>
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Browse Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;