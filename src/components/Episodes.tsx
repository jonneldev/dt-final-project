import React, { CSSProperties } from 'react';
import SignupBanner from './SignupBanner';
import Episode from './Episode';

export default function Episodes() {
  const sectionTitle: CSSProperties = {
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '100%',
    letterSpacing: '0%',
    marginTop: '3em',
  };

  return (
    <div className="container">
      <h2 style={sectionTitle}>Episodes</h2>
      <Episode sectionTitle="Dance" dataKey="Dance" />
      <Episode sectionTitle="Jazz" dataKey="Jazz" />
      <SignupBanner />
      <Episode sectionTitle="Music" dataKey="Music" />
      <Episode sectionTitle="Opera" dataKey="Opera" />
    </div>
  );
}