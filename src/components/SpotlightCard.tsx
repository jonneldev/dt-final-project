import React, { CSSProperties } from 'react';

interface SpotlightCardProps {
  image: string;
  title: string;
}

export default function SpotlightCard({ image, title }: SpotlightCardProps) {
  const cardStyle: CSSProperties = {
    flex: "0 0 auto", 
    width: "282px",
    height: "390px",
    marginRight: "1em",
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
  };

  const imageStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  };

  const buttonStyle: CSSProperties = {
    backgroundColor: "#000000",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "none",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.8,
  };

  const titleStyle: CSSProperties = {
    position: "absolute",
    bottom: "1.5em",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    textAlign: "center",
    fontSize: "18px",
    fontWeight: 700,
    color: "white",
    textShadow: "2px 2px 5px rgba(0, 0, 0, 0.6)",
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle} />
      <p style={titleStyle}>{title}</p>
      <button style={buttonStyle}>
        <img src="/images/Vector.png" alt="Play" width="20" />
      </button>
    </div>
  );
}