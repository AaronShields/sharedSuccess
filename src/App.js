import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Mission from './Mission';
import Impact from './Impact';
import Application from './Application';
import Home from './Home'; 


const App = () => {
    return (
        <Router>
        <div className="app-container">
            <Header />
            <Routes>
            <Route path="/" element={<Home />} /> {/* Default route */}
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/impact" element={<Impact />} />
                    <Route path="/application" element={<Application />} />
            </Routes>
        </div>
        </Router>
    );
};

export default App;
