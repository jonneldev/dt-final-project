import React, { useState, useEffect, CSSProperties } from 'react';
import EpisodeCard from './EpisodeCard';
import { fetchData } from '../services/fetchData';
import episodeData from '../data/episodeData.json';
import { v4 as uuidv4 } from 'uuid'

interface EpisodeDataType {
  image: string;
  title: string;
  description: string;
}

export default function Jazz() {
  const [jazzData, setJazzData] = useState<EpisodeDataType[]>([])

  useEffect(() => {
    fetchData(episodeData.Jazz).then((data) => setJazzData(data));
  }, []);

  const cardContainer: CSSProperties = {
    display: "flex",
    gap: "1.3em",
  }

  const episodeHeader: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5em",
    marginTop: "3em",
  }

  const buttonContainer: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "1em",
    marginRight: "6.5em",
  }

  const buttonStyle: CSSProperties = {
    width: "48px",
    height: "48px",
    backgroundColor: "#1E1F22",
    color: "#FFFFFF",
    borderRadius: "50%",
    border: "none",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  }

  return (
    <div>
      <div style={episodeHeader}>
        <h5>Jazz</h5>  
        <div style={buttonContainer}>
          <button style={buttonStyle}>
            <img src="/images/prev.png" alt="previous button" />
          </button>
          <button style={buttonStyle}>
            <img src="/images/next.png" alt="next button" />
          </button>
        </div>
      </div>
      <div style={cardContainer}>
        {jazzData.map((item) => (
          <EpisodeCard
            key={uuidv4()}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}