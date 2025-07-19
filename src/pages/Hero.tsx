import { useState } from 'react';
import { Search, MessageCircle, Bell, User, Plus, Menu, X } from 'lucide-react';

const CampusCartelHero = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentUser] = useState({
        name: 'John Doe',
        profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80'
    });
    const [, setAuthModalOpen] = useState(false); // Placeholder for auth modal state
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">CC</span>
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="text-xl font-bold text-gray-900">CAMPUS</h1>
                                <p className="text-xs text-gray-500 -mt-1">CARTEL</p>
                            </div>
                        </div>

                        {/* Search Bar - Hidden on mobile */}
                        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                            <div className="relative w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search products, sellers, or schools..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center space-x-2 sm:space-x-4">
                            {currentUser ? (
                                <>
                                    <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                                        <MessageCircle className="w-6 h-6" />
                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                                    </button>
                                    <button className="p-2 text-gray-600 hover:text-gray-900 relative">
                                        <Bell className="w-6 h-6" />
                                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                                    </button>
                                    <div className="flex items-center space-x-2">
                                        <img
                                            src={currentUser.profileImage || `https://ui-avatars.com/api/?name=${currentUser.name}&background=random`}
                                            alt={currentUser.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="hidden sm:block text-sm font-medium text-gray-700">{currentUser.name}</span>
                                    </div>
                                </>
                            ) : (
                                <button
                                    onClick={() => setAuthModalOpen(true)}
                                    className="p-2 text-gray-600 hover:text-gray-900"
                                >
                                    <User className="w-6 h-6" />
                                </button>
                            )}

                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                                <Plus className="w-4 h-4" />
                                <span className="hidden sm:inline">SELL</span>
                            </button>

                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                            >
                                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Search */}
                    {mobileMenuOpen && ( // Conditionally render mobile search
                        <div className="md:hidden pb-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

                    {/* Floating Orbs */}
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-1/4 left-1/4 animate-float">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl shadow-2xl flex items-center justify-center text-2xl transform rotate-12">
                            📚
                        </div>
                    </div>
                    <div className="absolute top-1/3 right-1/4 animate-float-delayed">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl shadow-2xl flex items-center justify-center text-2xl transform -rotate-12">
                            💻
                        </div>
                    </div>
                    <div className="absolute bottom-1/3 left-1/6 animate-float-slow">
                        <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl shadow-2xl flex items-center justify-center text-xl transform rotate-45">
                            ⚽
                        </div>
                    </div>
                    <div className="absolute top-1/2 right-1/6 animate-float-fast">
                        <div className="w-11 h-11 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl shadow-2xl flex items-center justify-center text-xl transform -rotate-45">
                            👕
                        </div>
                    </div>
                    <div className="absolute bottom-1/4 right-1/3 animate-float">
                        <div className="w-9 h-9 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl shadow-2xl flex items-center justify-center text-lg transform rotate-12">
                            🎯
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between relative z-10 min-h-screen py-20">
                        <div className="flex-1 text-center lg:text-left mb-16 lg:mb-0">
                            {/* Badge */}
                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-full text-sm font-semibold mb-8 border border-white/30 shadow-2xl">
                                <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
                                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                    🎓 Student-Only Marketplace
                                </span>
                            </div>

                            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tight">
                                <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                                    CAMPUS
                                </span>
                                <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl animate-gradient">
                                    CARTEL
                                </span>
                                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                                    Where Students Trade Smart
                                </span>
                            </h1>

                            <p className="text-xl sm:text-2xl mb-10 text-slate-200 max-w-3xl leading-relaxed">
                                The <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">most trusted platform</span> for students to buy, sell & exchange everything from textbooks to tech gadgets.
                                <span className="block mt-3 text-lg text-blue-200 font-medium">
                                    ✨ Chat First • 🛡️ Request-to-Buy • 🎓 Student Verified
                                </span>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
                                <button className="group relative bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>🚀</span>
                                        <span>START EXPLORING</span>
                                    </span>
                                </button>
                                <button className="group relative border-2 border-white/40 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-500 backdrop-blur-xl hover:backdrop-blur-none hover:shadow-2xl">
                                    <span className="flex items-center justify-center space-x-2">
                                        <span>📖</span>
                                        <span>HOW IT WORKS</span>
                                    </span>
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8 justify-center lg:justify-start text-center">
                                <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/30 hover:border-white/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                                    <div className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">5000+</div>
                                    <div className="text-sm text-slate-300 font-medium">Active Students</div>
                                </div>
                                <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/30 hover:border-white/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                                    <div className="text-3xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">2500+</div>
                                    <div className="text-sm text-slate-300 font-medium">Products Listed</div>
                                </div>
                                <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/30 hover:border-white/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl">
                                    <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">100+</div>
                                    <div className="text-sm text-slate-300 font-medium">Campuses</div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual */}
                        <div className="flex-1 lg:flex-none lg:w-1/2 relative mt-8 lg:mt-0">
                            <div className="relative max-w-2xl mx-auto">
                                {/* Main Card */}
                                <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 border border-white/20 hover:shadow-white/20">
                                    <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-2xl animate-bounce">
                                        🎯
                                    </div>

                                    <div className="text-center text-slate-800">
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl mx-auto mb-8 flex items-center justify-center transform hover:scale-110 transition-transform duration-500 shadow-2xl">
                                            <span className="text-4xl">🎓</span>
                                        </div>
                                        <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                                            Trusted by Students
                                        </h3>
                                        <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                                            Join thousands of verified students trading safely across campuses
                                        </p>

                                        {/* Mini Features */}
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                                                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-lg">💬</span>
                                                </div>
                                                <span className="text-base font-bold text-green-800">Chat Before You Buy</span>
                                            </div>
                                            <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-lg">🛡️</span>
                                                </div>
                                                <span className="text-base font-bold text-blue-800">Request-to-Buy System</span>
                                            </div>
                                            <div className="flex items-center space-x-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                                                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                                    <span className="text-white text-lg">🤝</span>
                                                </div>
                                                <span className="text-base font-bold text-orange-800">Safe Campus Meetups</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Cards */}
                                <div className="absolute -top-8 -left-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-5 shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-700 border border-blue-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                                            📚
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">Engineering Books</div>
                                            <div className="text-sm text-green-600 font-semibold">₹500 - ₹2000</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl p-5 shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-700 border border-purple-200">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                            💻
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-slate-800">Laptops & Gadgets</div>
                                            <div className="text-sm text-green-600 font-semibold">₹15000+</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 -left-12 bg-gradient-to-br from-white to-green-50 rounded-2xl p-4 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-700 border border-green-200">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                                            ⚽
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-slate-800">Sports Gear</div>
                                            <div className="text-xs text-green-600 font-semibold">₹800+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CampusCartelHero;