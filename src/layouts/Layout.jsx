import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CyberBackground from '../components/CyberBackground';
import ScanningLine from '../components/ScanningLine';
import TerminalIntro from '../components/TerminalIntro';
import { AnimatePresence } from 'framer-motion';

const Layout = () => {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <div className="min-h-screen flex flex-col font-sans text-text-primary antialiased bg-[#0b0f14]">
            <AnimatePresence>
                {showIntro && <TerminalIntro onComplete={() => setShowIntro(false)} />}
            </AnimatePresence>

            {!showIntro && (
                <>
                    {/* Background */}
                    <CyberBackground />
                    <ScanningLine />
                    <div className="fixed inset-0 bg-[#0b0f14]/90 -z-40" />
                    <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#111827_0%,_#0b0f14_100%)] -z-30 opacity-60" />

                    <Navbar />

                    <main className="flex-grow pt-28 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <Outlet />
                    </main>

                    <Footer />
                </>
            )}
        </div>
    );
};

export default Layout;
