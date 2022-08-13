import './main.css';
import 'animate.css';
import { Button, Layout, Menu, PageHeader, Typography } from 'antd';
import React, { useState } from 'react';
import Card from 'antd/lib/card/Card';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Footer, Sider } = Layout;

enum PageSelection {
  AboutMePage = 1,
  ResumePage = 2,
  ContactMePage = 3
};

interface ContentCardProps {
  title: string,
  content: string
};

interface SideMenuProps {
  clickHandler: (pageSelection: PageSelection) => void
};

interface ContentPageProps {
  pageSelection: PageSelection
};

const MainComponent: React.FC = () => {
  const [pageSelection, setPageSelection] = useState(PageSelection.AboutMePage);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideMenu clickHandler={setPageSelection} />
      <Layout style={{ minHeight: '100vh' }}>
        <TitleBar />
        <ContentPage pageSelection={pageSelection} />
        <FooterBar />
      </Layout>
    </Layout>
  );
}

const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {
  const [collapsed, setCollapsed] = useState(false);
  let toggleCollapsed = (): void => { setCollapsed(!collapsed) };
  let menu: JSX.Element = (
    <Menu defaultSelectedKeys={['1']} mode={'inline'} inlineCollapsed={true} className={'animate__animated animate__fadeInDown'}>
      <Menu.Item key={'1'} onClick={() => { props.clickHandler(PageSelection.AboutMePage) }}>
        About Me
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={'2'} onClick={() => { props.clickHandler(PageSelection.ResumePage) }}>
        Resume
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key={'3'} onClick={() => { props.clickHandler(PageSelection.ContactMePage) }}>
        Contact
      </Menu.Item>
    </Menu>
  );
  return (
    <Sider
      collapsed={collapsed}
      breakpoint={'xl'}
      onBreakpoint={toggleCollapsed}>
      <Button
        type='dashed'
        onClick={toggleCollapsed}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        className={'sidebar-button'} />
      {
        collapsed ? null : menu
      }
    </Sider>
  );
}

const TitleBar: React.FC = () => {
  return (
    <PageHeader className='header-text animate__animated animate__fadeInUp'>
      <Typography.Title code={true} level={1} >
        Surya Prakash Susarla
      </Typography.Title>
    </PageHeader>
  )
}

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
