import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CyberBackground from '../components/CyberBackground';
import ScanningLine from '../components/ScanningLine';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-text-primary antialiased">
            {/* Background */}
            <CyberBackground />
            <ScanningLine />
            <div className="fixed inset-0 bg-cyber-black/90 -z-40" />
            <div className="fixed inset-0 bg-cyber-gradient -z-30 opacity-60" />

            <Navbar />

            <main className="flex-grow pt-28 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
