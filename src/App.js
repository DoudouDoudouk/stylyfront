import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';
import { theme } from './styles/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import SupportedBy from './components/SupportedBy';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="app">
        <Header />
        <main>
          <Hero />
          <SupportedBy />
          <HowItWorks />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App; 