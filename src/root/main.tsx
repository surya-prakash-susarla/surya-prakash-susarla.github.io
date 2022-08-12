import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import './main.css';
import Sider from "antd/lib/layout/Sider";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { Content } from "antd/lib/layout/layout";

export function MainComponent(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
        <Menu mode="inline" items={getMenuItems()} theme="dark" defaultSelectedKeys={['1']} />
      </Sider>
      <div> this is some other text </div>
      <Content>
        <Button> this is a random button</Button>
      </Content>
    </Layout>
  );
}

function getMenuItems(): ItemType[] {
  return [
    createMenuItem('About Me', '1'),
    createMenuItem('Resume', '2'),
    createMenuItem('Contact', '3')
  ]
}

function createMenuItem(label: string, key: string): ItemType {
  return {
    label: label,
    key: key
  }
}
