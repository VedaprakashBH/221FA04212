import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#ffb300' },   // yellow (GradSchool style)
    secondary: { main: '#0d1b2a' }, // dark navy
    background: { default: '#0d1b2a' },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      marginBottom: '1rem',
      color: '#ffb300'
    },
    body1: {
      lineHeight: 1.6,
      color: '#ffffff'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          padding: '8px 20px',
          backgroundColor: '#ffb300',
          color: '#0d1b2a',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#ffcc33'
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          backgroundColor: 'rgba(13, 27, 42, 0.8)',
          color: '#ffffff'
        }
      }
    }
  }
});

export default theme;
