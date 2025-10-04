import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import EnquiryForm from './components/EnquiryForm';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Classes from './pages/Classes';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Footer from './pages/Footer';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/Terms';
import './App.css';

function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/login' || location.pathname === '/signup';
  const hideFooter = location.pathname === '/login' || location.pathname === '/signup';
  const hideEnquiryForm = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="App">
      {!hideNavbar && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
      {!hideEnquiryForm && <EnquiryForm />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
