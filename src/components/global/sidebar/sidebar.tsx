import React from "react";
import styled from "styled-components";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";
interface Props {}

const SideNav = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);

  .main-menu:hover,
  nav.main-menu.expanded {
    width: 250px;
    overflow: visible;
  }

  .main-menu {
    background: #37a0ea;
    height: 100vh;
    display:block;
    top: 0;
    bottom: 0;
    left: 0;
    width: 65px;
    overflow: hidden;
    -webkit-transition: width 0.05s linear;
    transition: width 0.05s linear;
    -webkit-transform: translateZ(0) scale(1, 1);
    z-index: 1000;
  }
  .main-menu li {
    position: relative;
    display: block;
    width: 250px;
  }

  .main-menu li > a {
    position: relative;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: white;
    font-family: arial;
    font-size: 14px;
    text-decoration: none;
    -webkit-transform: translateZ(0) scale(1, 1);
    -webkit-transition: all 0.1s linear;
    transition: all 0.1s linear;
  }

  .main-menu .nav-icon {
    position: relative;
    display: table-cell;
    width: 60px;
    height: 36px;
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
  }

  .main-menu .nav-text {
    position: relative;
    display: table-cell;
    color:black;
    vertical-align: middle;
    width: 190px;
  }

  .main-menu > ul.logout {
    position: absolute;
    left: 0;
    bottom: 0;
  }

  .no-touch .scrollable.hover {
    overflow-y: hidden;
  }

  .no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  nav ul,
  nav li {
    outline: 0;
    margin: 0;
    padding: 0;
  }
  .main-menu li:hover > a,
  nav.main-menu li.active > a,
  .dropdown-menu > li > a:hover,
  .dropdown-menu > li > a:focus,
  .dropdown-menu > .active > a,
  .dropdown-menu > .active > a:hover,
  .dropdown-menu > .active > a:focus,
  .no-touch .dashboard-page nav.dashboard-menu ul li:hover a,
  .dashboard-page nav.dashboard-menu ul li.active a {
    color: #fff;
    background-color: #1D7EC2;
  }
`;
const iconClass = mergeStyles({
  fontSize: 25,
  height: 25,
  width: 25,
  margin: "10px",
  backgroundColor: "#60BBFB",
  borderRadius: "10px",
  textAlign: "center",
  position: "relative",
  padding: "10px 10px 10px 10px",
  verticalAlign: "middle"
});
const sidebar: React.FC<Props> = () => {
  return (
    <SideNav>
      <nav className="main-menu">
        <ul>
          <li>
            <a href="#/">
              <FontIcon iconName="ViewDashboard" className={iconClass} />
              <span className="nav-text"></span>
            </a>
          </li>
          <li>
            <a href="#/">
              <FontIcon iconName="GoToDashboard" className={iconClass} />
              <span className="nav-text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#/">
              <FontIcon iconName="UserFollowed" className={iconClass} />
              <span className="nav-text">Users</span>
            </a>
          </li>
        </ul>
        <ul className="logout">
          <li>
            <a href="#/">
              <FontIcon iconName="SignOut" className={iconClass} />
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </SideNav>
  );
};

export default sidebar;
