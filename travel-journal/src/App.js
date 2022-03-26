import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import data from "./data.js";


export default function App() {
  const cardElement = data.map(item => {
    return (
      <Card
        key={ item.id }
        item={ item }
      // title={ item.title }
      // location={ }
      // googleMapsUrl={ }
      // startDate={ }
      // endDate={ }
      // description={ }
      // image={ }
      />
    )
  })

  return (
    <>
      <Header />
      { cardElement }
    </>
  );
}

/*
- Data array in separate .js file
  - title, location, Google Maps link, start date, end date, description, image URL
- Use .map() and props
- styled and polished 
*/