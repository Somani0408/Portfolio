import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resources from './pages/Resources';
import Lab from './pages/Lab';
import Contact from './components/Contact';
import LazyAdminWriteup from './pages/writeups/LazyAdminWriteup';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resources" element={<Navigate to="/resources/introduction" replace />} />
            <Route path="resources/:section" element={<Resources />} />
            <Route path="resources/:section/:subcategory" element={<Resources />} />
            <Route path="lab" element={<Lab />} />
            <Route path="contact" element={<Contact />} />
            <Route path="resources/writeups/tryhackme/lazy-admin" element={<LazyAdminWriteup />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
