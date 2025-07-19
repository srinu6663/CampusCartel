import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import MobileNav from './MobileNav';
import ScrollToTop from './ScrollToTop';
import Footer from '../pages/Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {!isAuthPage && <Header />}
      <main className={isAuthPage ? '' : 'pt-16 md:pt-20'}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
      {!isAuthPage && <MobileNav />}
      <ScrollToTop />
    </div>
  );
};

export default Layout;