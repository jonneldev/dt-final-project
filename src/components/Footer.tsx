import React from 'react'

export default function Footer() {
  return (
    <div style={{
      marginTop: "3em",
      fontWeight: "400",
      borderTop: "1px solid #1E1F22",
      paddingTop: "3em"
    }}>
      <div className='componentContainer' 
        style={{
        display: "flex",
        gap: "8em"
      }}>
        <img src="images/logo.png" alt="logo" style={{
          width: "64px",
          height: "48px"
        }}/>
        <div>
          <p>Events</p>
          <p>News</p>
          <p>Episodes</p>
        </div>
        <div>
          <p>For profressionals</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Terms & conditions</p>
        </div>
        <div>
            <p style={{
              width: "382px",
              height: "44px",
            }}>Follow us on social media and join our growing community of performing arts enthusiasts.</p>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5em"
            }}>
              <img src="/images/instagram-icon.png" alt="instagram icon" />
              <img src="/images/facebook-icon.png" alt="facebook icon" />
              <img src="/images/tweeter-icon.png" alt="tweeter icon" />
              <img src="/images/youtube-icon.png" alt="youtube icon" />
            </div>
        </div>
      </div>
      <div 
        className='componentContainer'
        style={{
        marginTop: "3em"
      }}>
        <p>© Red Curtain Addict 2021</p>
      </div>
    </div>
  )
}
