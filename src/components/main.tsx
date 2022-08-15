import './main.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";
import { HeaderBar } from "./header-component";
import { CssBaseline, Grid } from '@mui/material';
import { FooterBar } from './footer-component';
import { ContentComponent } from './content-component';

export const MainComponent: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container 
        sx={{ height: '100vh', width: '100vw' }}
        direction='row' justifyContent={'flex-start'}
        alignItems={'center'}>
        <Grid item sx={{width: '100%', height: 'fit-content'}}>
          <HeaderBar />
        </Grid>
        <Grid item sx={{width: '100%', height: 'fit-content'}}>
          <ContentComponent />
        </Grid>
        <Grid item sx={{width: '100%', height: 'fit-content'}}>
          <FooterBar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
