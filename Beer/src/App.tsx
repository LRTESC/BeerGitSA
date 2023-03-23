import React, { useState, useEffect } from "react";
import { BeerGrid } from "./components/BeerGrid/BeerGrid";
import { BeerFilter } from "./components/BeerFilter/BeerFilter";
import { Beer, fetchBeers } from "./utils/api";

const App = () => {
    const [beers, setBeers] = useState<Beer[]>([]);
    const [filteredBeers, setFilteredBeers] = useState<Beer[]>([]);
  const [showStrongBeers, setShowStrongBeers] = useState(false);

  useEffect(() => {
    fetchBeers().then((data) => {
      setBeers(data);
      setFilteredBeers(data);
    });
  }, []);

  useEffect(() => {
    if (showStrongBeers) {
      setFilteredBeers(beers.filter((beer) => beer.abv > 8));
    } else {
      setFilteredBeers(beers);
    }
  }, [showStrongBeers, beers]);

  return (
    <div className="App">
      <h1>Punk API Beer Grid</h1>
      <BeerFilter showStrongBeers={showStrongBeers} setShowStrongBeers={setShowStrongBeers} />
      <BeerGrid beers={filteredBeers} />
    </div>
  );
};

export default App;
