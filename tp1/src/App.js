import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

import Header from './Header';
import Footer from './Footer';

import KryptoPote from './Kryptopote';
function App() {
  return (
    <NextUIProvider>
      <>
        <Header />
        {/* Autres composants ou éléments de votre application */}
      
        <KryptoPote/>
        <Footer />
      </>
    </NextUIProvider>
  );
}

export default App;
