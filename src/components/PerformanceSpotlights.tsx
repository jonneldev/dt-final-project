import React, { useEffect, useState, CSSProperties } from 'react';
import SpotlightCard from './SpotlightCard';
import { fetchData } from '../services/fetchData';
import spotlightData from '../data/spotlightData.json';
import { v4 as uuidv4 } from 'uuid';

interface Spotlight {
  image: string;
  title: string;
}

export default function PerformanceSpotlights() {
  const [spotlights, setSpotlights] = useState<Spotlight[]>([]);

  useEffect(() => {
    fetchData(spotlightData).then((data) => setSpotlights(data));
  }, []);

  const titleStyle: CSSProperties = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "1em",
  };

  const cardContainer: CSSProperties = {
    display: "flex",
    gap: "1.3em", 
  };

  return (
    <div className='container'>
      <h4 style={titleStyle}>Performance Spotlights</h4>
      <div style={cardContainer}>
        {spotlights.map((spotlight) => (
          <SpotlightCard key={uuidv4()} {...spotlight} />
        ))}
      </div>
    </div>
  );
}