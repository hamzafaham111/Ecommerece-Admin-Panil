import React,{useState} from 'react';
import "./sidebar.css";

import {InputBase, makeStyles,} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import SubMenu from "./SubMenu";
import {SidebarData} from "./SidebarData";

const useStyle = makeStyles(theme => ({
  searchInput: {
    opacity: ".6",
    padding: "0 8px",
    fontSize: "1.2rem",
  },
  inputField:{
    background: "#f2f2f2",
    margin: "12px",
    border: "2px solid #333333",
    borderRadius: "4px",
    marginBottom: "22px",

    '&:hover':{
      background: "#fff",
      color: "#444444",
      border: "2px solid #999999"
    },
  }
}))
export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const classes = useStyle();
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className={classes.inputField}>
          <InputBase
              className={classes.searchInput}
          placeholder={"Search Menu"}
          startAdornment={<SearchIcon fontSize={"medium"} />}
          />
        </div>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </div>
  );
}
