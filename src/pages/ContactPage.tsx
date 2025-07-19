import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  ChevronDown,
  Send,
  User,
  Clock,
  Globe,
  HelpCircle
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I sell my items on Campus Cart?",
      answer: "To sell items, first create an account and verify your student status. Then navigate to your dashboard and click 'Add Product'. Fill in the details, upload photos, and set your price. Your listing will be live immediately!"
    },
    {
      question: "Is it safe to buy from other students?",
      answer: "Yes! We verify all student accounts and provide seller ratings. We recommend meeting in public campus locations and inspecting items before purchase. Our secure messaging system also helps you communicate safely with sellers."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We support various payment methods including cash, Venmo, PayPal, and campus payment systems. Payment is typically arranged between buyer and seller, with cash being the most common for campus transactions."
    },
    {
      question: "Can I return items if I'm not satisfied?",
      answer: "Return policies vary by seller. We encourage buyers to carefully inspect items before purchase. Many sellers offer returns within 24-48 hours, but this should be confirmed before buying."
    },
    {
      question: "How do I report a problem with a transaction?",
      answer: "If you encounter any issues, use our 'Report' feature on the product page or contact our support team. We'll mediate disputes and take appropriate action to ensure fair transactions."
    },
    {
      question: "Are there any fees for using Campus Cart?",
      answer: "Campus Cart is completely free to use! We don't charge any listing fees or transaction fees. Our platform is supported by optional sponsored listings and partnerships with campus bookstores."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            We're here to help you make the most of your campus marketplace experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                    <Mail className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">support@campuscart.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                    <Phone className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">1-800-CAMPUS (1-800-226-7878)</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                    <MapPin className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 University Ave<br />
                      Student Center, Room 200<br />
                      Boston, MA 02101
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
                    <Clock className="text-orange-600 dark:text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Hours</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Monday - Friday: 9AM - 6PM<br />
                      Saturday: 10AM - 4PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Quick Links
              </h2>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <User className="text-blue-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Account Help</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <MessageCircle className="text-green-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Seller Support</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Globe className="text-purple-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Campus Partnerships</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <HelpCircle className="text-orange-500" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">Help Center</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Technical Support</option>
                  <option value="account">Account Issues</option>
                  <option value="seller">Seller Support</option>
                  <option value="buyer">Buyer Support</option>
                  <option value="partnership">Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find answers to common questions about using Campus Cart
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="text-gray-500" size={20} />
                  </motion.div>
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;