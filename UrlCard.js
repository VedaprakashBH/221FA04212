import React from 'react';
import { Card, CardContent, Typography, Link } from '@mui/material';

function UrlCard({ url }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="body1">Original: {url.longUrl}</Typography>
        <Typography variant="body2">
          Shortened: <Link href={url.shortUrl}>{url.shortUrl}</Link>
        </Typography>
        <Typography variant="body2">Expires at: {url.expiry}</Typography>
        <Typography variant="body2">Clicks: {url.clicks.length}</Typography>
      </CardContent>
    </Card>
  );
}

export default UrlCard;