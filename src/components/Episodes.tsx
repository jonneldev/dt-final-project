import React, {CSSProperties} from 'react'
import Dance from './Dance'
import Jazz from './Jazz'
import SignupBanner from './SignupBanner'
import Music from './Music'
import Opera from './Opera'

export default function Episodes() {

  const sectionTitle: CSSProperties = {
    fontSize: "32px",
    fontWeight: "700",
    lineHeight: "100%",
    letterSpacing: "0%",
    marginTop: "3em",
  }

  return (
    <div className='container'>
      <h2 style={sectionTitle}>Episodes</h2>
      <Dance />
      <Jazz />
      <SignupBanner />
      <Music />
      <Opera />
    </div>
  )
}
