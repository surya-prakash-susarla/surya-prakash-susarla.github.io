import { Divider, Typography } from '@mui/material';
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
    <React.Fragment>
        <Divider role='presentation' variant='middle' />
        <Typography variant='subtitle1' align='center' sx={{fontFamily: "'M PLUS 1 Code', sans-serif", fontSize: '10px'}}  gutterBottom>
          {time}
        </Typography>     
    </React.Fragment>
  );
}


