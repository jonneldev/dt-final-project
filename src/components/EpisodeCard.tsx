import React, { CSSProperties } from 'react'

interface EpisodeCardProps {
  image: string;
  title: string;
  description: string;
}

export default function EpisodeCard({image, title, description}: EpisodeCardProps) {

  const cardStyle: CSSProperties = {
    backgroundColor: "#1E1F22",
    color: "#FFFFFF",
    width: "283px",
    height: "389px",
    borderRadius: "16px",
    textAlign: "center",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center",
    padding: "0.7em",
  }

  const imageButtonDiv: CSSProperties = {
    width: "251px",
    height: "251px",
    position: "relative",
    border: "1px solid #1E1F22", 
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
  }

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
    fontSize: "16px",
    fontWeight: "600",
    width: "244px",
    height: "44px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "start",
    margin: "0",
    marginTop: "0.5em",
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "14px",
    fontWeight: "400",
    width: "244px",
    height: "38px",
    lineHeight: "100%",
    letterSpacing: "0%",
    textAlign: "start",
    color: "rgba(255, 255, 255, 0.6)",
    margin: "0"
  }

  return (
    <div style={cardStyle}>
      <div style={imageButtonDiv}>
        <img src={image} alt={title} style={imageStyle} />
        <button style={buttonStyle}>
         <img src="/images/Vector.png" alt="Play" width="20" />
        </button>
      </div>
      <p style={titleStyle}>{title}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  )
}
