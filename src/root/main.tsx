import './main.css';
import 'animate.css';
import Card from 'antd/lib/card/Card';
import React from 'react';
import { Layout, Typography } from 'antd';
import { PageSelection } from './interfaces';
import { SideMenu } from './side_bar_component';
import { TitleBar } from './title_bar_component';
import { ContentPage } from './content_page_component';
import { FooterBar } from './footer_bar_component';

const MainComponent: React.FC = () => {
  const [pageSelection, setPageSelection] = React.useState(PageSelection.AboutMePage);
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

export default MainComponent;
