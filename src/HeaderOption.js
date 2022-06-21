import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
// import { Header } from "./Header";
import "./HeaderOption.css";
function HeaderOption({ avatar, Icon, title, onclick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onclick} className="headerOption">
      {Icon && (
        <Icon
          className="
           headerOpion_icon"
        />
      )}
      {avatar && (
        <Avatar className="headerOption_icon" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
    //   avatar={user.photoUrl}
  );
}
export default HeaderOption;
