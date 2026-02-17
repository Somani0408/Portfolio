import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DigitalSynapse from '../components/background/DigitalSynapse';
import TerminalIntro from '../components/TerminalIntro';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <div className="min-h-screen flex flex-col font-sans text-text-primary antialiased bg-transparent relative">
            <AnimatePresence>
                {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
            </AnimatePresence>

            {/* Main Content (Always rendered, revealed when intro fades) */}
            <div className={`transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
                {/* Background */}
                <DigitalSynapse />

                <Navbar />

                <main className="flex-grow pt-28 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Layout;
