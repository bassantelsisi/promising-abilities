import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContentPage from './pages/ContentPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import SupportPage from './pages/SupportPage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app-container min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/support" element={<SupportPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;