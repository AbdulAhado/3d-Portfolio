
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="bg-black text-yellow-500">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <ContactForm />
                <Footer />
              </>
            }
          />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;