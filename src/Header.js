import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import { logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
export const Header = () => {
  
  const dispatach = useDispatch();
  const logoutApp = () => {
    dispatach(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      {/* <h1>this is header</h1>  */}

      <div className="header_left">
        <img
          src="https://www.raulvelazquezphd.com/wp-content/uploads/2017/10/LinkedIn-1.png"
          alt=""
        ></img>

        <div className="header_search">
          <SearchIcon />

          {/* searchicon*/}
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
        avatar={true}
          title="Me"
          onclick={logoutApp}
        />
      </div>
    </div>
  );
};
