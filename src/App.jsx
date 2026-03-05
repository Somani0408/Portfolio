import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SystemEntryController from './components/SystemEntryController';
import CyberCursor from './components/ui/CyberCursor';

function App() {
  return (
    <HelmetProvider>
      <CyberCursor />
      <SystemEntryController />
    </HelmetProvider>
  );
}

export default App;
