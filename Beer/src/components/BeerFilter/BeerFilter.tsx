import React from "react";
import "./BeerFilter.css";

interface BeerFilterProps {
  showStrongBeers: boolean;
  setShowStrongBeers: (show: boolean) => void;
}

export const BeerFilter: React.FC<BeerFilterProps> = ({
  showStrongBeers,
  setShowStrongBeers,
}) => {
  return (
    <div className="beer-filter">
      <label>
        <input
          type="checkbox"
          checked={showStrongBeers}
          onChange={(e) => setShowStrongBeers(e.target.checked)}
        />
        {`Show Beers > 8% ABV`}
      </label>
    </div>
  );
};
