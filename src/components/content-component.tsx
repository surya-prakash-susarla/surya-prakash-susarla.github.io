import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactPageIcon from '@mui/icons-material/ContactPage';

import React from 'react';
import { BottomNavigation, BottomNavigationAction, Grid } from '@mui/material';
import { PageSelection } from './constants';
import { ProjectsComponent, ContactMeComponent, HomeComponent, ResumeComponent } from './pages';

const getContentPageForSelection =
  (page_selection: PageSelection,
    togglePageSelection: (page: PageSelection) => void): JSX.Element => {
    let content: JSX.Element = <React.Fragment />;
    switch (page_selection) {
      case PageSelection.Home:
        content = <HomeComponent pageSelector={togglePageSelection}/>
        break;
      case PageSelection.Projects:
        content = <ProjectsComponent />;
        break;
      case PageSelection.Resume:
        content = <ResumeComponent />;
        break;
      case PageSelection.Contact:
        content = <ContactMeComponent />;
        break;
      default:
        return <div></div>;
    }
    return (
      <div className='animate__animated animate__fadeIn'>
        {content}
      </div>
    );
  }

export const ContentComponent: React.FC = () => {
  const [page_selection, setPageSelection] = React.useState(PageSelection.Home);

  return (
    <Grid container sx={{ height: '100%', width: '100%' }}
      direction='column' justifyContent={'space-between'}
      alignItems={'center'}>
      <Grid item sx={{ width: '100%', height: '10%' }}>
        <BottomNavigation showLabels
          sx={{ width: '100%', justifyContent: 'space-evenly' }}
          value={page_selection}
          onChange={(event, newValue) => {
            setPageSelection(newValue);
          }}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="My Work" icon={<InfoIcon />} />
          <BottomNavigationAction label="Résumé" icon={<DescriptionIcon />} />
          <BottomNavigationAction label="Contact" icon={<ContactPageIcon />} />
        </BottomNavigation>
      </Grid>
      <Grid item sx={{ width: '100%', height: '85%' }}>
        <div style={{ height: '100%', width: '100%', fontFamily: "'Encode Sans Expanded', sans-serif" }}>
          {getContentPageForSelection(page_selection, setPageSelection)}
        </div>
      </Grid>
    </Grid>
  );
}
