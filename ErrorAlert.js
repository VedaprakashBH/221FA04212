import React from 'react';
import { Alert } from '@mui/material';

function ErrorAlert({ message }) {
  if (!message) return null;
  return <Alert severity="error">{message}</Alert>;
}

export default ErrorAlert;