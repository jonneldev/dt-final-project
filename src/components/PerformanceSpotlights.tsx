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

  const sectionStyle: CSSProperties = {
    padding: "2em 4em",
    backgroundColor: "#000",
    color: "#fff",
  };

  const titleStyle: CSSProperties = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "1em",
  };

  const scrollContainerStyle: CSSProperties = {
    display: "flex",
    overflowX: "auto",
    paddingBottom: "0.5em",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={titleStyle}>Performance Spotlights</h2>
      <div
        style={scrollContainerStyle}
        className="hide-scrollbar" // optional: see below for styling
      >
        {spotlights.map((spotlight) => (
          <SpotlightCard key={uuidv4()} {...spotlight} />
        ))}
      </div>
    </div>
  );
}