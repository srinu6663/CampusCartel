import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Plus, 
  Search, 
  Filter,
  Star,
  Ticket,
  TrendingUp,
  X
} from 'lucide-react';

const EventsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCampus, setSelectedCampus] = useState('all');
  const [showPromoteModal, setShowPromoteModal] = useState(false);
  const [eventForm, setEventForm] = useState({
    name: '',
    description: '',
    date: '',
    time: '',
    venue: '',
    category: '',
    campus: '',
    image: '',
    isTicketed: false,
    ticketPrice: ''
  });

  const categories = [
    'all',
    'hackathon',
    'workshop',
    'seminar',
    'fest',
    'competition',
    'networking',
    'sports',
    'cultural'
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

  const mockEvents = [
    {
      id: 1,
      name: 'AI & Machine Learning Hackathon',
      description: 'Join us for a 48-hour hackathon focused on AI and ML solutions for real-world problems.',
      date: '2024-02-15',
      time: '09:00',
      venue: 'MIT Innovation Lab',
      campus: 'MIT',
      category: 'hackathon',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 150,
      maxAttendees: 200,
      isTicketed: true,
      ticketPrice: 25,
      organizer: 'MIT Tech Club',
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      name: 'Spring Cultural Fest 2024',
      description: 'Celebrate diversity with music, dance, food, and cultural performances from around the world.',
      date: '2024-03-20',
      time: '18:00',
      venue: 'Harvard Yard',
      campus: 'Harvard',
      category: 'cultural',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 500,
      maxAttendees: 1000,
      isTicketed: false,
      ticketPrice: 0,
      organizer: 'Harvard Cultural Society',
      rating: 4.9,
      featured: true
    },
    {
      id: 3,
      name: 'Startup Pitch Competition',
      description: 'Present your startup ideas to industry experts and win funding opportunities.',
      date: '2024-02-28',
      time: '14:00',
      venue: 'Stanford Entrepreneurship Center',
      campus: 'Stanford',
      category: 'competition',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 75,
      maxAttendees: 100,
      isTicketed: true,
      ticketPrice: 15,
      organizer: 'Stanford Entrepreneurs',
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      name: 'Web Development Workshop',
      description: 'Learn modern web development with React, Node.js, and MongoDB in this hands-on workshop.',
      date: '2024-02-10',
      time: '10:00',
      venue: 'Berkeley Computer Lab',
      campus: 'Berkeley',
      category: 'workshop',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      attendees: 45,
      maxAttendees: 50,
      isTicketed: true,
      ticketPrice: 30,
      organizer: 'Berkeley Coding Club',
      rating: 4.6,
      featured: false
    }
  ];

  const filteredEvents = mockEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesCampus = selectedCampus === 'all' || event.campus === selectedCampus;
    
    return matchesSearch && matchesCategory && matchesCampus;
  });

  const featuredEvents = mockEvents.filter(event => event.featured);

  const handlePromoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle event promotion
    console.log('Event promoted:', eventForm);
    setShowPromoteModal(false);
    setEventForm({
      name: '',
      description: '',
      date: '',
      time: '',
      venue: '',
      category: '',
      campus: '',
      image: '',
      isTicketed: false,
      ticketPrice: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Campus Events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Discover and join exciting events happening across campuses
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPromoteModal(true)}
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
          >
            <Plus size={20} />
            Promote Event
          </motion.button>
        </div>

        {/* Featured Events Carousel */}
        {featuredEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <Link to={`/events/${event.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <Star size={14} />
                        Featured
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {event.attendees}/{event.maxAttendees} attending
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {event.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{event.campus}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          by {event.organizer}
                        </span>
                        {event.isTicketed && (
                          <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                            <Ticket size={16} />
                            <span className="font-semibold">${event.ticketPrice}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={selectedCampus}
                onChange={(e) => setSelectedCampus(e.target.value)}
                className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
                {campuses.map(campus => (
                  <option key={campus} value={campus}>
                    {campus === 'all' ? 'All Campuses' : campus}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <Link to={`/events/${event.id}`}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm">
                    {event.attendees}/{event.maxAttendees}
                  </div>
                  <div className="absolute bottom-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm capitalize">
                    {event.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {event.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                      <Clock size={14} className="ml-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <MapPin size={14} />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {event.attendees} attending
                      </span>
                    </div>
                    {event.isTicketed && (
                      <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                        <Ticket size={14} />
                        <span className="text-sm font-semibold">${event.ticketPrice}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No events found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>

      {/* Promote Event Modal */}
      {showPromoteModal && (
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
                  Promote Your Event
                </h3>
                <button
                  onClick={() => setShowPromoteModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handlePromoteSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Event Name
                  </label>
                  <input
                    type="text"
                    value={eventForm.name}
                    onChange={(e) => setEventForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    value={eventForm.description}
                    onChange={(e) => setEventForm(prev => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={eventForm.date}
                      onChange={(e) => setEventForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Time
                    </label>
                    <input
                      type="time"
                      value={eventForm.time}
                      onChange={(e) => setEventForm(prev => ({ ...prev, time: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Venue
                  </label>
                  <input
                    type="text"
                    value={eventForm.venue}
                    onChange={(e) => setEventForm(prev => ({ ...prev, venue: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Category
                    </label>
                    <select
                      value={eventForm.category}
                      onChange={(e) => setEventForm(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select category</option>
                      {categories.slice(1).map(category => (
                        <option key={category} value={category}>
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Campus
                    </label>
                    <select
                      value={eventForm.campus}
                      onChange={(e) => setEventForm(prev => ({ ...prev, campus: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      required
                    >
                      <option value="">Select campus</option>
                      {campuses.slice(1).map(campus => (
                        <option key={campus} value={campus}>
                          {campus}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <input
                      type="checkbox"
                      checked={eventForm.isTicketed}
                      onChange={(e) => setEventForm(prev => ({ ...prev, isTicketed: e.target.checked }))}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      This is a ticketed event
                    </label>
                  </div>
                  {eventForm.isTicketed && (
                    <input
                      type="number"
                      placeholder="Ticket price"
                      value={eventForm.ticketPrice}
                      onChange={(e) => setEventForm(prev => ({ ...prev, ticketPrice: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      min="0"
                      step="0.01"
                    />
                  )}
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowPromoteModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Promote Event
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

export default EventsPage;