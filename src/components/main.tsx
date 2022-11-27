import './main.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";
import { HeaderBar } from "./header-component";
import { CssBaseline, Fab, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FooterBar } from './footer-component';
import { ContentComponent } from './content-component';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeModeContext = React.createContext({ toggleColorMode: () => { } });

export const MainComponent: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ThemeModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container
          sx={{ height: '100vh', width: '100vw' }}
          direction='row' justifyContent={'flex-start'}
          alignItems={'center'}>
          <Grid item sx={{ width: '100%', height: 'fit-content' }}>
            <HeaderBar />
          </Grid>
          <Grid item sx={{ width: '100%', height: 'fit-content' }}>
            <ContentComponent />
          </Grid>
          <Grid item sx={{ width: '100%', height: 'fit-content' }}>
            <FooterBar />
          </Grid>
        </Grid>
        <Fab color='primary'
          sx={{
            position: 'fixed',
            zIndex: '1',
            bottom: '15px',
            right: '15px'
          }}
          onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </Fab>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
