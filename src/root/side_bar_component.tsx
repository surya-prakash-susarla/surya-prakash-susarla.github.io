import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { SideMenuProps, PageSelection } from './interfaces';
import { Button, Menu } from 'antd';
import Sider from 'antd/lib/layout/Sider';
import './main.css';
import 'animate.css'

export const SideMenu: React.FC<SideMenuProps> = (props: SideMenuProps) => {
  const [collapsed, setCollapsed] = useState(false);
  let toggleCollapsed = (): void => { setCollapsed(!collapsed) };
  let menu: JSX.Element = (
    <Menu defaultSelectedKeys={['1']} mode={'inline'} inlineCollapsed={true}
       className={'animate__animated animate__fadeInDown'}>
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
        type={'primary'}
        onClick={toggleCollapsed}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        className={'sidebar-button'} />
      {
        collapsed ? null : menu
      }
    </Sider>
  );
}
