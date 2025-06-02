import React, { CSSProperties } from 'react'

export default function SignupBanner() {

  const signUpContainer: CSSProperties = {
    backgroundImage: "url('/images/sign-up-background-image.png')",
    height: "500px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "1200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "3em",
    border: "none"
  }

  return (
    <div style={signUpContainer}>
       <h2 style={{
        width: "588px",
        height: "108px",
        fontWeight: "700",
        fontSize: "48px",
        lineHeight: "54px",
        letterSpacing: "0%",
        textShadow: "0 2px 3px rgba(0, 0, 0, 0.6)", 
       }}>
        Watch endless episodes with no interruption.
       </h2>
       <p style={{
        fontSize: "20px",
        fontWeight: "600",
        lineHeight: "100%",
        letterSpacing: "0%",
        textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
       }}>
        Sign up to Red Curtain Addict today.
       </p>
       <button style={{
        width: "163px",
        height: "48px",
        color: "#FCFCFC",
        fontSize: "16px",
        fontWeight: "600",
        background: "linear-gradient(90deg, #C22026 0%, #C400CB 100%)",
        backdropFilter: "blur(16)", 
        borderRadius: "100px",
        border: "none"

       }}>
        Sign up
      </button>
    </div>
  )
}
