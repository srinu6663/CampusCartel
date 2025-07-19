import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">CC</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">CAMPUS CARTEL</h1>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-4">
                            The trusted student marketplace connecting campus communities across India. Buy, sell, and exchange with verified students safely.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                <span className="text-sm font-bold">f</span>
                            </button>
                            <button className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                                <span className="text-sm font-bold">@</span>
                            </button>
                            <button className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <span className="text-sm font-bold">in</span>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Safety Guidelines</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Student Verification</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">For Students</h3>
                        <p className="text-gray-400 text-sm">
                            Join thousands of verified students buying and selling safely on campus.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 Campus Cartel. Made with ❤️ for students, by students.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;