'use client';
import React from 'react';
import Header from './components/Header';
import Blueberry from './components/Blueberry';
import './App.css';
import { Box, Typography } from '@mui/material';
import Profile from './components/Profile';
import Awards from './components/Award';
import Works from './components/Work';
import Hobby from './components/Hobby';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Header />
      <div className='app'>
        <div className="content-container" style={{ color: 'white' }}>
          <div className="canvas-container">
            <Blueberry />
          </div>
        </div>
      </div>
      <div className='emptySpace'></div>
      <Profile />
      <Awards />
      <Contact />
      <Works />
      <Hobby />
    </div >
  );
}

export default App;
