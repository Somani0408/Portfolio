import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = () => {
    return (
        <div className="min-h-screen relative flex flex-col font-sans text-text-primary antialiased selection:bg-neon-cyan/30 selection:text-neon-cyan">
            <div className="fixed inset-0 bg-cyber-black -z-50" />
            <div className="fixed inset-0 bg-cyber-gradient -z-40 opacity-80" />

            <Navbar />

            <main className="flex-grow pt-28 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
