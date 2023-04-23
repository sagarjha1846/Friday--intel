/* eslint-disable react-hooks/exhaustive-deps */
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import terroristprofilling from '../images/svg/terrorist.svg';
import network from '../images/svg/network.svg';
import '../css/sidebar.css';
import React from 'react';
import { useState } from 'react';
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { BsGlobe2 } from 'react-icons/bs';
import { VscFile } from 'react-icons/vsc';
import { IoDocumentLockOutline } from 'react-icons/io5';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { GrGroup } from 'react-icons/gr';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { useEffect } from 'react';

const Sidenav = (props) => {
  const { nodeInfo, setActiveMenu, activeMenu } = props;
  console.log(nodeInfo);
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  useEffect(() => {
    if (activeMenu !== '') {
      setToggled(true);
    }
  }, [activeMenu]);

  const menu = [
    {
      label: 'Terrorist Profilling',
      key: 'terroristprofilling',
      icon: (
        <img
          src={terroristprofilling}
          className="terrorist-profiling_logo"
          alt="terrorist profilling logo"
        />
      ),
    },
    {
      label: 'Network Info',
      key: 'networkinfo',
      icon: <BsGlobe2 />,
      children: [
        { label: 'TOR Domain', key: 'tordomain' },
        { label: 'TOR URL', key: 'torurl' },
        { label: 'I2P Domain', key: 'i2p' },
        { label: 'Domain(DEEPWEB)', key: 'domaindeepweb' },
        { label: 'URL (DEEPWEB)', key: 'urldeepweb' },
        { label: 'Domain', key: 'domain' },
        { label: 'Domain(Suspicious)', key: 'domainsuspicious' },
        { label: 'URL', key: 'url' },
        { label: 'IP', key: 'ip' },
      ],
    },
    {
      label: 'File Info',
      key: 'fileinfo',
      icon: <VscFile />,
      children: [
        { label: 'Image', key: 'image', icon: '' },
        { label: 'Document', key: 'document', icon: '' },
        { label: 'Other File', key: 'otherfile', icon: '' },
      ],
    },
    {
      label: 'Leaked Info',
      key: 'leakedinfo',
      icon: <IoDocumentLockOutline />,
      children: [
        { label: 'Leaked Email', key: 'leakedemail', icon: '' },
        { label: 'Leaked Document', key: 'leakeddocument', icon: '' },
      ],
    },
    {
      label: 'SNS Info',
      key: 'snsinfo',
      icon: <BiMessageRoundedDots />,
      children: [
        { label: 'Instagram', key: 'instagram', icon: '' },
        { label: 'Facebook', key: 'facebook', icon: '' },
      ],
    },

    {
      label: 'External Search Info',
      key: 'externalsearchinfo',
      icon: <GrGroup />,
      children: [{ label: 'Google Search', key: 'googlesearch', icon: '' }],
    },
  ];

  const menuItems = menu.map((item) => {
    if (item.children) {
      return (
        <SubMenu key={item.key} label={item.label} icon={item.icon}>
          {item.children.map((child) => (
            <MenuItem
              key={child.key}
              suffix={
                nodeInfo && nodeInfo.data
                  ? nodeInfo.data[child.key]?.length > 200
                    ? '200+'
                    : nodeInfo.data[child.key]?.length
                  : null
              }
              onClick={() => setActiveMenu(child.key)}>
              {child.label}
            </MenuItem>
          ))}
        </SubMenu>
      );
    } else {
      return (
        <MenuItem
          key={item.key}
          icon={item.icon}
          suffix={
            nodeInfo && nodeInfo.data
              ? nodeInfo.data[item.key]?.length > 200
                ? '200+'
                : nodeInfo.data[item.key]?.length
              : null
          }
          onClick={() => setActiveMenu(item.key)}>
          {item.label}
        </MenuItem>
      );
    }
  });
  return (
    <Sidebar
      className="sidebar"
      style={{ height: '100vh', position: 'absolute' }}
      collapsed={collapsed}
      toggled={toggled}
      handleToggleSidebar={handleToggleSidebar}
      handleCollapsedChange={handleCollapsedChange}>
      <main>
        <Menu
          onClick={() => collapseSidebar()}
          className="collapse-sidebar_btn">
          {collapsed ? (
            <MenuItem
              icon={<MdOutlineKeyboardArrowRight />}
              onClick={handleCollapsedChange}></MenuItem>
          ) : (
            <MenuItem
              suffix={<MdOutlineKeyboardArrowLeft />}
              onClick={handleCollapsedChange}>
              <div
                style={{
                  padding: '9px',
                  // textTransform: "uppercase",
                  fontWeight: 'bold',
                  fontSize: 14,
                  letterSpacing: '1px',
                }}></div>
            </MenuItem>
          )}
        </Menu>

        <Menu>{menuItems}</Menu>
      </main>
    </Sidebar>
  );
};

export default Sidenav;
