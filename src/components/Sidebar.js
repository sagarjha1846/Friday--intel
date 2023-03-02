import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import terroristprofilling from "../images/svg/terrorist.svg";
import network from "../images/svg/network.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import React from "react";
import { getDomain, getFiles, getTORDomain, getUrl } from "../axios";

const Sidenav = (props) => {
  const { setNodeInfo } = props;
  const { collapseSidebar } = useProSidebar();

  const fetchTORDomainInfo = async () => {
    const response = await getTORDomain();
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "torDomain" });
      collapseSidebar();
    }
  };
  const fetchDomain = async () => {
    const response = await getDomain();
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "domain" });
      collapseSidebar();
    }
  };

  const fetchUrl = async () => {
    const response = await getUrl();
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "url" });
      collapseSidebar();
    }
  };

  const fetchFiles = async () => {
    const response = await getFiles();
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "files" });
      collapseSidebar();
    }
  };

  return (
    <Sidebar style={{zIndex:0}}>
      <main>
        <button
          style={{ textDecoration: "none" }}
          onClick={() => collapseSidebar()}
        >
          <ArrowBackIosNewIcon />
        </button>
      </main>
      <Menu>
        <MenuItem>
          <img src={terroristprofilling} alt="terrorist profilling logo" />
          Terrorist Profiling
        </MenuItem>
        <SubMenu src={network} label="Network Info">
          <MenuItem onClick={fetchTORDomainInfo}>TOR Domain</MenuItem>
          <MenuItem>TOR URL</MenuItem>
          <MenuItem>I2P Domain</MenuItem>
          <MenuItem>Domain(DEEPWEB)</MenuItem>
          <MenuItem>URL (DEEPWEB)</MenuItem>
          <MenuItem onClick={fetchDomain}>Domain</MenuItem>
          <MenuItem>Domain(Suspicious)</MenuItem>
          <MenuItem onClick={fetchUrl}>URL</MenuItem>
        </SubMenu>
        <SubMenu label="File Info">
          <MenuItem>Image</MenuItem>
          <MenuItem>Document</MenuItem>
          <MenuItem onClick={fetchFiles}>Other File</MenuItem>
        </SubMenu>
        <SubMenu label="Leaked Info">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <SubMenu label="SMS Info">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <SubMenu label="External Search Info">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default Sidenav;
