import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { saveToStorage, loadFromStorage } from '../utils/storage';

export const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [urls, setUrls] = useState(loadFromStorage() || []);

  const addUrl = (longUrl, validity, shortcode) => {
    const code = shortcode || uuidv4().slice(0, 6);
    const expiry = new Date(Date.now() + (validity ? parseInt(validity) : 30) * 60000).toLocaleString();
    const shortUrl = window.location.origin + '/s/' + code;

    const newUrl = { longUrl, code, shortUrl, expiry, clicks: [] };
    const updatedUrls = [...urls, newUrl];
    setUrls(updatedUrls);
    saveToStorage(updatedUrls);
  };

  const getUrlAndRegisterClick = (code) => {
    const updatedUrls = urls.map((url) => {
      if (url.code === code) {
        url.clicks.push({ time: new Date().toLocaleString(), source: document.referrer || 'direct', location: 'unknown' });
      }
      return url;
    });
    setUrls(updatedUrls);
    saveToStorage(updatedUrls);
    return updatedUrls.find((url) => url.code === code);
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl, getUrlAndRegisterClick }}>
      {children}
    </UrlContext.Provider>
  );
}