import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Clock, 
  DollarSign, 
  Star, 
  TrendingUp, 
  Users, 
  Award,
  ExternalLink,
  Filter,
  Search,
  Play,
  CheckCircle,
  Target,
  Briefcase
} from 'lucide-react';

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    'all',
    'technology',
    'business',
    'design',
    'marketing',
    'finance',
    'data science',
    'cybersecurity',
    'healthcare',
    'engineering'
  ];

  const levels = [
    'all',
    'beginner',
    'intermediate',
    'advanced'
  ];

  const mockCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer.',
      category: 'technology',
      level: 'beginner',
      duration: '12 weeks',
      price: 199,
      originalPrice: 299,
      rating: 4.8,
      students: 15420,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      instructor: 'Dr. Sarah Johnson',
      platform: 'Udemy',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      careerPaths: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer'],
      averageSalary: '$75,000',
      featured: true,
      completion: 89,
      lessons: 156,
      projects: 12
    },
    {
      id: 2,
      title: 'Data Science and Machine Learning',
      description: 'Master Python, statistics, machine learning algorithms, and data visualization techniques.',
      category: 'data science',
      level: 'intermediate',
      duration: '16 weeks',
      price: 249,
      originalPrice: 399,
      rating: 4.9,
      students: 12850,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      instructor: 'Prof. Michael Chen',
      platform: 'Coursera',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Data Visualization'],
      careerPaths: ['Data Scientist', 'ML Engineer', 'Data Analyst'],
      averageSalary: '$95,000',
      featured: true,
      completion: 92,
      lessons: 203,
      projects: 8
    },
    {
      id: 3,
      title: 'UX/UI Design Masterclass',
      description: 'Learn user experience design, interface design, prototyping, and design thinking methodologies.',
      category: 'design',
      level: 'beginner',
      duration: '10 weeks',
      price: 179,
      originalPrice: 249,
      rating: 4.7,
      students: 9340,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      instructor: 'Emma Rodriguez',
      platform: 'Figma Academy',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping', 'Design Systems'],
      careerPaths: ['UX Designer', 'UI Designer', 'Product Designer'],
      averageSalary: '$70,000',
      featured: false,
      completion: 85,
      lessons: 124,
      projects: 15
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      description: 'Comprehensive course covering network security, ethical hacking, and cybersecurity best practices.',
      category: 'cybersecurity',
      level: 'intermediate',
      duration: '14 weeks',
      price: 299,
      originalPrice: 449,
      rating: 4.6,
      students: 7890,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      instructor: 'James Wilson',
      platform: 'SANS',
      skills: ['Network Security', 'Penetration Testing', 'Risk Assessment', 'Incident Response'],
      careerPaths: ['Security Analyst', 'Penetration Tester', 'Security Consultant'],
      averageSalary: '$85,000',
      featured: false,
      completion: 78,
      lessons: 189,
      projects: 6
    },
    {
      id: 5,
      title: 'Digital Marketing Strategy',
      description: 'Master SEO, social media marketing, content marketing, and paid advertising strategies.',
      category: 'marketing',
      level: 'beginner',
      duration: '8 weeks',
      price: 149,
      originalPrice: 199,
      rating: 4.5,
      students: 11200,
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      instructor: 'Lisa Thompson',
      platform: 'HubSpot Academy',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Content Marketing', 'Analytics'],
      careerPaths: ['Digital Marketer', 'SEO Specialist', 'Social Media Manager'],
      averageSalary: '$55,000',
      featured: false,
      completion: 91,
      lessons: 98,
      projects: 10
    },
    {
      id: 6,
      title: 'Financial Analysis & Modeling',
      description: 'Learn financial modeling, valuation techniques, and investment analysis for finance careers.',
      category: 'finance',
      level: 'advanced',
      duration: '12 weeks',
      price: 279,
      originalPrice: 379,
      rating: 4.8,
      students: 6750,
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2',
      instructor: 'Robert Kim',
      platform: 'Wall Street Prep',
      skills: ['Excel Modeling', 'Valuation', 'Financial Analysis', 'Investment Banking'],
      careerPaths: ['Financial Analyst', 'Investment Banker', 'Corporate Finance'],
      averageSalary: '$80,000',
      featured: true,
      completion: 87,
      lessons: 167,
      projects: 5
    }
  ];

  const filteredCourses = mockCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'students':
        return b.students - a.students;
      default:
        return b.students - a.students; // popular
    }
  });

  const featuredCourses = mockCourses.filter(course => course.featured);

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
            Courses & Career Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Advance your career with trending courses and expert guidance
          </motion.p>
        </div>

        {/* Featured Courses */}
        {featuredCourses.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-500" size={24} />
              Trending Courses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star size={12} />
                      Featured
                    </div>
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">
                          ${course.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${course.originalPrice}
                        </span>
                      </div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {course.platform}
                      </span>
                    </div>
                  </div>
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
                  placeholder="Search courses..."
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
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
                {levels.map(level => (
                  <option key={level} value={level}>
                    {level === 'all' ? 'All Levels' : level.charAt(0).toUpperCase() + level.slice(1)}
                  </option>
                ))}
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="students">Most Students</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sortedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-64 h-48 md:h-auto overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-sm capitalize">
                    {course.level}
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2">
                      {course.title}
                    </h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium ml-2">
                      {course.platform}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Play size={14} />
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Skills you'll learn:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {course.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                      {course.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                          +{course.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Career Info */}
                  <div className="mb-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={16} className="text-green-500" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Career Paths:
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {course.careerPaths.join(', ')}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <DollarSign size={16} className="text-green-500" />
                      <span className="text-sm font-medium text-green-600 dark:text-green-400">
                        Avg. Salary: {course.averageSalary}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        Completion Rate
                      </span>
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {course.completion}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.completion}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${course.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${course.originalPrice}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Enroll Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {sortedCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen size={48} className="mx-auto text-gray-400 dark:text-gray-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No courses found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Career Guide Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Path to Choose?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get personalized career guidance based on your interests and goals
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Career Assessment</h3>
                <p className="text-blue-100">
                  Take our quiz to discover your ideal career path
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Skill Mapping</h3>
                <p className="text-blue-100">
                  See which skills you need for your dream job
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Market Insights</h3>
                <p className="text-blue-100">
                  Get data on job demand and salary trends
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Career Assessment
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;