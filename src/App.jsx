import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import MainPortfolioApp from './components/MainPortfolioApp';

function App() {
  return (
    <HelmetProvider>
      <MainPortfolioApp />
    </HelmetProvider>
  );
}

export default App;
