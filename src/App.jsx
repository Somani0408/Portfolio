import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import SystemEntryController from './components/SystemEntryController';

function App() {
  return (
    <HelmetProvider>
      <SystemEntryController />
    </HelmetProvider>
  );
}

export default App;
