import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardActions,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@mui/material"
import React from "react";
import { kLinkedinLink, kResumeLink, PageSelection } from "./constants";

import EmailIcon from '@mui/icons-material/Email';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

interface HomeComponentProps {
  pageSelector: (page: PageSelection) => void
};

export const HomeComponent: React.FC<HomeComponentProps> = (props: HomeComponentProps) => {
  return (
    <Card variant='outlined' sx={{ scale: '0.9' }}>
      <CardContent>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          {'Hello!'}
        </Typography>
        <Typography variant='h5' component='div' gutterBottom>
          {'I am Surya Prakash Susarla.'}
        </Typography>
        <Typography variant='body1' paragraph>
          {'Thank you for visiting my page.'}
          <br />
          <br />
          I am an experienced system and full-stack software engineer
          interested in the areas of software engineering, data analysis, full-stack and mobile development.
          I am currently pursuing Masters in Computer Science from North Carolina State University at Raleigh, North Carolina. My primary focus is in the areas of Software Engineering and System Design.
          In addition to software development, my other interests are in the areas of product management and user engagement. Some of my experiences in these areas include facilitating user studies to understand customer pain-points, drawing actionable conclusions from large scale data points and designing experiments to increase user retention.
          Outside of computers, I love driving, urban exploration and discovering local hotspots.
          <br />
          <br />
          {'Actively looking for internship and full-time opportunities starting from Summer 2023.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant='contained'
          onClick={() => { props.pageSelector(PageSelection.Contact); }} >
          {'Connect with me'}
        </Button>
      </CardActions>
    </Card>
  );
}

export const ResumeComponent: React.FC = () => {
  return (
    <Card variant='outlined' sx={{ scale: '0.9' }} className='animate__animated animate__fadeIn'>
      <CardContent>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          {'For further details,'}
        </Typography>
        <Typography variant='body1' paragraph>
          {'To find further details of my personal and professional attributes, please find my Résumé attached in the link below.'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={kResumeLink} target={'_blank'} rel='noreferrer'>
          {"Surya Prakash Susarla's Resume"}
        </Link>
      </CardActions>
    </Card>
  );
}

export const ContactMeComponent: React.FC = () => {
  return (
    <Card variant='outlined' sx={{ scale: '0.9' }} className='animate__animated animate__fadeIn'>
      <CardContent>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          {'You can reach me through,'}
        </Typography>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <EmailIcon />
            <Typography variant='body1'>
              {'Email'}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List disablePadding>
              <ListItem>
                <ListItemText primary="Official Email ID" secondary="spsusarl@ncsu.edu" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Personal Email ID" secondary="susarla.surya.prakash.1998@gmail.com" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <LinkedInIcon />
            <Typography variant='body1'>
              {'LinkedIn'}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link href={kLinkedinLink} underline='hover' target={'_blank'} rel='noreferrer'>
              {'Surya Prakash Susarla'}
            </Link>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HomeIcon />
            <Typography variant='body1'>
              {'Home Address'}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body1'>
              2512 Avent Ferry Road,
              <br />
              Raleigh,
              <br />
              North Carolina,
              <br />
              United States - 27606.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardContent>
    </Card>
  );
}
