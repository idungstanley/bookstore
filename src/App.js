import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar';
import './app.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Router>
  );
}

export default App;
