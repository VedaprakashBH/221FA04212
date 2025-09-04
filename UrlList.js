import React, { useContext } from 'react';
import { UrlContext } from '../context/UrlContext';
import UrlCard from './UrlCard';

function UrlList() {
  const { urls } = useContext(UrlContext);
  return (
    <div>
      {urls.map((url) => (
        <UrlCard key={url.code} url={url} />
      ))}
    </div>
  );
}

export default UrlList;