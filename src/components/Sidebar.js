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
import { getDomain, getFiles, getTORDomain, getUrl, getIP } from '../axios';
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

const Sidenav = (props) => {
  const { setNodeInfo, searchRef, nodeInfo } = props;
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const fetchTORDomainInfo = async (key) => {
    setNodeInfo({ list: [] });
    const response = await getTORDomain(searchRef);
    if (response?.data) {
      if (key === 'torDomain') {
        const data = response?.data?.crawls;
        const mapping = data && Object.keys(data).map((el) => ({ urls: el }));
        setNodeInfo({
          list: [...mapping],
          name: key,
        });
      } else {
        const data = response?.data?.identifierReport?.linkedOnions;
        const mapping = data && data.map((el) => ({ urls: el }));
        setNodeInfo({
          list: [...mapping],
          name: key,
        });
      }

      collapseSidebar();
    }
  };
  const fetchDomain = async () => {
    setNodeInfo({ list: [] });
    const response = await getDomain(searchRef);
    if (response?.data) {
      const data = response?.data.map((el) => ({ ...el, urls: el.email }));
      setNodeInfo({ list: data, name: 'domain' });
      collapseSidebar();
    }
  };

  const fetchUrl = async () => {
    setNodeInfo({ list: [] });
    const response = await getUrl(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: 'url' });
      collapseSidebar();
    }
    // else{
    //   setNodeInfo("result not found");
    // collapseSidebar();
    // }
    if (response.data.Result === 'Not Found') {
      setNodeInfo({
        list: [...response.data.Result],
        name: 'Result not found',
      });
      collapseSidebar();
    }
  };

  const fetchIP = async () => {
    setNodeInfo({ list: [] });
    const response = await getIP(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: 'IP' });
      collapseSidebar();
    }
  };

  const fetchFiles = async () => {
    setNodeInfo({ list: [] });
    const response = await getFiles(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: 'files' });
      collapseSidebar();
    }
  };

  console.log(nodeInfo);
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
      </main>
      <Menu>
        <MenuItem>
          {/* <img src={terroristprofilling} className="terrorist-profiling_logo" alt="terrorist profilling logo" />
          Terrorist Profiling */}
          <img
            src={terroristprofilling}
            className="terrorist-profiling_logo"
            alt="terrorist profilling logo"
          />
          Terrorist Profiling
        </MenuItem>
        <SubMenu src={network} icon={<BsGlobe2 />} label="Network Info">
          <MenuItem onClick={() => fetchTORDomainInfo('torDomain')}>
            TOR Domain{' '}
            {nodeInfo.name === 'torDomain' ? nodeInfo.list.length : null}
          </MenuItem>
          <MenuItem onClick={() => fetchTORDomainInfo('torURL')}>
            TOR URL {nodeInfo.name === 'torURL' ? nodeInfo.list.length : null}
          </MenuItem>
          <MenuItem>I2P Domain</MenuItem>
          <MenuItem>Domain(DEEPWEB)</MenuItem>
          <MenuItem>URL (DEEPWEB)</MenuItem>
          <MenuItem onClick={fetchDomain}>
            Domain{nodeInfo.name === 'domain' ? nodeInfo.list.length : null}
          </MenuItem>
          <MenuItem>Domain(Suspicious)</MenuItem>
          <MenuItem onClick={fetchUrl}>
            URL {nodeInfo.name === 'url' ? nodeInfo.list.length : null}
          </MenuItem>
          <MenuItem onClick={fetchIP}>
            IP {nodeInfo.name === 'IP' ? nodeInfo.list.length : null}
          </MenuItem>
        </SubMenu>
        <SubMenu label="File Info" icon={<VscFile />}>
          <MenuItem>Image</MenuItem>
          <MenuItem>Document</MenuItem>
          <MenuItem onClick={fetchFiles}>
            Other File {nodeInfo.name === 'files' ? nodeInfo.list.length : null}
          </MenuItem>
        </SubMenu>
        <SubMenu icon={<IoDocumentLockOutline />} label="Leaked Info">
          <MenuItem> Leaked Email </MenuItem>
          <MenuItem> Leaked Document </MenuItem>
        </SubMenu>
        <SubMenu icon={<BiMessageRoundedDots />} label="SNS Info">
          <MenuItem> Instagram </MenuItem>
          <MenuItem> Facebook </MenuItem>
        </SubMenu>
        <SubMenu icon={<GrGroup />} label="External Search Info">
          <MenuItem> Google Search </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
