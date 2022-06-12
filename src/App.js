import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar/Navbar';
import { getReadBooks } from './redux/books/books';
import './app.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReadBooks());
  }, []);
  return (
    <Router>
      <main className="wrap">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
