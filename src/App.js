import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Error from './components/Error';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:categoryName" element={<Products />} />
          <Route path="contact" element={<Contact />} />

          {/* The following route match only when no other route match */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }

`;

export default App;
