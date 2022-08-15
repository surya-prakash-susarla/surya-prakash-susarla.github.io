import { Typography } from '@mui/material';
import React from 'react';

export const FooterBar: React.FC = () => {
  const [time, setTime] = React.useState(new Date().toLocaleString());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Typography variant='subtitle1' align='center' sx={{fontFamily: "'M PLUS 1 Code', sans-serif", fontSize: '10px'}}  gutterBottom>
      {time}
    </Typography>
  );
}


