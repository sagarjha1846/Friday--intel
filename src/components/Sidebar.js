import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";
import terroristprofilling from "../images/svg/terrorist.svg";
import network from "../images/svg/network.svg";
import "../css/sidebar.css"
import React from "react";
import { getDomain, getFiles, getTORDomain, getUrl } from "../axios";
import { useState } from "react";
// import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi/";
import { BsGlobe2} from "react-icons/bs";
import { VscFile } from "react-icons/vsc";
import { IoDocumentLockOutline } from "react-icons/io5";
import {BiMessageRoundedDots} from "react-icons/bi";
import { GrGroup } from "react-icons/gr";
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";

const Sidenav = (props) => {
  const { setNodeInfo, searchRef } = props;
  const { collapseSidebar } = useProSidebar();
  const [collapsed, setCollapsed] = useState(false);

  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };
  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const fetchTORDomainInfo = async () => {
    setNodeInfo({ list: [] });
    const response = await getTORDomain(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "torDomain" });
      collapseSidebar();
    }
  };
  const fetchDomain = async () => {
    setNodeInfo({ list: [] });
    const response = await getDomain(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "domain" });
      collapseSidebar();
    }
  };

  const fetchUrl = async () => {
    setNodeInfo({ list: [] });
    const response = await getUrl(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "url" });
      collapseSidebar();
    }
  };

  const fetchFiles = async () => {
    setNodeInfo({ list: [] });
    const response = await getFiles(searchRef);
    if (response?.data) {
      setNodeInfo({ list: [...response.data], name: "files" });
      collapseSidebar();
    }
  };

  return (
    <Sidebar
  className="sidebar"
        style={{ height: "100vh", position: "absolute" }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
    >
      <main>
    
          <Menu onClick={() => collapseSidebar()} className="collapse-sidebar_btn">
             {collapsed ? (
              <MenuItem
                icon={<MdOutlineKeyboardArrowRight/>}
                onClick={handleCollapsedChange}
              ></MenuItem>
            ) : (
              <MenuItem
                suffix={<MdOutlineKeyboardArrowLeft/>}
                onClick={handleCollapsedChange}
              >
                <div
                  style={{
                    padding: "9px",
                    // textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px"
                  }}
                >
                </div>
              </MenuItem>
            )}
          
          </Menu>
        
              
      </main>
      <Menu>
        <MenuItem>
          {/* <img src={terroristprofilling} className="terrorist-profiling_logo" alt="terrorist profilling logo" />
          Terrorist Profiling */}
<img src={terroristprofilling} className="terrorist-profiling_logo" alt="terrorist profilling logo" />
          Terrorist Profiling
        </MenuItem>
        <SubMenu src={network} icon={<BsGlobe2/>} label="Network Info">
          <MenuItem onClick={fetchTORDomainInfo}>TOR Domain</MenuItem>
          <MenuItem>TOR URL</MenuItem>
          <MenuItem>I2P Domain</MenuItem>
          <MenuItem>Domain(DEEPWEB)</MenuItem>
          <MenuItem>URL (DEEPWEB)</MenuItem>
          <MenuItem onClick={fetchDomain}>Domain</MenuItem>
          <MenuItem>Domain(Suspicious)</MenuItem>
          <MenuItem onClick={fetchUrl}>URL</MenuItem>
        </SubMenu>
        <SubMenu  label="File Info" icon={<VscFile/>}>
          <MenuItem>Image</MenuItem>
          <MenuItem>Document</MenuItem>
          <MenuItem onClick={fetchFiles}>Other File</MenuItem>
        </SubMenu>
        <SubMenu icon={<IoDocumentLockOutline/>} label="Leaked Info">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <SubMenu icon={<BiMessageRoundedDots/>} label="SMS Info">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <SubMenu icon={<GrGroup/>} label="External Search Info">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
      </Menu>

      
    </Sidebar>
  );
};

export default Sidenav;


