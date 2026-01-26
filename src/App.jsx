import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Projects from './pages/Projects'; // Actual Projects component

// Placeholder Pages
const Sectors = () => <div className="container mx-auto px-4 py-20"><h1 className="text-4xl">Business Sectors</h1></div>;
import Training from './pages/Training';
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
