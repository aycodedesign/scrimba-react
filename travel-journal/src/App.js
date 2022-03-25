import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

export default function App() {
  return (
    <>
      <Navbar />
      <Card />
    </>
  );
}

/*
- Data array in separate .js file
  - title, location, Google Maps link, start date, end date, description, image URL
- Use .map() and props
- styled and polished 
*/