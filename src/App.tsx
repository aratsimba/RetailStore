import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import '@aws-amplify/ui-react/styles.css';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';
import { Category, Recommended, Header, Footer, Product } from './components';

function App() {
  
  // Print process.env.NODE_ENV
  console.log('NODE_ENV: ', process.env.NODE_ENV);
  console.log('NEXT_PUBLIC_LOCAL: ', process.env.NEXT_PUBLIC_LOCAL);
  
  // const baseURL = process.env.NODE_ENV === 'development' ? `/proxy/8081/RetailStore` : '';
  // const baseURL = process.env.NODE_ENV === 'development' ? (process.env.NEXT_PUBLIC_LOCAL ? '/RetailStore' : `/proxy/8081/RetailStore`) : ''
  const baseURL = process.env.NODE_ENV === 'development' ? "/RetailStore" : `/proxy/8081/RetailStore`;

  // Print baseURL
  console.log('baseURL: ', baseURL);

  return (
    <ThemeProvider>
      <Authenticator.Provider>
        <Router basename={baseURL}>
          <Header />
          <Routes>
            <Route path="/" element={<Recommended />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
          <Footer />
        </Router>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

export default App;