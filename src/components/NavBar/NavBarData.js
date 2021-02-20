import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';

export const SideBarData = [
  {
    title: 'בית',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text',
    activeClassName: 'active-nav-text',
  },
  {
    title: 'בדיקת מתג',
    path: '/MySwitch',
    icon: <FaIcons.FaNetworkWired />,
    className: 'nav-text',
    activeClassName: 'active-nav-text',
  },
  {
    title: 'בדיקת פורטים',
    path: '/MyPort',
    icon: <FaIcons.FaEthernet />,
    className: 'nav-text',
    activeClassName: 'active-nav-text',
  },
];
export const SideBarDataSmall = [
  {
    title: 'בית',
    path: '/Home',
    icon: <AiIcons.AiFillHome />,
    className: 'small-nav-text',
    activeClassName: 'active-small-nav-text',
  },
  {
    title: 'בדיקת מתג',
    path: '/MySwitch',
    icon: <FaIcons.FaNetworkWired />,
    className: 'small-nav-text',
    activeClassName: 'active-small-nav-text',
  },
  {
    title: 'בדיקת פורטים ',
    path: '/MyPort',
    icon: <FaIcons.FaEthernet />,
    className: 'small-nav-text',
    activeClassName: 'active-small-nav-text',
  },
];
