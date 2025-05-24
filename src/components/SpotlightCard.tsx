import React from 'react'

interface SpotlightCardProps {
    image: string;
    title: string;
}

export default function SpotlightCard({ image, title }: SpotlightCardProps) {

  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  )
}
