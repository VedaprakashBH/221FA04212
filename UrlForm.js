import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { UrlContext } from '../context/UrlContext';
import { validateUrl } from '../utils/validators';

function UrlForm() {
  const { addUrl } = useContext(UrlContext);
  const [longUrl, setLongUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateUrl(longUrl)) {
      setError('Invalid URL format');
      return;
    }
    addUrl(longUrl, validity, shortcode);
    setLongUrl('');
    setValidity('');
    setShortcode('');
    setError('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Original URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        fullWidth
        required
        margin="normal"
      />
      <TextField
        label="Validity (minutes)"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Custom Shortcode"
        value={shortcode}
        onChange={(e) => setShortcode(e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>Shorten</Button>
    </Box>
  );
}

export default UrlForm;