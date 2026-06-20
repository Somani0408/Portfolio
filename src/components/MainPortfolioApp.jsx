import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Experience from '../pages/Experience';
import Resources from '../pages/Resources';
import Lab from '../pages/Lab';
import Contact from './Contact';
import SystemInterface from '../pages/SystemInterface';
import LazyAdminWriteup from '../pages/writeups/LazyAdminWriteup';
import Writeups from '../pages/Writeups';
import DC1Writeup from '../pages/writeups/DC1Writeup';

const MainPortfolioApp = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="experience" element={<Experience />} />
                    <Route path="resources" element={<Navigate to="/resources/introduction" replace />} />
                    <Route path="resources/:section" element={<Resources />} />
                    <Route path="resources/:section/:subcategory" element={<Resources />} />
                    <Route path="lab" element={<Lab />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="hire" element={<Navigate to="/contact" replace />} />
                    <Route path="system-interface" element={<SystemInterface />} />
                    <Route path="writeups" element={<Writeups />} />
                    <Route path="resources/writeups/tryhackme/lazy-admin" element={<LazyAdminWriteup />} />
                    <Route path="resources/writeups/vulnhub/dc-1" element={<DC1Writeup />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default MainPortfolioApp;
