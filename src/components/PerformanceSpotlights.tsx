import React from 'react'
import SpotlightCard from './SpotlightCard'
import spotlightData from '../data/spotlightData'
import { v4 as uuidv4 } from 'uuid'

export default function PerformanceSpotlights() {

    const cardContainer = {
        display: "flex"
    }
  return (
    <div>
      <h2>Performance Spotlights</h2>
      <div style={cardContainer}>
        {
            spotlightData.map(spotlight => (
                < SpotlightCard key={uuidv4()} {...spotlight}/>
            ))
        }
      </div>
    </div>
  )
}
