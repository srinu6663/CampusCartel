import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Star, 
  Share2, 
  Heart,
  Ticket,
  User,
  ChevronLeft,
  Download,
  QrCode,
  CreditCard
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import toast from 'react-hot-toast';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedPassType, setSelectedPassType] = useState('general');
  const [quantity, setQuantity] = useState(1);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const { addToCart } = useCart();

  // Mock event data
  const event = {
    id: parseInt(id || '1'),
    name: 'AI & Machine Learning Hackathon',
    description: 'Join us for an exciting 48-hour hackathon focused on AI and ML solutions for real-world problems. This event brings together students, developers, and industry experts to collaborate on innovative projects that can make a real impact.',
    longDescription: `This hackathon is designed to challenge participants to think creatively and develop practical AI/ML solutions. Whether you're a beginner or an expert, you'll find opportunities to learn, collaborate, and showcase your skills.

    What to expect:
    • Keynote speeches from industry leaders
    • Workshops on latest AI/ML technologies
    • Mentorship from experienced professionals
    • Networking opportunities with peers and industry experts
    • Exciting prizes for winning teams
    • Free meals and refreshments throughout the event

    Requirements:
    • Laptop with development environment
    • Basic programming knowledge
    • Enthusiasm to learn and collaborate
    • Team formation will happen at the event`,
    date: '2024-02-15',
    endDate: '2024-02-17',
    time: '09:00',
    endTime: '18:00',
    venue: 'MIT Innovation Lab, Building 32',
    campus: 'MIT',
    category: 'hackathon',
    image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
    organizer: {
      name: 'MIT Tech Club',
      avatar: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
      rating: 4.8,
      eventsOrganized: 15
    },
    attendees: 150,
    maxAttendees: 200,
    rating: 4.8,
    reviewCount: 24,
    passTypes: [
      {
        id: 'general',
        name: 'General Pass',
        price: 25,
        description: 'Access to all hackathon activities, meals, and networking sessions',
        features: ['48-hour access', 'All meals included', 'Networking sessions', 'Workshop access'],
        available: 45
      },
      {
        id: 'vip',
        name: 'VIP Pass',
        price: 50,
        description: 'Premium experience with exclusive mentor sessions and VIP lounge access',
        features: ['Everything in General', 'VIP lounge access', '1-on-1 mentor sessions', 'Premium swag bag', 'Priority seating'],
        available: 15
      },
      {
        id: 'student',
        name: 'Student Pass',
        price: 15,
        description: 'Discounted pass for students with valid ID',
        features: ['48-hour access', 'All meals included', 'Workshop access', 'Student networking'],
        available: 30
      }
    ],
    sponsors: ['Google', 'Microsoft', 'Amazon', 'Meta'],
    tags: ['AI', 'Machine Learning', 'Hackathon', 'Innovation', 'Technology'],
    schedule: [
      { time: '09:00', activity: 'Registration & Welcome Coffee' },
      { time: '10:00', activity: 'Opening Ceremony & Keynote' },
      { time: '11:00', activity: 'Team Formation & Ideation' },
      { time: '12:00', activity: 'Hacking Begins!' },
      { time: '13:00', activity: 'Lunch Break' },
      { time: '18:00', activity: 'Day 1 Wrap-up' }
    ]
  };

  const handleBuyPass = () => {
    const selectedPass = event.passTypes.find(pass => pass.id === selectedPassType);
    if (selectedPass) {
      // Add to cart as a special event ticket item
      for (let i = 0; i < quantity; i++) {
        addToCart({
          id: `event-${event.id}-${selectedPassType}`,
          name: `${event.name} - ${selectedPass.name}`,
          price: selectedPass.price,
          image: event.image,
          seller: event.organizer.name
        });
      }
      setShowTicketModal(true);
    }
  };

  const generateTicket = () => {
    // Simulate ticket generation
    toast.success('Ticket downloaded successfully!');
    setShowTicketModal(false);
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
            <Link to="/events" className="hover:text-blue-600 dark:hover:text-blue-400">
              Events
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{event.name}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {event.category}
              </div>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                {event.attendees}/{event.maxAttendees} attending
              </div>
            </div>

            {/* Event Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {event.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(event.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {event.rating} ({event.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {event.attendees} attending
                  </span>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-blue-500" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Date</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {new Date(event.date).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="text-green-500" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Time</p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.time} - {event.endTime}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-red-500" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Venue</p>
                      <p className="text-gray-600 dark:text-gray-300">{event.venue}</p>
                      <p className="text-sm text-gray-500">{event.campus}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="text-purple-500" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Organizer</p>
                      <p className="text-gray-600 dark:text-gray-300">{event.organizer.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  About This Event
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {event.longDescription}
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Event Schedule
                </h3>
                <div className="space-y-3">
                  {event.schedule.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.time}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sponsors */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Sponsors
                </h3>
                <div className="flex flex-wrap gap-4">
                  {event.sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {sponsor}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Organizer Info */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Organized by
              </h3>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={event.organizer.avatar}
                  alt={event.organizer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {event.organizer.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span>{event.organizer.rating}</span>
                    <span>•</span>
                    <span>{event.organizer.eventsOrganized} events</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Contact Organizer
              </button>
            </div>

            {/* Ticket Purchase */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Get Your Pass
              </h3>
              
              {/* Pass Type Selection */}
              <div className="space-y-3 mb-4">
                {event.passTypes.map((pass) => (
                  <div
                    key={pass.id}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedPassType === pass.id
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-blue-300'
                    }`}
                    onClick={() => setSelectedPassType(pass.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {pass.name}
                      </h4>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        ${pass.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {pass.description}
                    </p>
                    <div className="text-xs text-gray-500">
                      {pass.available} available
                    </div>
                  </div>
                ))}
              </div>

              {/* Quantity */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${(event.passTypes.find(p => p.id === selectedPassType)?.price || 0) * quantity}
                  </span>
                </div>
              </div>

              {/* Buy Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyPass}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 mb-3"
              >
                <Ticket size={20} />
                Buy Pass
              </motion.button>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
                  <Heart size={16} />
                  Save
                </button>
                <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Modal */}
      {showTicketModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ticket className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Pass Purchased Successfully!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Your event pass has been added to your cart. Complete the checkout to receive your digital ticket.
              </p>
              
              {/* Mock Ticket Preview */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-90">Event Pass</span>
                  <QrCode size={20} />
                </div>
                <h4 className="font-bold mb-1">{event.name}</h4>
                <p className="text-sm opacity-90">
                  {new Date(event.date).toLocaleDateString()} • {event.time}
                </p>
                <p className="text-sm opacity-90">{event.venue}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={generateTicket}
                  className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Download
                </button>
                <button
                  onClick={() => setShowTicketModal(false)}
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default EventDetailPage;