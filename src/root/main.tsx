import './main.css';
import { Layout, Menu, PageHeader, Typography } from 'antd';
import React, { useState } from 'react';
import Card from 'antd/lib/card/Card';
const { Footer, Sider } = Layout;

enum PageSelection {
  AboutMePage = 1,
  ResumePage = 2,
  ContactMePage = 3
};

const MainComponent: React.FC = () => {
  const [pageSelection, setPageSelection] = useState(PageSelection.AboutMePage);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <SideMenu clickHandler={setPageSelection}/>
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <TitleBar />
        <ContentPage pageSelection={pageSelection} />
        <FooterBar />
      </Layout>
    </Layout>
  );
}

interface SideMenuProps {
  clickHandler: (pageSelection: PageSelection) => void
};

const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {
  return (
    <Menu defaultSelectedKeys={['1']}>
      <Menu.Item key={'1'} onClick={() => { props.clickHandler(PageSelection.AboutMePage) }}> About Me </Menu.Item>
      <Menu.Item key={'2'} onClick={() => { props.clickHandler(PageSelection.ResumePage) }}> Resume </Menu.Item>
      <Menu.Item key={'3'} onClick={() => { props.clickHandler(PageSelection.ContactMePage) }}> Contact </Menu.Item>
    </Menu>
  );
}

const TitleBar: React.FC = () => {
  return (
    <PageHeader className='header-text'>
      <Typography.Title code={true} level={1} >
        Surya Prakash Susarla
      </Typography.Title>
    </PageHeader>
  )
}

interface ContentPageProps {
  pageSelection: PageSelection
};

const ContentPage: React.FC<ContentPageProps> = (props: ContentPageProps) => {
  switch (props.pageSelection) {
    case PageSelection.AboutMePage:
      return <ContentCard title='About Me' content='This is about me.' />
    case PageSelection.ResumePage:
      return <ContentCard title='Resume' content='Resume page.' />
    case PageSelection.ContactMePage:
      return <ContentCard title='Contact Me' content='Contact me page.' />
    default:
      return null;
  }
}

interface ContentCardProps {
  title: string,
  content: string
};

const ContentCard: React.FC<ContentCardProps> = (props: ContentCardProps) => {
  return (
    <Card>
      <Typography.Title code={true} underline={true} level={2} className='content-card-title'>
        {props.title}
      </Typography.Title>
      <Typography.Paragraph code={true}>
        {props.content}
      </Typography.Paragraph>
    </Card>
  );
}

const FooterBar: React.FC = () => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Footer className='footer-bar'>
      {time}
    </Footer>
  );
}

export default MainComponent;
