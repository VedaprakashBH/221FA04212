import React, { useContext } from 'react';
import { UrlContext } from '../context/UrlContext';
import UrlCard from '../components/UrlCard';

function Stats() {
  const { urls } = useContext(UrlContext);
  return (
    <div style={{ padding: 20 }}>
      <h2>Statistics</h2>
      {urls.map((url) => (
        <UrlCard key={url.code} url={url} />
      ))}
    </div>
  );
}

export default Stats;