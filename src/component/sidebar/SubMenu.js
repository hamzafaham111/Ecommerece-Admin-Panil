import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <div className="sidebarMenu">
        <div className="sidebarList">
          <Link to={item?.onPress?null:item.path} onClick={item?.onPress?item.onPress: item.subNav && showSubnav} className="link">
            <div className={"SidebarListFlex"}>
            <div className="sidebarListItem active">
             <div className={"sidebarListIcon"}> {item.icon}</div>
             <div className={"sidebarListText"}>  {item.title}</div>
            </div>
                <div className={"submenu"}>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </div>

          </Link>
        </div>
      </div>
      <div>
        {subnav &&
        item.subNav.map((item, index) => {
          return (
              <div className={'subMenu'}>
              <Link className={"Link-Sidebar active"} to={item.path} key={index}>
                  <div className="sidebarListItems">
                      <div className={"sidebarListIcons"}> {item.icon}</div>
                      <div className={"sidebarListTexts"}>  {item.title}</div>
                  </div>
              </Link>
              </div>
          );
        })}
      </div>

    </>
  );
};

export default SubMenu;
