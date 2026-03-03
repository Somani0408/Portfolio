import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarModern from '../components/ui/NavbarModern';
import Footer from '../components/Footer';
import BackgroundEffects from '../components/ui/BackgroundEffects';

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-text-primary antialiased bg-transparent relative">
            <div className="bg-noise" />

            {/* Main Content */}
            <div className="flex flex-col min-h-screen">
                {/* Background */}
                <BackgroundEffects />

                <NavbarModern />

                <main className="flex-grow pt-28 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default Layout;
