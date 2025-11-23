import React from 'react';
import Navbar from './components/Navbar';  // Import Navbar component
import Header from './components/Header';  // Import Header component
import Showcase from './components/Showcase';  // Import Showcase component
import Features from './components/Features';  // Import Features component
import About from './components/About';  // Import About component
import Contact from './components/Contact';  // Import Contact component
import Footer from './components/Footer';  // Import Footer component
import './index.css';  // Import Global CSS for styling

export default function App() {
  return (
    <>
      <Navbar />  {/* Navbar component */}
      <Header />  {/* Header component */}
      <main>
        <Showcase />  {/* Showcase section */}
        <Features />  {/* Features section */}
        <About />  {/* About section */}
        <Contact />  {/* Contact section */}
      </main>
      <Footer />  {/* Footer component */}
    </>
  );
}
