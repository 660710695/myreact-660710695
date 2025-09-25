// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import CategoryPage from './pages/CategoryPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import NotFound from './components/NotFound';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/books" element={<BookListPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books/:bookId" element={<BookDetailPage />} />
          </Routes>
        </main>
      </div>
   
  );
}

export default App;