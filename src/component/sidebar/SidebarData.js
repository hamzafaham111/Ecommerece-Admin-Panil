import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as AiOutlineDoubleRight from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
// import * as AiFillDashboard from 'react-icons/ai';
// import * as MdKeyboardArrowLeft from 'react-icons/md';
 import * as ImUserTie from 'react-icons/im';
import {DiAppstore} from "react-icons/di";
import { GoPerson } from "react-icons/go";
import { FcDebt } from "react-icons/fc";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import GroupIcon from '@material-ui/icons/Group';
import CategoryIcon from '@material-ui/icons/Category';
import PersonIcon from '@material-ui/icons/Person';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard />,
    iconClosed: < MdKeyboardArrowLeft/>,
    iconOpened: <MdKeyboardArrowDown />,

    // subNav: [
    //   {
    //     title: 'Users',
    //     path: '/overview/users',
    //     icon: <AiIcons.AiOutlineDoubleRight />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <AiIcons.AiOutlineDoubleRight />
    //
    //   }
    // ]
  },
  {
    title: 'Customer',
    path: '/custimer',
    icon: <GroupIcon />
  },
  {
    title: 'Products',
    path:'/products',
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: 'Catogries',
    path: '/Catogries',
    icon: <CategoryIcon />
  },
  {
    title: 'Orders',
    path: '/orders',
    icon: <FcDebt />
  },
  {
    title: 'Messages',
    path: '/messeges',
    icon: <FaIcons.FaEnvelopeOpenText />,
  },
  {
    title: 'Logout',
    path: '/',
    icon: <PersonIcon/>,
    onPress: () =>{
      window.location.assign("http://localhost:3000/");
    }
  },
];
