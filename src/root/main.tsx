import './main.css';
import { Layout, Menu, PageHeader, Typography } from 'antd';
import React from 'react';
import Card from 'antd/lib/card/Card';
const { Footer, Sider } = Layout;

const MainComponent: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <SideMenu />
      </Sider>
      <Layout style={{ minHeight: '100vh' }}>
        <TitleBar />
        <ContentPage />
        <FooterBar />
      </Layout>
    </Layout>
  );
}

const SideMenu: React.FC = () => {
  return (
    <Menu defaultSelectedKeys={['1']}>
      <Menu.Item key={'1'}> About Me </Menu.Item>
      <Menu.Item key={'2'}> Resume </Menu.Item>
      <Menu.Item key={'3'}> Contact </Menu.Item>
    </Menu>
  );
}

const TitleBar: React.FC = () => {
  return (
    <PageHeader>
      <Typography.Title code={true} level={1} underline={true} >
        Surya Prakash Susarla
      </Typography.Title>
    </PageHeader>
  )
}

const ContentPage: React.FC = () => {
  return (
    <Card>
      This is some random card.
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
    <Footer>
      {time}
    </Footer>
  );
}

export default MainComponent;
