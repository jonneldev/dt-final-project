import React, { CSSProperties  } from 'react'

interface SpotlightCardProps {
    image: string;
    title: string;
}

export default function SpotlightCard({ image, title }: SpotlightCardProps) {

    const cardStyle: CSSProperties = {
        width: "282px",
        height: "390px",
        marginRight: "15px",
        position: "relative"
    }

    const imageStyle: CSSProperties = {
        width: "100%",
        height: "100%",
        position: "relative"
        
    }

    const buttonStyle: CSSProperties = {
        backgroundColor: "#000000",
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "1.5px #000000",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        paddingLeft: "0.3em"
    }

    const titleStyle: CSSProperties = {
        position: "absolute",
        bottom: "2em",
        left: "50%",
        transform: "translateX(-50%)", 
        width: "100%",
        textAlign: "center",
        fontSize: "20px",
        fontWeight: "700",
        textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)"
    }

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imageStyle}/>
      <p style={titleStyle}>{title}</p>
      <button style={buttonStyle}>
        <img src="/images/Vector.png" alt="" />
      </button>
    </div>
  )
}
    