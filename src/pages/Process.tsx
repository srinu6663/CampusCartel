import React from 'react';

const Process: React.FC = () => {
    return (
        <section className="py-12 sm:py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Safe & Simple Process</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Our unique request-to-buy system ensures safe transactions and builds trust between students.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                        <h3 className="text-xl font-semibold mb-2">🔍 Browse & Chat</h3>
                        <p className="text-gray-600">Find products and chat with sellers to ask questions and negotiate.</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                        <h3 className="text-xl font-semibold mb-2">📝 Request to Buy</h3>
                        <p className="text-gray-600">Send a formal request. The seller can accept or decline based on your message.</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                        <h3 className="text-xl font-semibold mb-2">🤝 Meet & Complete</h3>
                        <p className="text-gray-600">Meet safely on campus and complete the transaction offline.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;