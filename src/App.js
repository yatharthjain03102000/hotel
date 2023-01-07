
import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Component1 from './Components/Component1';
import './App.css'
import data from "./data"

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero/>
            {data ? data.map(item => {
              return (
                  <Component1
                      key={item.id}
                      img={item.coverImg}
                      rating={item.stats.rating}
                      reviewCount={item.stats.reviewCount}
                      location={item.location}
                      title={item.title}
                      price={item.price}
                      openSpots={item.openSpots}
                  />
              )
            }): null }
        </div>
    );
}

export default App;
