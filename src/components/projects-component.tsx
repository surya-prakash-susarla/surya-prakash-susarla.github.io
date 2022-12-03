import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Link,
  List,
  ListItem,
  Typography,
  Stack
} from "@mui/material";
import ProjectDetails from './project-details.json';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface ProjectItemProps {
  item_key: number;
  title: string;
  desc: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (props: ProjectItemProps) => {
  return (
    <ListItem key={props.item_key}>
      <Card variant='outlined' sx={{'width' : '100%'}} className='animate__animated animate__fadeIn'>
      <CardContent>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='body1' paragraph>
          {props.desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={props.link} target={'_blank'} rel='noreferrer'>
          <Stack direction='row' alignItems={'center'} gap={1}>
            <OpenInNewIcon />
            {"Link to Project"}
          </Stack>
        </Link>
      </CardActions>
      </Card>
    </ListItem>
  );
}

const generateProjectList = (): Array<JSX.Element> => {
  let list_values: Array<JSX.Element> = new Array<JSX.Element>();
  for (let i = 0; i < ProjectDetails.contents.length; i++) {
    list_values.push(<ProjectItem item_key={i} title={ProjectDetails.contents[i].title} desc={ProjectDetails.contents[i].desc} link={ProjectDetails.contents[i].link} />);
  }
  return list_values;
}

export const ProjectsComponent: React.FC = () => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography variant='h6' color='text.secondary' gutterBottom>
          {'Here are a few things I have worked on in my spare time,'}
        </Typography>
        <List>
          {generateProjectList()}
        </List>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

