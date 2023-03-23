import React from "react";
import { Beer } from "../../utils/api";
import "./BeerGrid.css";

interface BeerGridProps {
  beers: Beer[];
}

export const BeerGrid: React.FC<BeerGridProps> = ({ beers }) => {
  return (
    <div className="beer-grid">
      {beers.map((beer) => (
        <div key={beer.id} className="beer-card">
          <img src={beer.image_url} alt={beer.name} />
          <h3>{beer.name}</h3>
          <p>{beer.tagline}</p>
          <p>{beer.abv}%</p>
        </div>
      ))}
    </div>
  );
};
