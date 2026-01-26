import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

// Placeholder Pages
const About = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">About Us</h1></div>;
const Services = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Our Services</h1></div>;
const Sectors = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Business Sectors</h1></div>;
const Team = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Our Team</h1></div>;
const Projects = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Portfolio</h1></div>;
const Training = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Training & Development</h1></div>;
const Contact = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Contact Us</h1></div>;

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="sectors" element={<Sectors />} />
                    <Route path="team" element={<Team />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="training" element={<Training />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
