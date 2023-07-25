import React from 'react';
import './styles.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import FormSubmit from './components/FormSubmit';
import RegionInfoCard from './components/RegionInfoCard';
import OSMMap from './components/OSMMap';
import NightModeToggle from './components/NightModeToggle';
import './App.css'; // Import your CSS file here for global styles

const App = ({ nightMode }) => {
  return (
    <div className="app-container">
    
    <div className={`App ${nightMode ? 'night-mode' : ''}`}>
      <Header />
      <div className="content-wrapper">
        <Sidebar nightMode={nightMode} />
        <main className="main-content">
          <FormInput />
          <FormSubmit />
          <RegionInfoCard />
          <OSMMap />
        </main>
      </div>
      <Footer />
      <NightModeToggle />
    </div>
    </div>
  );
};

export default App;
