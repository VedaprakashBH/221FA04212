import React from 'react';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Shorten your URL</h2>
      <UrlForm />
      <UrlList />
    </div>
  );
}

export default Home;